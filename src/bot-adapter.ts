import { chatbotFlow } from "./components/chatbot.flow.js";
import { ChatbotEngine } from "./services/chatbot.service.js";

type StepOption = { label: string; nextStep: string };
type Step = { message: string; options?: StepOption[] };

const sessions = new Map<number, ChatbotEngine>();

function getEngine(conversationId: number): ChatbotEngine {
    let eng = sessions.get(conversationId);
    if (!eng) {
        eng = new ChatbotEngine(chatbotFlow);
        sessions.set(conversationId, eng);
    }
    return eng;
}

function render(step: Step, eng: ChatbotEngine): string {
    let out = normalizeHtml(step.message.trim()) || "";
    const opts = step.options ?? [];
    if (opts.length) {
        const lines = opts.map((o, i) => `${o.label}`);
        if ((eng.getHistory?.() ?? []).length > 1) lines.push("9️⃣ Previous Menu");
        lines.push("0️⃣ Start Over");
        out += "\n\n" + lines.join("\n");
    }
    return out || "Thank you! Conversation complete.";
}

function normalizeHtml(html: string): string {
    return html.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
}

export function getFirstStep(conversationId: number): string {
    const eng = getEngine(conversationId);
    // If you ever need to force it, uncomment:
    // eng.restart();
    const step = eng.getCurrentStep() as Step;
    return render(step, eng);
}

export async function handleIncomingText(
    conversationId: number,
    text: string
): Promise<string> {
    const eng = getEngine(conversationId);
    const raw = (text ?? "").trim();

    if (!raw) return "Please enter a valid input.";
    if (raw.toLowerCase() === "agent") {
        eng.restart?.();
        return "Please wait while I am transferring you to the available agent.";
    }
    if (raw === "0") {
        eng.restart();
        return render(eng.getCurrentStep() as Step, eng);
    }
    if (raw === "9") {
        eng.goBack();
        return render(eng.getCurrentStep() as Step, eng);
    }

    const current = eng.getCurrentStep() as Step;

    // If options exist, treat numbers as choices
    if (Array.isArray(current.options) && current.options.length > 0) {
        const n = Number(raw);
        if (Number.isInteger(n) && n >= 1 && n <= current.options.length) {
            eng.selectOption(n - 1);
            return render(eng.getCurrentStep() as Step, eng);
        }
        return "Please enter a valid number.\n\n" + render(current, eng);
    }

    // Otherwise treat as free text (your engine routes internally)
    eng.receiveUserInput(raw);
    return render(eng.getCurrentStep() as Step, eng);
}

// src/server.ts
import "dotenv/config";
import express from "express";
import crypto from "crypto";
import { fetch } from "undici";
import { handleIncomingText } from "./bot-adapter.js";

const {
    PORT = "3000",
    CHATWOOT_BASE_URL,
    CHATWOOT_ACCOUNT_ID,
    CHATWOOT_API_TOKEN,
    CHATWOOT_WEBHOOK_SECRET
} = process.env;

const app = express();
app.use(express.json({ verify: (req: any, _res, buf) => { req.rawBody = buf; } }));

function verifySignature(req: any): boolean {
    if (!CHATWOOT_WEBHOOK_SECRET) return true;
    const sig = req.headers["x-chatwoot-signature"] as string | undefined;
    if (!sig) return false;
    const expected = crypto.createHmac("sha256", CHATWOOT_WEBHOOK_SECRET).update(req.rawBody).digest("hex");
    try {
        return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
    } catch {
        return false;
    }
}

async function sendToChatwoot(conversationId: number, content: string) {
    const url = `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/conversations/${conversationId}/messages`;
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "api_access_token": CHATWOOT_API_TOKEN! },
        body: JSON.stringify({ content })
    });
    if (!res.ok) throw new Error(`Chatwoot send failed: ${res.status} ${await res.text()}`);
}

// Webhook: Chatwoot -> your server
app.post("/chatwoot/webhook", async (req, res) => {
    try {
        if (!verifySignature(req)) return res.status(401).send("Invalid signature");
        const event = req.body;
        if (event?.event === "message_created" && event?.payload?.message_type === "incoming") {
            const conversationId = Number(event.payload?.conversation?.id);
            const text = event.payload?.content ?? "";
            const reply = await handleIncomingText(conversationId, text);
            await sendToChatwoot(conversationId, reply);
        }
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.status(500).send("Webhook error");
    }
});

// Optional: keep your current UI and still flow through Chatwoot
app.post("/message", async (req, res) => {
    try {
        const { text, conversationId } = req.body ?? {};
        if (!text) return res.status(400).json({ error: "text required" });

        const convId = conversationId ?? (await ensureConversation());
        await sendToChatwoot(convId, text); // log user message into Chatwoot
        const reply = await handleIncomingText(convId, text);
        await sendToChatwoot(convId, reply); // bot reply into Chatwoot
        res.json({ conversationId: convId, reply });
    } catch (e: any) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
});

let _cachedConvId: number | null = null;
async function ensureConversation(): Promise<number> {
    if (_cachedConvId) return _cachedConvId;
    const url = `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/conversations`;
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "api_access_token": CHATWOOT_API_TOKEN! },
        body: JSON.stringify({ inbox_id: process.env.CHATWOOT_INBOX_ID })
    });
    if (!res.ok) throw new Error(`Create conv failed: ${res.status} ${await res.text()}`);
    const data: any = await res.json();
    _cachedConvId = data.id;
    return _cachedConvId!;
}

app.listen(Number(PORT), () => {
    console.log(`Chatwoot bridge listening on http://localhost:${PORT}`);
});

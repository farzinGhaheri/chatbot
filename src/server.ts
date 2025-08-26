import "dotenv/config";
import express from "express";
import crypto from "crypto";
import { fetch } from "undici";

import { getFirstStep, handleIncomingText } from "./bot-adapter.js";

const {
    PORT = "3000",
    CHATWOOT_BASE_URL,
    CHATWOOT_API_TOKEN,
    CHATWOOT_WEBHOOK_SECRET,
} = process.env;

if (!CHATWOOT_BASE_URL || !CHATWOOT_API_TOKEN) {
    console.error("Missing envs: set CHATWOOT_BASE_URL and CHATWOOT_API_TOKEN");
    process.exit(1);
}

const app = express();
// keep raw body for signature verification
app.use(
    express.json({
        verify: (req: any, _res, buf) => {
            req.rawBody = buf;
        },
    })
);

// health routes (avoid 404 noise)
app.get("/", (_req, res) => res.send("OK"));
app.post("/", (_req, res) => res.status(204).end());

// Track whether we've sent the first step for a conversation
const startedConversations = new Set<number>();

function verifySignature(req: any): boolean {
    if (!CHATWOOT_WEBHOOK_SECRET) return true; // skip if not set
    const sig = req.headers["x-chatwoot-signature"] as string | undefined;
    if (!sig) return false;
    const expected = crypto
        .createHmac("sha256", CHATWOOT_WEBHOOK_SECRET)
        .update(req.rawBody)
        .digest("hex");
    try {
        return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
    } catch {
        return false;
    }
}

async function sendToChatwoot(
    accountId: number,
    conversationId: number,
    content: string
) {
    const url = `${CHATWOOT_BASE_URL}/api/v1/accounts/${accountId}/conversations/${conversationId}/messages`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            api_access_token: CHATWOOT_API_TOKEN!,
        },
        // add { private: true } to hide from end-user if needed
        body: JSON.stringify({ content }),
    });

    const body = await res.text();
    if (!res.ok) {
        console.error("Chatwoot send failed:", res.status, body);
        throw new Error(`Chatwoot send failed: ${res.status}`);
    }
    return body;
}
app.post("/chatwoot/webhook", async (req, res) => {
    try {
        if (!verifySignature(req)) return res.status(401).send("Invalid signature");

        const event = req.body;

        if (
            event?.event === "message_created" &&
            event?.message_type === "incoming"
        ) {
            const accountId = Number(event?.account?.id); // derive from payload
            const conversationId = Number(event?.conversation?.id);
            const text = event?.content ?? "";

            if (!Number.isFinite(accountId) || !Number.isFinite(conversationId)) {
                console.error("Missing accountId or conversationId in webhook payload");
                return res.sendStatus(200);
            }

            if (!startedConversations.has(conversationId)) {
                startedConversations.add(conversationId);
                const first = getFirstStep(conversationId);
                await sendToChatwoot(accountId, conversationId, first);
                return res.sendStatus(200);
            }

            const replyText = await handleIncomingText(conversationId, text); // string reply
            await sendToChatwoot(accountId, conversationId, replyText);
        }

        res.sendStatus(200);
    } catch (e) {
        console.error("Webhook error:", e);
        res.status(500).send("Webhook error");
    }
});

app.listen(Number(PORT), () => {
    console.log(`Chatwoot bridge listening on http://localhost:${PORT}`);
});

import type { AgentApplication } from "@/lib/agentApplication";

type DeliveryResult = { ok: true } | { ok: false; message: string };

export async function deliverAgentApplication(data: AgentApplication): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.AGENT_APPLICATION_FROM;
  const to = process.env.AGENT_APPLICATION_TO;

  // Never report success when there is no real delivery destination.
  if (!apiKey || !from || !to) {
    return { ok: false, message: "Applications are temporarily unavailable. Please contact us by email." };
  }

  const body = [
    "OpenGamer - Agent Program application",
    "",
    `Full name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Country: ${data.country}`,
    `Telegram: ${data.telegram || "Not provided"}`,
    `LinkedIn: ${data.linkedin || "Not provided"}`,
    `Operator connections: ${data.operatorNetwork}`,
    `Target markets: ${data.targetMarkets}`,
    `Experience: ${data.experience || "Not provided"}`,
    "",
    "Source: /become-an-agent",
    `Received (UTC): ${new Date().toISOString()}`,
    "Applicant consented to processing this enquiry."
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: "New OpenGamer agent application",
        text: body
      }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store"
    });

    if (!response.ok) {
      // Avoid recording applicant details or provider response data in server logs.
      return { ok: false, message: "The application could not be delivered. Please try again later." };
    }

    const receipt = (await response.json()) as { id?: unknown };
    if (typeof receipt.id !== "string" || !receipt.id) {
      return { ok: false, message: "Delivery was not confirmed. Please contact us by email." };
    }

    return { ok: true };
  } catch {
    return { ok: false, message: "The application could not be delivered. Please try again later." };
  }
}

export type LeadPayload = {
  fullName: string;
  company: string;
  email: string;
  jobTitle: string;
  companyType: string;
  serviceInterest: string;
  projectDescription: string;
  consent: string;
  website?: string;
  preferredContactMethod?: string;
  projectStage?: string;
  expectedLaunch?: string;
  numberOfGames?: string;
  existingPlatform?: string;
  targetMarkets?: string;
  requiredIntegration?: string;
  budgetRange?: string;
};

type DeliveryResult = {
  ok: boolean;
  message?: string;
};

type LeadProvider = "none" | "console" | "resend" | "hubspot" | "pipedrive" | "custom";

export async function deliverLead(payload: LeadPayload): Promise<DeliveryResult> {
  const provider = (process.env.LEAD_PROVIDER || "none") as LeadProvider;

  switch (provider) {
    case "none":
      return {
        ok: false,
        message: "Lead delivery is not configured yet."
      };
    case "console":
      return deliverToConsole(payload);
    case "resend":
      return deliverToResend(payload);
    case "hubspot":
    case "pipedrive":
    case "custom":
      return {
        ok: false,
        message: `Lead provider "${provider}" is not configured yet.`
      };
    default:
      return {
        ok: false,
        message: `Lead provider "${provider}" is not supported.`
      };
  }
}

async function deliverToConsole(payload: LeadPayload): Promise<DeliveryResult> {
  if (process.env.NODE_ENV === "production") {
    return {
      ok: false,
      message: "Console lead delivery is disabled in production."
    };
  }

  console.info("OpenGamer lead received in preview/local mode", {
    company: payload.company,
    serviceInterest: payload.serviceInterest,
    projectStage: payload.projectStage || "Not specified"
  });

  return { ok: true };
}

async function deliverToResend(payload: LeadPayload): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM || "OpenGamer Website <website@open-gamer.com>";

  if (!apiKey || !to) {
    return {
      ok: false,
      message: "Resend lead delivery requires RESEND_API_KEY and LEAD_EMAIL_TO."
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `OpenGamer enquiry: ${payload.company}`,
      text: formatLead(payload)
    })
  });

  if (!response.ok) {
    return {
      ok: false,
      message: "Lead delivery provider rejected the request."
    };
  }

  return { ok: true };
}

function formatLead(payload: LeadPayload) {
  return [
    `Full Name: ${payload.fullName}`,
    `Company: ${payload.company}`,
    `Work Email: ${payload.email}`,
    `Job Title: ${payload.jobTitle}`,
    `Company Type: ${payload.companyType}`,
    `Primary Area of Interest: ${payload.serviceInterest}`,
    `Reference Link: ${payload.website || "Not provided"}`,
    `Preferred Contact Method: ${payload.preferredContactMethod || "Not provided"}`,
    `Project Stage: ${payload.projectStage || "Not provided"}`,
    `Expected Launch: ${payload.expectedLaunch || "Not provided"}`,
    `Number of Games: ${payload.numberOfGames || "Not provided"}`,
    `Existing Platform: ${payload.existingPlatform || "Not provided"}`,
    `Target Markets: ${payload.targetMarkets || "Not provided"}`,
    `Required Integration: ${payload.requiredIntegration || "Not provided"}`,
    `Budget Range: ${payload.budgetRange || "Not provided"}`,
    "",
    "Project Context:",
    payload.projectDescription
  ].join("\n");
}

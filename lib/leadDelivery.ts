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

type LeadProvider = "console" | "resend" | "hubspot" | "pipedrive" | "custom";

export async function deliverLead(payload: LeadPayload): Promise<DeliveryResult> {
  const provider = (process.env.LEAD_PROVIDER || "console") as LeadProvider;

  switch (provider) {
    case "console":
      return deliverToConsole(payload);
    case "resend":
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
  if (process.env.NODE_ENV === "development") {
    console.info("OpenGamer lead submission", {
      recipient: process.env.LEAD_EMAIL_TO || "mn@open-gamer.com",
      fullName: payload.fullName,
      company: payload.company,
      email: payload.email,
      serviceInterest: payload.serviceInterest
    });
  }

  return { ok: true };
}

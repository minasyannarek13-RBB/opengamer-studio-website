export type AgentApplication = {
  fullName: string;
  email: string;
  company: string;
  country: string;
  telegram: string;
  linkedin: string;
  operatorNetwork: string;
  targetMarkets: string;
  experience: string;
  consent: string;
};

export type ApplicationValidation = {
  data?: AgentApplication;
  errors: Record<string, string>;
};

const limits: Record<keyof AgentApplication, number> = {
  fullName: 120,
  email: 254,
  company: 160,
  country: 100,
  telegram: 100,
  linkedin: 300,
  operatorNetwork: 30,
  targetMarkets: 300,
  experience: 1500,
  consent: 3
};

const allowedNetwork = ["1-4", "5-20", "20+", "Prefer not to say"];

export function validateAgentApplication(input: unknown): ApplicationValidation {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { errors: { form: "Invalid application." } };
  }

  const values = input as Record<string, unknown>;
  const data = {} as AgentApplication;
  for (const key of Object.keys(limits) as (keyof AgentApplication)[]) {
    const raw = values[key];
    if (raw !== undefined && typeof raw !== "string") {
      errors[key] = "Invalid value.";
      continue;
    }
    const value = (raw || "").toString().trim();
    if (value.length > limits[key]) {
      errors[key] = `Keep this under ${limits[key]} characters.`;
    }
    data[key] = value;
  }

  for (const key of ["fullName", "email", "country", "operatorNetwork", "targetMarkets"] as const) {
    if (!data[key]) errors[key] = "Required.";
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (data.operatorNetwork && !allowedNetwork.includes(data.operatorNetwork)) {
    errors.operatorNetwork = "Choose an option from the list.";
  }

  if (data.consent !== "yes") {
    errors.consent = "Consent is required.";
  }

  if (data.linkedin && !/^https:\/\/[^\s]+$/i.test(data.linkedin)) {
    errors.linkedin = "Enter a full https:// URL.";
  }

  return Object.keys(errors).length ? { errors } : { data, errors };
}

"use client";

import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  budgetRangeOptions,
  companyTypes,
  contactMethods,
  expectedLaunchOptions,
  numberOfGamesOptions,
  projectStages,
  serviceInterests
} from "@/content/contact";

type FormState = "idle" | "submitting" | "success" | "error";
type LeadResponse = {
  message?: string;
  errors?: Record<string, string>;
};

const fieldMaxLengths: Record<string, number> = {
  fullName: 120,
  company: 160,
  email: 254,
  jobTitle: 160,
  targetMarkets: 240,
  existingPlatform: 240,
  requiredIntegration: 500,
  website: 500,
  phone: 40
};

const fieldAutoComplete: Record<string, string> = {
  fullName: "name",
  company: "organization",
  email: "email",
  jobTitle: "organization-title",
  phone: "tel",
  website: "url"
};

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serviceDefault, setServiceDefault] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState("");
  const [sourceContext, setSourceContext] = useState({
    sourcePage: "/contact",
    contextParameter: "",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    utmTerm: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mappedInterest = mapInterestToService(params.get("interest") || params.get("service"));
    setSourceContext({
      sourcePage: window.location.pathname,
      contextParameter: window.location.search || "",
      referrer: document.referrer || "",
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || "",
      utmTerm: params.get("utm_term") || ""
    });
    if (mappedInterest) {
      setServiceDefault(mappedInterest);
    }
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const method = String(formData.get("preferredContactMethod") || "");
    const phone = String(formData.get("phone") || "").trim();

    if (method === "Phone" && !isValidPhone(phone)) {
      setState("error");
      setErrors({ phone: "Enter a valid international phone number." });
      setMessage("Please check the form and try again.");
      return;
    }

    setState("submitting");
    setMessage("");
    setErrors({});

    let response: Response;
    let result: LeadResponse;

    try {
      response = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" }
      });
      result = (await response.json()) as LeadResponse;
    } catch {
      setState("error");
      setMessage("The request could not be sent. Please try again.");
      return;
    }

    if (response.ok) {
      setState("success");
      setMessage(result.message || "Your enquiry has been submitted. The OpenGamer commercial or product team will review the information and contact you regarding the next practical step.");
      form.reset();
      setPreferredContactMethod("");
      return;
    }

    setState("error");
    setErrors(result.errors || {});
    setMessage(result.message || "Please check the form and try again.");
  }

  const errorEntries = Object.entries(errors);

  return (
    <form
      onSubmit={submit}
      noValidate
      aria-busy={state === "submitting"}
      className="premium-card grid gap-5 rounded-2xl border border-line bg-white/[0.045] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.24)] sm:p-6 lg:p-7"
    >
      <div className="hidden">
        <label htmlFor="website_url">Website URL</label>
        <input id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="sourcePage" value={sourceContext.sourcePage} />
      <input type="hidden" name="contextParameter" value={sourceContext.contextParameter} />
      <input type="hidden" name="referrer" value={sourceContext.referrer} />
      <input type="hidden" name="utmSource" value={sourceContext.utmSource} />
      <input type="hidden" name="utmMedium" value={sourceContext.utmMedium} />
      <input type="hidden" name="utmCampaign" value={sourceContext.utmCampaign} />
      <input type="hidden" name="utmContent" value={sourceContext.utmContent} />
      <input type="hidden" name="utmTerm" value={sourceContext.utmTerm} />

      <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-emerald">Business enquiry</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl">Tell us enough to route the project correctly.</h3>
        </div>
        <p className="text-xs leading-5 text-slate-500"><span className="text-emerald">*</span> Required fields</p>
      </div>

      {errorEntries.length ? (
        <div className="rounded-xl border border-red-400/30 bg-red-500/[0.08] p-4 text-sm leading-6 text-red-100" role="alert">
          <p className="font-semibold text-white">Please review these fields:</p>
          <ul className="mt-2 list-disc pl-5">
            {errorEntries.map(([field, error]) => (
              <li key={field}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset className="grid gap-5">
        <legend className="sr-only">Business enquiry details</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" name="fullName" required error={errors.fullName} />
          <Field label="Work email" name="email" type="email" required error={errors.email} />
          <Field label="Company" name="company" required error={errors.company} />
          <Select label="Company type" name="companyType" options={companyTypes} error={errors.companyType} />
          <Select label="Area of interest" name="serviceInterest" options={serviceInterests} required error={errors.serviceInterest} defaultValue={serviceDefault} />
        </div>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          <LabelText label="Project summary" required />
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            maxLength={5000}
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={errors.projectDescription ? "projectDescription-error" : "projectDescription-hint"}
            rows={5}
            className="min-h-36 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 aria-[invalid=true]:border-red-400/70"
          />
          <span id="projectDescription-hint" className="text-xs leading-5 text-slate-500">Describe what needs to be built, extended or integrated. Up to 5,000 characters.</span>
          {errors.projectDescription ? (
            <span id="projectDescription-error" className="text-xs text-red-300">
              {errors.projectDescription}
            </span>
          ) : null}
        </label>
      </fieldset>

      <details className="rounded-xl border border-white/10 bg-black/20 p-4 open:border-white/15 open:bg-black/25">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
          <span>Add project details</span>
          <span className="text-xs font-normal text-slate-500">Optional</span>
        </summary>
        <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-500">Add only what is already known. Unknowns can stay unknown until they matter to scope.</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Select label="Project stage" name="projectStage" options={projectStages} />
          <Select label="Expected launch" name="expectedLaunch" options={expectedLaunchOptions} />
          <Select label="Number of games" name="numberOfGames" options={numberOfGamesOptions} />
          <Select label="Budget status" name="budgetRange" options={budgetRangeOptions} />
          <Field label="Target markets" name="targetMarkets" />
          <Field label="Existing platform" name="existingPlatform" />
          <Field label="Required integration" name="requiredIntegration" />
          <Field label="Reference link" name="website" type="url" />
          <Select
            label="Preferred contact method"
            name="preferredContactMethod"
            options={contactMethods}
            value={preferredContactMethod}
            onChange={setPreferredContactMethod}
          />
          {preferredContactMethod === "Phone" ? <Field label="Phone number" name="phone" type="tel" required error={errors.phone} /> : null}
        </div>
      </details>

      <label className="flex gap-3 rounded-xl border border-white/[0.08] bg-black/15 p-4 text-sm leading-6 text-slate-300">
        <input
          name="consent"
          type="checkbox"
          required
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-5 w-5 shrink-0 accent-emerald"
        />
        <span>
          I agree that OpenGamer may use this information to respond to my business enquiry. See the{" "}
          <Link href="/privacy-policy" className="font-semibold text-emerald underline-offset-4 hover:text-white hover:underline">
            Privacy Policy
          </Link>{" "}
          for details.
          {errors.consent ? (
            <span id="consent-error" className="mt-1 block text-xs text-red-300">
              {errors.consent}
            </span>
          ) : null}
        </span>
      </label>

      <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <p className="text-xs leading-5 text-slate-500">Please do not submit player data, passwords or confidential credentials through this form.</p>
        <Button type="submit" disabled={state === "submitting"} className="w-full sm:w-auto">
          {state === "submitting" ? "Submitting..." : "Submit Project Enquiry"}
        </Button>
      </div>

      {message ? (
        <div
          className={`rounded-xl border p-4 text-sm leading-6 ${state === "success" ? "border-emerald/25 bg-emerald/[0.07] text-emerald" : "border-red-400/25 bg-red-500/[0.07] text-red-200"}`}
          role="status"
          aria-live="polite"
        >
          {state === "success" ? <p className="font-semibold text-white">Your enquiry has been submitted</p> : <p className="font-semibold text-white">The enquiry was not submitted</p>}
          <p className="mt-1">{message}</p>
          {state === "success" ? (
            <div className="mt-4 flex flex-wrap gap-4">
              <Link href="/games" className="font-semibold text-emerald underline-offset-4 hover:text-white hover:underline">Explore Games</Link>
              <Link href="/portfolio" className="font-semibold text-emerald underline-offset-4 hover:text-white hover:underline">View Portfolio</Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      <LabelText label={label} required={required} />
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={fieldMaxLengths[name]}
        autoComplete={fieldAutoComplete[name] || "off"}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="min-h-12 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 aria-[invalid=true]:border-red-400/70"
      />
      {error ? (
        <span id={errorId} className="text-xs text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required = false,
  error,
  defaultValue = "",
  value,
  onChange
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      <LabelText label={label} required={required} />
      <select
        id={name}
        key={defaultValue || "empty"}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange ? (event) => onChange(event.target.value) : undefined}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="min-h-12 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 aria-[invalid=true]:border-red-400/70"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <span id={errorId} className="text-xs text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function mapInterestToService(value: string | null) {
  switch (value) {
    case "elementals":
      return "Strategic Partnership";
    case "lc-app":
      return "Strategic Partnership";
    case "slot-development":
    case "game":
      return "Slot Game Development";
    case "technology":
      return "Frontend or Backend Engineering";
    case "live-casino":
      return "Live Casino Development";
    case "integration":
      return "Game or Platform Integration";
    case "portfolio":
      return "Portfolio Licensing or Reskin";
    default:
      return "";
  }
}

function isValidPhone(value: string) {
  return /^\+?[0-9][0-9\s().-]{6,24}$/.test(value);
}

function LabelText({ label, required }: { label: string; required: boolean }) {
  return (
    <span className="flex items-center justify-between gap-3">
      <span>
        {label}
        {required ? (
          <span className="text-emerald" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </span>
      {!required ? <span className="text-xs font-normal text-slate-500">Optional</span> : null}
    </span>
  );
}

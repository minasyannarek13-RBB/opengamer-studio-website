"use client";

import Link from "next/link";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
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
    if (mappedInterest) setServiceDefault(mappedInterest);
  }, []);

  function focusFirstError(form: HTMLFormElement, nextErrors: Record<string, string>) {
    const firstField = Object.keys(nextErrors)[0];
    if (!firstField) return;
    window.setTimeout(() => {
      form.querySelector<HTMLElement>(`[name="${CSS.escape(firstField)}"]`)?.focus();
    }, 0);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const method = String(formData.get("preferredContactMethod") || "");
    const phone = String(formData.get("phone") || "").trim();

    if (method === "Phone" && !isValidPhone(phone)) {
      const nextErrors = { phone: "Enter a valid international phone number." };
      setState("error");
      setErrors(nextErrors);
      setMessage("Please check the form and try again.");
      focusFirstError(form, nextErrors);
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

    const nextErrors = result.errors || {};
    setState("error");
    setErrors(nextErrors);
    setMessage(result.message || "Please check the form and try again.");
    focusFirstError(form, nextErrors);
  }

  const errorEntries = Object.entries(errors);

  return (
    <form
      onSubmit={submit}
      noValidate
      aria-busy={state === "submitting"}
      className="premium-card grid gap-5 rounded-2xl border border-line bg-white/[0.045] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.24)] sm:p-6"
    >
      <div className="hidden" aria-hidden="true">
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

      {errorEntries.length ? (
        <div className="rounded-xl border border-red-400/30 bg-red-500/[0.08] p-4 text-sm leading-6 text-red-100" role="alert">
          <p className="font-semibold text-white">Please review these fields:</p>
          <ul className="mt-2 list-disc pl-5">
            {errorEntries.map(([field, error]) => <li key={field}>{error}</li>)}
          </ul>
        </div>
      ) : null}

      <fieldset className="grid gap-5">
        <legend className="text-base font-semibold text-white">Business enquiry</legend>
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
            name="projectDescription"
            required
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
            rows={5}
            className="min-h-36 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 aria-[invalid=true]:border-red-400/70"
          />
          {errors.projectDescription ? <span id="projectDescription-error" className="text-xs text-red-300">{errors.projectDescription}</span> : null}
        </label>
      </fieldset>

      <details className="rounded-xl border border-white/10 bg-black/20 p-4">
        <summary className="cursor-pointer rounded-sm text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">Add project details</summary>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Select label="Project stage" name="projectStage" options={projectStages} />
          <Select label="Expected launch" name="expectedLaunch" options={expectedLaunchOptions} />
          <Select label="Number of games" name="numberOfGames" options={numberOfGamesOptions} />
          <Select label="Budget status" name="budgetRange" options={budgetRangeOptions} />
          <Field label="Target markets" name="targetMarkets" />
          <Field label="Existing platform" name="existingPlatform" />
          <Field label="Required integration" name="requiredIntegration" />
          <Field label="Reference link" name="website" type="url" />
          <Select label="Preferred contact method" name="preferredContactMethod" options={contactMethods} value={preferredContactMethod} onChange={setPreferredContactMethod} />
          {preferredContactMethod === "Phone" ? <Field label="Phone number" name="phone" type="tel" required error={errors.phone} /> : null}
        </div>
      </details>

      <label className="flex gap-3 text-sm leading-6 text-slate-300">
        <input
          name="consent"
          type="checkbox"
          required
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-5 w-5 rounded accent-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
        />
        <span>
          I agree that OpenGamer may use this information to respond to my business enquiry. See the{" "}
          <Link href="/privacy-policy" className="font-semibold text-emerald underline-offset-4 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">Privacy Policy</Link>{" "}
          for details.
          {errors.consent ? <span id="consent-error" className="mt-1 block text-xs text-red-300">{errors.consent}</span> : null}
        </span>
      </label>

      <p className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-400">
        Business enquiries are reviewed by the OpenGamer commercial and product team. Please do not submit player data, passwords or confidential credentials through this form.
      </p>

      <Button type="submit" disabled={state === "submitting"} className="w-full md:w-fit">
        {state === "submitting" ? "Submitting..." : "Submit Project Enquiry"}
      </Button>

      {message ? (
        <div className={state === "success" ? "text-sm text-emerald" : "text-sm text-red-300"} role="status" aria-live="polite">
          {state === "success" ? <p className="font-semibold text-white">Your enquiry has been submitted</p> : null}
          <p className={state === "success" ? "mt-1" : undefined}>{message}</p>
          {state === "success" ? (
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/games" className="font-semibold text-emerald underline-offset-4 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">Return to Games</Link>
              <Link href="/portfolio" className="font-semibold text-emerald underline-offset-4 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">View Portfolio</Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", required = false, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  const errorId = `${name}-error`;
  const autoComplete = name === "fullName" ? "name" : name === "email" ? "email" : name === "company" ? "organization" : name === "phone" ? "tel" : name === "website" ? "url" : undefined;

  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      <LabelText label={label} required={required} />
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="min-h-12 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 aria-[invalid=true]:border-red-400/70"
      />
      {error ? <span id={errorId} className="text-xs text-red-300">{error}</span> : null}
    </label>
  );
}

function Select({ label, name, options, required = false, error, defaultValue = "", value, onChange }: { label: string; name: string; options: string[]; required?: boolean; error?: string; defaultValue?: string; value?: string; onChange?: (value: string) => void }) {
  const errorId = `${name}-error`;
  const isControlled = typeof onChange === "function";
  const stateProps = isControlled
    ? { value: value ?? "", onChange: (event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value) }
    : { defaultValue };

  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      <LabelText label={label} required={required} />
      <select
        key={isControlled ? undefined : defaultValue || "empty"}
        name={name}
        {...stateProps}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="min-h-12 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald focus:ring-2 focus:ring-emerald/20 aria-[invalid=true]:border-red-400/70"
      >
        <option value="">Select</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      {error ? <span id={errorId} className="text-xs text-red-300">{error}</span> : null}
    </label>
  );
}

function mapInterestToService(value: string | null) {
  if (value && serviceInterests.includes(value)) return value;

  switch (value) {
    case "elementals":
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
    case "team":
      return "Dedicated Development Team";
    case "project":
      return "Other";
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
      <span>{label}{required ? <span className="text-emerald" aria-hidden="true"> *</span> : null}</span>
      {!required ? <span className="text-xs font-normal text-slate-500">Optional</span> : null}
    </span>
  );
}

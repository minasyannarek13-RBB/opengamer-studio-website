"use client";

import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { companyTypes, contactMethods, projectStages, serviceInterests, type ServiceInterestGroup } from "@/content/contact";

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
  const [sourceContext, setSourceContext] = useState({ sourcePage: "/contact", contextParameter: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mappedInterest = mapInterestToService(params.get("interest") || params.get("service"));
    setSourceContext({
      sourcePage: window.location.pathname,
      contextParameter: window.location.search || ""
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
      setMessage(result.message || "OpenGamer will review the project information and follow up using the email address provided.");
      form.reset();
      return;
    }

    setState("error");
    setErrors(result.errors || {});
    setMessage(result.message || "Please check the form and try again.");
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      aria-busy={state === "submitting"}
      className="premium-card grid gap-5 rounded-lg border border-line bg-white/[0.045] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.24)] sm:p-6"
    >
      <div className="hidden">
        <label htmlFor="website_url">Website URL</label>
        <input id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="sourcePage" value={sourceContext.sourcePage} />
      <input type="hidden" name="contextParameter" value={sourceContext.contextParameter} />
      <fieldset className="grid gap-5">
        <legend className="text-base font-semibold text-white">Contact details</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" name="fullName" required error={errors.fullName} />
          <Field label="Company" name="company" required error={errors.company} />
          <Field label="Work email" name="email" type="email" required error={errors.email} />
          <Field label="Job title" name="jobTitle" required error={errors.jobTitle} />
          <Select label="Company type" name="companyType" options={companyTypes} required error={errors.companyType} />
          <Field label="Reference link" name="website" type="url" />
        </div>
      </fieldset>
      <div className="rounded-lg border border-emerald/20 bg-emerald/[0.06] p-4 text-sm leading-6 text-slate-300">
        <p className="font-semibold text-white">What Helps Us Review the Request</p>
        <p className="mt-2">
          Include the project type, target platform or partner environment, integration context, current stage and any key dependencies that may affect scope.
        </p>
      </div>
      <fieldset className="grid gap-5 border-t border-white/10 pt-5">
        <legend className="text-base font-semibold text-white">Project context</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <Select label="Primary area of interest" name="serviceInterest" options={serviceInterests} required error={errors.serviceInterest} defaultValue={serviceDefault} />
          <Select label="Preferred contact method" name="preferredContactMethod" options={contactMethods} />
          <Select label="Project stage" name="projectStage" options={projectStages} />
          <Field label="Expected launch" name="expectedLaunch" />
          <Field label="Number of games" name="numberOfGames" />
          <Field label="Existing platform" name="existingPlatform" />
          <Field label="Target markets" name="targetMarkets" />
          <Field label="Required integration" name="requiredIntegration" />
          <Field label="Budget range" name="budgetRange" />
        </div>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          <LabelText label="Project context" required />
          <textarea
            name="projectDescription"
            required
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
            rows={5}
            className="rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald aria-[invalid=true]:border-red-400/70"
          />
          {errors.projectDescription ? (
            <span id="projectDescription-error" className="text-xs text-red-300">
              {errors.projectDescription}
            </span>
          ) : null}
        </label>
      </fieldset>
      <label className="flex gap-3 text-sm leading-6 text-slate-300">
        <input
          name="consent"
          type="checkbox"
          required
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-4 w-4 accent-emerald"
        />
        <span>
          I agree that OpenGamer may use this information to respond to my business enquiry. See the Privacy Policy for details.
          {errors.consent ? (
            <span id="consent-error" className="mt-1 block text-xs text-red-300">
              {errors.consent}
            </span>
          ) : null}
        </span>
      </label>
      <p className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-400">
        Project information is reviewed as a business enquiry. Do not submit credentials, regulated player data or confidential source materials through this form.
      </p>
      <Button type="submit" disabled={state === "submitting"} className="w-full md:w-fit">
        {state === "submitting" ? "Submitting..." : "Submit Project Enquiry"}
      </Button>
      {message ? (
        <div className={state === "success" ? "text-sm text-emerald" : "text-sm text-red-300"} role="status" aria-live="polite">
          {state === "success" ? <p className="font-semibold text-white">Your Enquiry Has Been Submitted</p> : null}
          <p className={state === "success" ? "mt-1" : undefined}>{message}</p>
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
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald aria-[invalid=true]:border-red-400/70"
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
  defaultValue = ""
}: {
  label: string;
  name: string;
  options: string[] | ServiceInterestGroup[];
  required?: boolean;
  error?: string;
  defaultValue?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      <LabelText label={label} required={required} />
      <select
        key={defaultValue || "empty"}
        name={name}
        defaultValue={defaultValue}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus:border-emerald aria-[invalid=true]:border-red-400/70"
      >
        <option value="">Select</option>
        {options.map((option) =>
          typeof option === "string" ? (
            <option key={option} value={option}>
              {option}
            </option>
          ) : (
            <optgroup key={option.label} label={option.label}>
              {option.options.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </optgroup>
          )
        )}
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
      return "ELEMENTALS Partnership";
    case "lc-app":
      return "LC App Partnership";
    case "slot-development":
      return "Custom Slot Development";
    case "technology":
      return "RGS-Related Development";
    case "live-casino":
      return "Live Casino Development";
    case "integration":
      return "Game Integration";
    default:
      return "";
  }
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

"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";
type ApiResponse = { message?: string; errors?: Record<string, string> };

const inputClass =
  "w-full rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald aria-[invalid=true]:border-red-400/70";

export function AgentApplicationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    setState("submitting");
    setMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/agent-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as ApiResponse;
      if (!response.ok) {
        setState("error");
        setErrors(result.errors || {});
        setMessage(result.message || "Unable to send the application.");
        return;
      }
      setState("success");
      setMessage(result.message || "Your application was delivered.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Connection failed. Please try again or email OpenGamer.");
    }
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      aria-busy={state === "submitting"}
      className="premium-card grid gap-5 rounded-xl border border-line bg-white/[0.045] p-5 shadow-[0_20px_75px_rgba(0,0,0,0.26)] sm:p-8"
    >
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
        <label htmlFor="agent-website-url">Leave this field empty</label>
        <input id="agent-website-url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white">Apply to become an OpenGamer agent</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Tell us about your operator network. An application is not an approval or a binding partnership agreement.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="fullName" required error={errors.fullName} autoComplete="name" />
        <Field label="Business email" name="email" type="email" required error={errors.email} autoComplete="email" />
        <Field label="Company / consultancy" name="company" error={errors.company} autoComplete="organization" />
        <Field label="Country" name="country" required error={errors.country} autoComplete="country-name" />
        <Field label="Telegram" name="telegram" placeholder="@username" error={errors.telegram} />
        <Field label="LinkedIn profile URL" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." error={errors.linkedin} />
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          <span>Operators in your network <span className="text-emerald">*</span></span>
          <select name="operatorNetwork" required defaultValue="" aria-invalid={Boolean(errors.operatorNetwork)} className={inputClass}>
            <option value="" disabled>Select a range</option>
            <option value="1-4">1–4</option>
            <option value="5-20">5–20</option>
            <option value="20+">20+</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
          <FieldError name="operatorNetwork" error={errors.operatorNetwork} />
        </label>
        <Field label="Target markets / GEOs" name="targetMarkets" required error={errors.targetMarkets} placeholder="e.g. Europe, LATAM, Asia" />
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-200">
        <span>Relevant iGaming experience and operator relationships <span className="text-xs font-normal text-slate-500">(optional)</span></span>
        <textarea
          name="experience"
          maxLength={1500}
          rows={5}
          aria-invalid={Boolean(errors.experience)}
          placeholder="Your role, the type of operators you know, and how you could introduce them. No private customer or player data, please."
          className={inputClass}
        />
        <FieldError name="experience" error={errors.experience} />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-emerald"
          aria-invalid={Boolean(errors.consent)}
        />
        <span>
          I agree that OpenGamer may process my contact details to review and respond to my application, as described in the{" "}
          <Link href="/privacy-policy" className="text-emerald underline underline-offset-4">Privacy Policy</Link>.
          <FieldError name="consent" error={errors.consent} />
        </span>
      </label>

      <Button type="submit" disabled={state === "submitting"} className="w-full sm:w-fit">
        {state === "submitting" ? "Submitting..." : "Submit agent application"}
      </Button>

      {message ? (
        <p role="status" aria-live="polite" className={state === "success" ? "text-sm text-emerald" : "text-sm text-red-300"}>
          {message}{" "}
          {state === "error" ? (
            <a className="underline underline-offset-4" href="mailto:mn@open-gamer.com?subject=OpenGamer%20Agent%20Program">
              Email our partnerships team
            </a>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label, name, type = "text", required = false, error, placeholder, autoComplete
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      <span>{label} {required ? <span className="text-emerald">*</span> : <span className="text-xs font-normal text-slate-500">Optional</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `agent-${name}-error` : undefined}
        className={inputClass}
      />
      <FieldError name={name} error={error} />
    </label>
  );
}

function FieldError({ name, error }: { name: string; error?: string }) {
  return error ? <span id={`agent-${name}-error`} className="text-xs text-red-300">{error}</span> : null;
}

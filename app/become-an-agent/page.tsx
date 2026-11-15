import type { Metadata } from "next";
import { AgentApplicationForm } from "@/components/forms/AgentApplicationForm";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Become an Agent | OpenGamer B2B Referral Program",
  description: "Introduce casino operators, aggregators and iGaming companies to OpenGamer and discuss referral commissions for successful B2B partnerships.",
  alternates: { canonical: "/become-an-agent" },
  openGraph: {
    title: "OpenGamer Agent Program | Refer Operators. Earn Commission.",
    description: "For iGaming business developers, advisors and partners with direct operator relationships.",
    url: "/become-an-agent"
  }
};

const steps = [
  { number: "01", title: "Apply", description: "Tell us about your experience and your operator or platform network." },
  { number: "02", title: "Introduce", description: "Once approved, connect us with relevant decision-makers. Our team handles demos, commercial discussions and integration." },
  { number: "03", title: "Earn", description: "Receive the commission agreed in your referral contract when eligible introduced business generates collected revenue." }
];

const partnerTypes = [
  "iGaming business developers and independent agents",
  "Casino operations and product consultants",
  "Platform, aggregation and technology partners",
  "Industry advisors with trusted operator relationships"
];

export default function BecomeAnAgentPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">OpenGamer B2B Agent Program</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your iGaming network. A new revenue opportunity.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Know casino operators or iGaming platforms looking for game content, integration or custom development?
              Introduce them to OpenGamer. We handle the product and commercial process. You can earn referral commissions on successful partnerships.
            </p>
            <Button href="#apply" className="mt-8">Apply to become an agent</Button>
            <p className="mt-5 text-sm text-slate-400">No upfront fee. Applications are reviewed individually. Commission terms are agreed in writing.</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Three steps to a B2B partnership</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} tone="strong">
              <p className="text-sm font-semibold text-emerald">{step.number}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">Who should apply</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Built for people who know operators</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This is a business-to-business introduction program, not a player acquisition or casino player affiliate scheme.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-300">
              {partnerTypes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card tone="strong">
            <h3 className="text-2xl font-semibold text-white">What you can introduce</h3>
            <div className="mt-6 grid gap-5 text-sm leading-7 text-slate-300">
              <p><strong className="text-white">Casino game content:</strong> original and branded games for operators and aggregators.</p>
              <p><strong className="text-white">Integration:</strong> game connectivity, RGS-related engineering and technical support.</p>
              <p><strong className="text-white">Custom production:</strong> tailored game development and dedicated iGaming teams.</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="apply">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">Join the network</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Become an OpenGamer agent</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Applications are free. We evaluate industry experience, operator relationships, market fit and compliance before offering any referral agreement.
            </p>
            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-400">
              <h3 className="font-semibold text-white">Important commercial terms</h3>
              <p className="mt-2">
                Referral eligibility, lead ownership, territory, commission calculation, duration and payout schedule are agreed in a signed contract.
                Existing OpenGamer prospects and duplicate introductions may not qualify. Only approved, compliant business introductions are eligible.
              </p>
              <p className="mt-3">Do not submit player information or confidential operator data in this form.</p>
            </div>
          </div>
          <AgentApplicationForm />
        </div>
      </Section>
    </SiteShell>
  );
}

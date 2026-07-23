import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact | OpenGamer Studio",
  description: "Contact OpenGamer to discuss casino game development, RGS-related engineering, integrations or a dedicated iGaming development team.",
  alternates: { canonical: "/contact" }
};

const enquiryGuidance = [
  "Project type and commercial goal",
  "Target platform, aggregator or operator context",
  "Required game, RGS-related or integration scope",
  "Current stage and key launch dependencies"
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Tell Us What You Want to Build"
            description="Use the form for project, integration, portfolio, dedicated team or technology partnership requests."
            headingLevel="h1"
          />
          <StudioGameSignature context="contact" variant="inline" className="mt-8 max-w-2xl" />
        </Container>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr]">
          <aside className="grid gap-5" data-reveal-group="cards">
            <Card tone="strong">
              <h2 className="text-xl font-semibold text-white">Business Contact</h2>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                {company.email ? (
                  <a href={`mailto:${company.email}`} className="hover:text-white">
                    {company.email}
                  </a>
                ) : (
                  <p>Use the form to send project, technology and portfolio enquiries.</p>
                )}
                {company.social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-white">Useful Details</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                {enquiryGuidance.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
          <LeadForm />
        </div>
      </Section>
    </SiteShell>
  );
}

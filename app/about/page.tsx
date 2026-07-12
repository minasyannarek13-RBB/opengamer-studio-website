import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About | OpenGamer Studio",
  description: "OpenGamer is a full-cycle iGaming development studio built for long-term B2B technology partnerships.",
  alternates: { canonical: "/about" }
};

const principles = [
  "Product Quality",
  "Clear Accountability",
  "Technical Reliability",
  "Commercial Understanding",
  "Transparent Communication",
  "Long-Term Collaboration"
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="About OpenGamer"
            title="A Full-Cycle Studio Built for Long-Term Partnerships"
            description="OpenGamer brings game design, mathematics, visual production, engineering, integration and live operations into a single delivery structure."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <SectionHeader title="Company Principles" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle}>
              <h3 className="text-lg font-semibold text-white">{principle}</h3>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader title="Leadership" description="Confirmed leadership roles only. Bios and photos are not shown until approved." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {company.leadership.map((person) => (
            <Card key={person.name}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald/30 bg-emerald/10 text-lg font-semibold text-emerald">
                {person.name.slice(0, 1)}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{person.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{person.role}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTASection
        title="Work with a Product-Minded Studio"
        description="OpenGamer structures development around product quality, technical reliability and long-term partner value."
      />
    </SiteShell>
  );
}

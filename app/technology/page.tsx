import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { integrationWorkflow, technologyArchitectureFlow, technologyPrinciples } from "@/content/services";

export const metadata: Metadata = {
  title: "Technology | OpenGamer Studio",
  description: "RGS development, casino game integration, game session handling, wallet communication, reporting and monitoring.",
  alternates: { canonical: "/technology" }
};

const rgsCapabilities = [
  "Game session handling",
  "Game logic",
  "Wallet communication",
  "Bonus support",
  "Free spins support",
  "Reporting",
  "Monitoring",
  "Game configuration",
  "Operator and aggregator connectivity"
];

export default function TechnologyPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Technology"
            title="Casino Game Technology from Client to Operation"
            description="OpenGamer supports casino games from HTML5 game client and API integration through RGS, game logic, wallet communication, reporting and monitoring."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeader title="RGS Capabilities" description="A modular technology layer for session handling, game execution and partner connectivity." />
          <div className="grid gap-3 sm:grid-cols-2">
            {rgsCapabilities.map((item) => (
              <Card key={item}>
                <p className="text-sm font-medium text-slate-100">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
          <SectionHeader title="Architecture" description="A simple view of the layered flow between player, partner platform and OpenGamer technology." />
          <ArchitectureDiagram items={technologyArchitectureFlow} />
        </div>
      </Section>
      <Section>
        <SectionHeader title="Integration Workflow" description="No fixed integration timeline is promised before technical discovery." />
        <div className="mt-10">
          <ProcessTimeline items={integrationWorkflow.map((title) => ({ title }))} />
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader title="Technology Principles" />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {technologyPrinciples.map((principle) => (
            <div key={principle} className="premium-card rounded-lg border border-line bg-white/[0.045] p-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20">
              {principle}
            </div>
          ))}
        </div>
      </Section>
      <CTASection
        title="Discuss Integration Requirements"
        description="Share your platform, wallet flow, aggregator context, target launch path and technical documentation status."
      />
    </SiteShell>
  );
}

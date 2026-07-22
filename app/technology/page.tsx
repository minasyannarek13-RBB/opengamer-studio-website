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
  description: "Technology capabilities for casino game development, RGS-related engineering, integration workflows and product delivery.",
  alternates: { canonical: "/technology" }
};

const technologyCapabilities = [
  "HTML5 game clients",
  "Front-end game engineering",
  "Backend game services",
  "RGS-related engineering",
  "Wallet communication",
  "Integration workflows",
  "QA and release coordination",
  "Post-release product support"
];

const frontEndCapabilities = [
  "Responsive game clients",
  "Mobile and desktop layouts",
  "Game UI implementation",
  "Animation integration",
  "Asset optimization",
  "Performance-focused rendering"
];

const backendCapabilities = [
  "Game session handling",
  "Game logic",
  "Wallet communication",
  "Bonus support",
  "Free spins support",
  "Reporting",
  "Operational visibility",
  "Game configuration",
  "Operator and aggregator connectivity"
];

const engagementModels = ["Project-based delivery", "Dedicated technical team", "Co-development", "Integration support", "Long-term product support"];

export default function TechnologyPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Technology"
            title="Technology for Casino Game Development and Integration"
            description="OpenGamer supports casino game production with front-end engineering, backend services, RGS-related development, integration workflows and delivery support."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeader title="Technology Capabilities" description="A practical technology scope for building, integrating and supporting casino game products." />
          <div className="grid gap-3 sm:grid-cols-2" data-reveal-group="cards">
            {technologyCapabilities.map((item) => (
              <Card key={item}>
                <p className="text-sm font-medium text-slate-100">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader title="Front-End Game Engineering" description="Client-side production for responsive casino game experiences across desktop and mobile environments." />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" data-reveal-group="cards">
          {frontEndCapabilities.map((item) => (
            <Card key={item}>
              <p className="text-sm font-medium text-slate-100">{item}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader title="Backend and RGS-Related Capabilities" description="Backend engineering for session flows, wallet communication, game logic and partner connectivity." />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" data-reveal-group="cards">
          {backendCapabilities.map((item) => (
            <Card key={item}>
              <p className="text-sm font-medium text-slate-100">{item}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
          <SectionHeader title="Reference Integration Architecture" description="A layered view separating player, partner, game technology and operational environments." />
          <ArchitectureDiagram items={technologyArchitectureFlow} />
        </div>
      </Section>
      <Section>
        <SectionHeader
          title="Integration and Delivery Workflow"
          description="Each integration begins with technical discovery. Scope, dependencies and timing are defined after reviewing the partner environment and documentation."
        />
        <div className="mt-10">
          <ProcessTimeline items={integrationWorkflow.map((title) => ({ title }))} />
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader title="Engagement Models" description="Technology work can be scoped as a project, support stream or dedicated team depending on partner needs." />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5" data-reveal-group="cards">
          {engagementModels.map((model) => (
            <div key={model} className="premium-card rounded-lg border border-line bg-white/[0.045] p-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20">
              {model}
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader title="Engineering Principles" />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4" data-reveal-group="cards">
          {technologyPrinciples.map((principle) => (
            <div key={principle} className="premium-card rounded-lg border border-line bg-white/[0.045] p-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20">
              {principle}
            </div>
          ))}
        </div>
      </Section>
      <CTASection
        title="Discuss Technical Requirements"
        description="Share your platform, wallet flow, aggregator context, target launch path and technical documentation status."
        ctaLabel="Discuss Technical Requirements"
        ctaHref="/contact?service=technology"
        secondaryLabel="View Development Services"
        secondaryHref="/services"
      />
    </SiteShell>
  );
}

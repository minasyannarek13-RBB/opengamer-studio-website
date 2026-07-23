import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { portfolioProjects } from "@/content/portfolio";

const capabilityGroups = [
  ["Full-Cycle Capabilities. One Studio.", "OpenGamer designs live casino products end-to-end: concept, mathematics, UX, show format and studio presentation."],
  ["Original Table & Show Concepts", "Mechanics designed for differentiation, not imitation."],
  ["Mathematical Models for Live Formats", "Rules, paytables, probability structures and risk models are designed and prepared for simulation and validation as the concept progresses."],
  ["Architecture for Live Products", "Consulting on the technical backbone a live product needs before build."]
];

export const metadata: Metadata = {
  title: "Live Casino Development | OpenGamer Studio",
  description: "Original live casino and show-game design — concept, mathematics, live UX and studio product design for operators and providers.",
  alternates: { canonical: "/services/live-casino-development" }
};

export default function LiveCasinoDevelopmentPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(35,196,131,0.12),transparent_24rem)]" />
        <Container>
          <SectionHeader
            eyebrow="Live Casino Development"
            title="Live Casino Development"
            description="Original live casino product design — from studio-based table games to next-generation show formats built around original bonus mechanics and strong visual identity, not template clones."
            headingLevel="h1"
          />
          <Button href="/contact" className="mt-8">
            Discuss a Live Casino Concept
          </Button>
          <StudioGameSignature context="liveCasino" variant="inline" className="mt-8 max-w-2xl" />
        </Container>
      </section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {capabilityGroups.map(([title, description]) => (
            <Card key={title}>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader eyebrow="Featured Projects" title="ELEMENTALS" description="Premium four-realm show game concept currently in development." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProjectCard {...portfolioProjects[0]} />
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="FAQ" title="Live Casino Scope" />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-white">Does OpenGamer operate a live studio?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              No — OpenGamer designs live casino products and documentation; studio construction or operation is a partner or third-party function unless otherwise agreed.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-white">Is ELEMENTALS available now?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">It is in development — see Product Status on its page.</p>
          </Card>
        </div>
      </Section>
      <CTASection
        title="Design Your Next Live Casino Format"
        description="Share the target market, format direction and studio context — OpenGamer will propose the right engagement model."
        ctaLabel="Discuss a Live Casino Concept"
      />
    </SiteShell>
  );
}

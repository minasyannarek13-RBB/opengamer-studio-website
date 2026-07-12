import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { lcAppConcepts } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "LC App | B2B Social Layer for Live Casino — OpenGamer",
  description: "LC App is a B2B social engagement layer for existing Live Casino operators and providers. Product concept.",
  alternates: { canonical: "/portfolio/lc-app" }
};

export default function LcAppPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <span className="rounded-full border border-emerald/30 px-3 py-1 text-xs text-emerald">Product Concept — In Development</span>
            <h1 className="mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">LC App</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">A B2B social engagement layer for Live Casino.</p>
          </div>
          <ConceptPhone />
        </Container>
      </section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card tone="strong">
            <h2 className="text-2xl font-semibold text-white">Social Layer for Existing Live Casino</h2>
            <p className="mt-4 leading-7 text-slate-300">
              LC App gives Live Casino its own social environment — communication, discovery and gameplay access in a mobile-first application built for existing operators and providers, not to replace them.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Live Casino Has No Social Layer</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Live Casino tables are broadcast experiences with limited player-to-player or player-to-dealer interaction outside the table itself.
            </p>
          </Card>
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader eyebrow="Product Concept" title="Communication + Discovery + Gameplay" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {lcAppConcepts.map((concept) => (
            <Card key={concept}>
              <h3 className="text-xl font-semibold text-white">{concept}</h3>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Engagement, Retention, Acquisition", "An additional engagement and retention layer for operators running Live Casino, layered on top of existing tables."],
            ["A Social Layer on Existing Content", "A concept for extending existing blackjack, baccarat and poker-variant content with a social distribution layer."],
            ["Product Concept — In Development", "No pilots, users, metrics or partner integrations are confirmed at this stage."]
          ].map(([title, description]) => (
            <Card key={title}>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTASection
        title="Discuss an LC App Partnership"
        description="Reach out to discuss a pilot, integration or strategic partnership discussion."
        ctaLabel="Discuss LC App Partnership"
      />
    </SiteShell>
  );
}

function ConceptPhone() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2.25rem] border border-emerald/30 bg-black/35 p-4 shadow-[0_24px_80px_rgba(46,230,166,0.13)]">
      <div className="rounded-[1.75rem] border border-white/10 bg-ink p-5">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald">Concept UI</p>
        <div className="mt-5 grid gap-3">
          <div className="h-16 rounded-lg bg-white/[0.08]" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-24 rounded-lg bg-emerald/10" />
            <div className="h-24 rounded-lg bg-white/[0.06]" />
          </div>
          <div className="h-20 rounded-lg bg-white/[0.06]" />
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { ProductSignature } from "@/components/visual/ProductSignature";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { portfolioProjects } from "@/content/portfolio";

const capabilityGroups = [
  ["Product Strategy", "Market concept, target player, format logic, session behaviour and commercial objective are shaped before production scope is defined."],
  ["Game Rules and Mathematics", "Rules, betting models, payouts, side bets, feature logic and risk considerations are prepared for review and validation."],
  ["Player Experience", "Betting interface, mobile UX, result communication, localisation and latency-aware interaction are designed around live-session behaviour."],
  ["Presenter and Studio Flow", "Presenter prompts, round states, table flow, camera logic, display systems and operational clarity are considered as one product framework."],
  ["Technical Product Layer", "Frontend, backend services, operator integration, reporting, monitoring and administrative tools are scoped around verified requirements."],
  ["QA and Launch Preparation", "Game flow, device coverage, interrupted rounds, localisation, operator acceptance and launch support are planned without promising fixed timelines."]
];

export const metadata: Metadata = {
  title: "Live Casino Development | OpenGamer Studio",
  description: "Original live casino and show-game design — concept, mathematics, live UX and studio product design for operators and providers.",
  alternates: { canonical: "/services/live-casino-development" }
};

export default function LiveCasinoDevelopmentPage() {
  return (
    <SiteShell atmosphere="elementals">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(35,196,131,0.12),transparent_24rem)]" />
        <Container>
          <SectionHeader
            eyebrow="Live Casino Development"
            title="Live Casino Products Designed Around Players, Presenters and Operations"
            description="OpenGamer supports the design and development of live casino games, show formats, player interfaces and studio-facing product systems. The work connects game logic, broadcast experience, dealer operations and operator requirements within one product framework."
            headingLevel="h1"
          />
          <Button href="/contact" className="mt-8">
            Discuss a Project
          </Button>
          <StudioGameSignature context="liveCasino" variant="inline" className="mt-8 max-w-2xl" />
          <div className="mt-6 max-w-2xl">
            <ProductSignature
              eyebrow="Related product layer"
              title="LC App"
              description="A separate B2B engagement concept that shows how live products can connect to product-interface thinking."
              image="/assets/projects/lc-app/optimized/lc-app-mobile-community.webp"
              href="/portfolio/lc-app"
              actionLabel="View LC App"
              accent="#6ccfde"
              compact
            />
          </div>
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
        title="Design Your Next Live Casino Product"
        description="Share the target market, format direction and studio context — OpenGamer will propose the right engagement model."
        ctaLabel="Discuss a Project"
      />
    </SiteShell>
  );
}

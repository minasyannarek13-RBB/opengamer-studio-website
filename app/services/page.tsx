import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions | OpenGamer Studio",
  description: "Modular and full-cycle iGaming development solutions for slot games, live products, integrations, reskins, QA and dedicated development teams.",
  alternates: { canonical: "/services" }
};

const solutionGroups = [
  {
    id: "game-production",
    eyebrow: "Game production",
    title: "Game production",
    description: "Original and custom casino game production shaped around a partner's commercial model, market and content strategy.",
    items: [
      ["Custom Slot Development", "For operators, platforms and providers needing original or branded slot content.", "Concept, game design, art, frontend build and integration preparation."],
      ["Turnkey Slot Development", "For partners that need a complete game build managed through one delivery structure.", "Product design, math support, art, animation, frontend, backend coordination and QA."],
      ["Game Art and Animation", "For teams with existing mechanics or code that need stronger production assets.", "Visual direction, symbols, UI, animation, effects and promotional asset support."],
      ["Mathematics and Game Design", "For partners defining a new game model or adapting an existing concept.", "Paytable support, feature logic, balancing preparation and documentation."],
      ["Frontend Development", "For providers needing production HTML5 game clients.", "Responsive game UI, animation integration, state rendering, performance and device QA."]
    ]
  },
  {
    id: "technology-and-integration",
    eyebrow: "Technology and integration",
    title: "Technology and integration",
    description: "Engineering support for game sessions, backend modules, APIs, wallet communication and launch preparation.",
    items: [
      ["Backend and RGS Engineering", "For partners building, extending or modernising game technology layers.", "Session logic, round management, game configuration, reporting and administrative tooling."],
      ["Game Integration", "For content that needs structured partner onboarding.", "API mapping, sandbox setup, wallet flows, error handling, QA and acceptance support."],
      ["Platform Integration", "For operators, aggregators or platforms connecting game content.", "Launch flows, authentication, wallet communication, reporting and monitoring alignment."],
      ["Technical Modernisation", "For portfolios that need code, asset or device-performance improvements.", "Refactoring, mobile optimisation, UI updates and maintainability improvements."]
    ]
  },
  {
    id: "portfolio-services",
    eyebrow: "Portfolio services",
    title: "Portfolio services",
    description: "Commercial content options for partners that need faster portfolio expansion or custom market adaptation.",
    items: [
      ["White-Label Games", "For partners evaluating existing OpenGamer content or custom variants.", "Portfolio review, demo access where available, scope definition and commercial discussion."],
      ["Reskins", "For existing games that need a new theme, brand or market fit.", "Theme replacement, symbol sets, UI refresh, animation updates and launch preparation."],
      ["Branded Games", "For operators and brands needing custom game content around a campaign or audience.", "Brand adaptation, game concept, asset direction and production scope."],
      ["Legacy Game Modernisation", "For older titles needing better mobile UX, assets or integration readiness.", "Visual refresh, frontend improvements, QA and delivery planning."]
    ]
  },
  {
    id: "delivery-and-support",
    eyebrow: "Delivery and support",
    title: "Delivery and support",
    description: "Specialist capacity and production governance for partners scaling iGaming development programmes.",
    items: [
      ["Dedicated Teams", "For providers, platforms and startups that need embedded iGaming development capacity.", "Frontend, backend, game art, QA, product and technical leadership support."],
      ["QA", "For games and product builds that need structured release confidence.", "Functional testing, regression, device checks, integration scenarios and acceptance support."],
      ["Certification Preparation Support", "For partners preparing materials for independent review.", "Documentation, QA evidence and implementation support without claiming certification ownership."],
      ["Product and Technical Advisory", "For teams defining what to build before committing to production.", "Scope definition, architecture review, delivery planning and product risk review."]
    ]
  }
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Solutions"
            title="iGaming Development Solutions"
            description="OpenGamer provides modular and full-cycle production support for casino games, live products, technical integrations and dedicated development teams."
            headingLevel="h1"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss a Project</Button>
            <Button href="/games" variant="secondary">
              Explore Games
            </Button>
          </div>
          <nav className="mt-10 flex gap-2 overflow-x-auto pb-1" aria-label="Solution areas">
            {solutionGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-300 transition hover:border-emerald/45 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {solutionGroups.map((group, index) => (
        <Section key={group.id} id={group.id} className={index % 2 ? "bg-black/20" : ""}>
          <div className="grid gap-8 lg:grid-cols-[0.36fr_1fr]">
            <SectionHeader eyebrow={group.eyebrow} title={group.title} description={group.description} />
            <div className="grid gap-5 md:grid-cols-2" data-reveal-group="cards">
              {group.items.map(([title, clientType, deliverables]) => (
                <Card key={title} className="h-full">
                  <h2 className="text-xl font-semibold text-white">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{clientType}</p>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">{deliverables}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <CTASection
        title="Need a Defined Scope or an Embedded Team?"
        description="Share the project type, target platform, integration requirements and launch stage. OpenGamer will suggest the right engagement model."
        ctaLabel="Discuss a Project"
        secondaryLabel="Explore Games"
        secondaryHref="/games"
      />
    </SiteShell>
  );
}

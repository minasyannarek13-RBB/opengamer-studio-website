import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions | OpenGamer Studio",
  description: "iGaming development for casino games, Live Casino products, frontend and backend engineering, integrations, portfolio work and dedicated teams.",
  alternates: { canonical: "/services" }
};

const serviceHeroItems = [
  {
    title: "Casino Game Production",
    label: "Games",
    image: "/assets/games/forest-fortune/artwork.webp",
    href: "#game-production"
  },
  {
    title: "Live Casino Product Design",
    label: "Live Casino",
    image: "/assets/projects/elementals/expositions/nexus-stage.webp",
    href: "#live-casino"
  },
  {
    title: "Product & Integration Engineering",
    label: "Technology",
    image: "/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp",
    href: "#technology-and-integration"
  }
];

const solutionGroups = [
  {
    id: "game-production",
    interest: "game",
    navLabel: "Game production",
    eyebrow: "Game production",
    title: "Build an Original, Custom or Branded Casino Game",
    description: "Use OpenGamer for a complete title or the specific production disciplines your team needs.",
    items: [
      ["Custom Slot Development", "Original or branded slot content for operators, platforms and providers.", "Concept, game design, art, frontend build and integration preparation."],
      ["Turnkey Slot Development", "A complete game build managed through one production structure.", "Product design, math support, art, animation, frontend, backend coordination and QA."],
      ["Game Art and Animation", "Production assets for teams that already have mechanics, math or code.", "Visual direction, symbols, UI, animation, effects and promotional asset support."],
      ["Mathematics and Game Design", "New game models or adaptations of an existing concept.", "Paytable support, feature logic, balancing preparation and documentation."],
      ["Frontend Development", "Production HTML5 game clients for providers and game teams.", "Responsive UI, animation integration, state rendering, performance and device QA."]
    ]
  },
  {
    id: "live-casino",
    interest: "live-casino",
    navLabel: "Live Casino",
    eyebrow: "Live Casino",
    title: "Design Live Casino Products Around the Full Experience",
    description: "Product support for table games, show formats and player-facing live casino interfaces, with presenter and operational flows considered from the start.",
    items: [
      ["Live Casino Game Design", "New table, game-show or hybrid live formats.", "Market concept, rules, player journey, round flow and product documentation."],
      ["Live Show-Game Development", "Original show formats built around a differentiated mechanic.", "Format logic, bonus structure, visual identity, player UX and delivery scope."],
      ["Presenter and Studio Product UX", "Products where presenter and operational workflows shape the player experience.", "Presenter prompts, round states, studio-facing flows, display logic and error-state planning."],
      ["Frontend Product Interfaces", "Player-facing or operator-facing Live Casino UI.", "Betting interfaces, live-session states, result communication, mobile UX and integration preparation."]
    ]
  },
  {
    id: "technology-and-integration",
    interest: "technology",
    navLabel: "Technology & integration",
    eyebrow: "Technology and integration",
    title: "Connect Game Logic, Backend Systems and Partner Integrations",
    description: "Engineering support for game sessions, backend modules, APIs, wallet communication and partner onboarding flows.",
    items: [
      ["Backend and RGS Engineering", "Game technology layers that need to be built, extended or modernised.", "Session logic, round management, game configuration, reporting and administrative tooling."],
      ["Game Integration", "Content that needs structured partner onboarding.", "API mapping, sandbox setup, wallet flows, error handling, QA and acceptance support."],
      ["Platform Integration", "Operators, aggregators or platforms connecting game content.", "Launch flows, authentication, wallet communication, reporting and monitoring alignment."],
      ["Technical Modernisation", "Portfolios that need code, asset or device-performance improvements.", "Refactoring, mobile optimisation, UI updates and maintainability improvements."]
    ]
  },
  {
    id: "portfolio-services",
    interest: "portfolio",
    navLabel: "Portfolio services",
    eyebrow: "Portfolio services",
    title: "Extend, Adapt or Reposition a Game Portfolio",
    description: "Evaluate existing OpenGamer titles for licensing, branded adaptation, reskin or another commercially agreed delivery model.",
    items: [
      ["Portfolio Licensing", "Existing OpenGamer content for commercial evaluation.", "Portfolio review, demo access where available, scope definition and commercial discussion."],
      ["Reskins", "Existing games that need a new theme, brand or market fit.", "Theme replacement, symbol sets, UI refresh, animation updates and launch preparation."],
      ["Branded Games", "Custom content around a campaign, brand or audience.", "Brand adaptation, game concept, asset direction and production scope."],
      ["Legacy Game Modernisation", "Older titles that need stronger mobile UX, assets or integration preparation.", "Visual refresh, frontend improvements, QA and delivery planning."]
    ]
  },
  {
    id: "delivery-and-support",
    interest: "technology",
    navLabel: "Delivery & support",
    eyebrow: "Delivery and support",
    title: "Add Specialist iGaming Capacity Where the Roadmap Needs It",
    description: "Dedicated capability and production support for partners scaling game or product development without rebuilding every discipline internally.",
    items: [
      ["Dedicated Teams", "Embedded iGaming development capacity for providers, platforms and product teams.", "Frontend, backend, game art, QA, product and technical leadership support."],
      ["QA", "Games and product builds that need structured release confidence.", "Functional testing, regression, device checks, integration scenarios and acceptance support."],
      ["Certification Preparation Support", "Teams preparing implementation and evidence for independent review.", "Documentation, QA evidence and implementation support without claiming certification ownership."],
      ["Product and Technical Advisory", "Teams defining what to build before committing to production.", "Scope definition, architecture review, delivery planning and product risk review."]
    ]
  }
];

export default function ServicesPage() {
  return (
    <SiteShell atmosphere="solutions">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_14%,rgba(35,196,131,0.14),transparent_28rem)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="OpenGamer solutions"
              title="One iGaming Studio, From Game Concept to Technical Delivery"
              description="Build a complete casino game, add a specialist production layer or extend your roadmap with product and engineering support."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact?interest=game#project-enquiry">Discuss a Project</Button>
              <Button href="/games" variant="secondary">
                Explore Games
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
              {["Complete game builds", "Selected production stages", "Dedicated specialist capacity"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-h-[26rem] gap-3 sm:grid-cols-2 sm:grid-rows-2" aria-label="OpenGamer service areas">
            {serviceHeroItems.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative min-h-48 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-black/45 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/35 ${index === 0 ? "sm:row-span-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-emerald">{item.label}</span>
                  <strong className="mt-1 block text-lg font-semibold text-white sm:text-xl">{item.title}</strong>
                </div>
              </Link>
            ))}
          </div>
        </Container>

        <Container className="relative mt-10">
          <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Solution areas">
            {solutionGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-300 transition hover:border-emerald/45 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
              >
                {group.navLabel}
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
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{clientType}</p>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">{deliverables}</p>
                  <a href={`/contact?interest=${group.interest}#project-enquiry`} className="mt-5 inline-flex text-sm font-semibold text-emerald transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                    Discuss This Service
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <SectionHeader eyebrow="Work behind the capabilities" title="See the Games and Concepts Behind the Service List" description="OpenGamer service areas are connected to visible studio work across games, Live Casino concepts and product-interface design." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Game production", title: "Forest Fortune", description: "A portfolio reference for custom game production discussions.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" },
              { eyebrow: "Live Casino", title: "ELEMENTALS", description: "An original show-game concept for Live Casino product discussions.", image: "/assets/projects/elementals/expositions/nexus-stage.webp", href: "/portfolio/elementals", actionLabel: "View Concept", accent: "#dca45f" },
              { eyebrow: "Product interface", title: "LC App", description: "A B2B social product concept for Live Casino engagement layers.", image: "/assets/projects/lc-app/optimized/lc-app-mobile-community.webp", href: "/portfolio/lc-app", actionLabel: "View Product", accent: "#6ccfde" }
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Need a Complete Build or One Missing Capability?"
        description="Share the product, current stage and technical context. We will map the conversation to the relevant OpenGamer capability."
        ctaLabel="Discuss a Project"
        ctaHref="/contact?interest=game#project-enquiry"
        secondaryLabel="Explore Games"
        secondaryHref="/games"
      />
    </SiteShell>
  );
}

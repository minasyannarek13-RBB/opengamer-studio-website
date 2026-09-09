import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions | OpenGamer Studio",
  description: "Modular and full-cycle iGaming development solutions for slot games, live products, integrations, reskins, QA and dedicated development teams.",
  alternates: { canonical: "/services" }
};

const buyerJobs = [
  {
    number: "01",
    title: "Build a Game",
    description: "Create an original, branded or turnkey casino game with one coordinated production scope.",
    items: ["Game concept", "Mathematics", "Art & animation", "Frontend", "Backend coordination", "QA"],
    href: "#game-production"
  },
  {
    number: "02",
    title: "Extend Your Team",
    description: "Add specialist iGaming capacity without rebuilding every discipline internally.",
    items: ["Dedicated teams", "Frontend", "Backend", "Game art", "QA", "Product & technical support"],
    href: "#delivery-and-support"
  },
  {
    number: "03",
    title: "Build or Integrate Technology",
    description: "Connect game clients, backend services and partner environments around a defined technical scope.",
    items: ["RGS-related engineering", "Wallet flows", "Game integration", "Platform integration", "APIs", "Release support"],
    href: "#technology-and-integration"
  },
  {
    number: "04",
    title: "Transform Existing Content",
    description: "Adapt an existing game, portfolio or concept for a new brand, market or technical requirement.",
    items: ["Reskins", "Branded games", "Portfolio licensing", "Modernisation", "Live product design", "Product UX"],
    href: "#portfolio-services"
  }
];

const solutionGroups = [
  {
    id: "game-production",
    eyebrow: "Game production",
    title: "From Concept to Playable Game",
    description: "Original and custom casino game production can be scoped as a complete build or around the disciplines your team actually needs.",
    services: [
      ["Custom Slot Development", "Original or branded slot content for operators, platforms and providers.", "Concept, game design, art, frontend build and integration preparation."],
      ["Turnkey Slot Development", "A complete game build managed through one delivery structure.", "Product design, math support, art, animation, frontend, backend coordination and QA."],
      ["Game Art & Animation", "Production assets for new mechanics or existing codebases.", "Visual direction, symbols, UI, animation, effects and promotional asset support."],
      ["Mathematics & Game Design", "Mechanics, feature logic and balancing preparation for new or adapted games.", "Paytable support, feature logic, balancing preparation and documentation."],
      ["Frontend Development", "Production HTML5 game clients across desktop and mobile.", "Responsive UI, animation integration, state rendering, performance and device QA."]
    ]
  },
  {
    id: "technology-and-integration",
    eyebrow: "Technology & integration",
    title: "Engineering Around the Game",
    description: "Backend modules, RGS-related engineering and partner integration work can be added around the game client when the project requires it.",
    services: [
      ["Backend & RGS Engineering", "Game technology layers for teams building, extending or modernising their stack.", "Session logic, round management, game configuration, reporting and administrative tooling."],
      ["Game Integration", "Structured onboarding for casino content into a partner environment.", "API mapping, sandbox setup, wallet flows, error handling, QA and acceptance support."],
      ["Platform Integration", "Connectivity for operators, aggregators and platforms.", "Launch flows, authentication, wallet communication, reporting and monitoring alignment."],
      ["Technical Modernisation", "Improve older portfolios for maintainability, mobile UX or integration readiness.", "Refactoring, mobile optimisation, UI updates and maintainability improvements."]
    ]
  },
  {
    id: "portfolio-services",
    eyebrow: "Portfolio & product",
    title: "Adapt, Brand or Reposition Existing Work",
    description: "Existing OpenGamer titles and partner content can be evaluated for licensing, branded adaptation, reskin or other commercially agreed delivery models.",
    services: [
      ["White-Label Games", "Evaluate existing OpenGamer content or custom variants.", "Portfolio review, demo access where available, scope definition and commercial discussion."],
      ["Reskins", "Reposition an existing game around a new theme, brand or market fit.", "Theme replacement, symbol sets, UI refresh, animation updates and launch preparation."],
      ["Branded Games", "Custom content built around a partner brand, campaign or audience.", "Brand adaptation, game concept, asset direction and production scope."],
      ["Legacy Game Modernisation", "Refresh older titles that need stronger mobile UX, assets or integration readiness.", "Visual refresh, frontend improvements, QA and delivery planning."]
    ]
  },
  {
    id: "live-casino",
    eyebrow: "Live Casino product",
    title: "Design Live Casino Products Without Pretending to Operate the Studio",
    description: "OpenGamer can support Live Casino product design, interfaces and show-game concepts without claiming studio operation, licensing or broadcast ownership.",
    services: [
      ["Live Casino Game Design", "Table, game-show and hybrid live product concepts.", "Market concept, rules, player journey, round flow and product documentation."],
      ["Live Show-Game Development", "Original show formats built around differentiated mechanics.", "Format logic, bonus structure, visual identity, player UX and delivery scope."],
      ["Presenter & Studio Product UX", "Product flows where the dealer, presenter and operating team are part of the experience.", "Presenter prompts, round states, studio-facing flows, display logic and error-state planning."],
      ["Frontend Product Interfaces", "Player-facing and operator-facing interfaces for Live Casino products.", "Betting interfaces, live-session states, result communication, mobile UX and integration preparation."]
    ]
  },
  {
    id: "delivery-and-support",
    eyebrow: "Dedicated delivery",
    title: "Add iGaming Capacity Without Building Every Team Internally",
    description: "Specialist production capacity and delivery support for partners that need to move faster without adding every discipline in-house.",
    services: [
      ["Dedicated Teams", "Embedded iGaming development capacity for providers, platforms and startups.", "Frontend, backend, game art, QA, product and technical leadership support."],
      ["QA", "Structured release confidence for games and product builds.", "Functional testing, regression, device checks, integration scenarios and acceptance support."],
      ["Certification Preparation Support", "Implementation and documentation support before independent review.", "Documentation, QA evidence and implementation support without claiming certification ownership."],
      ["Product & Technical Advisory", "Clarify what to build before committing to production.", "Scope definition, architecture review, delivery planning and product risk review."]
    ]
  }
];

export default function ServicesPage() {
  return (
    <SiteShell atmosphere="solutions">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(46,230,166,0.08),transparent_28rem)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <SectionHeader
                eyebrow="Solutions"
                title="Bring the Problem. Build the Right Scope."
                description="OpenGamer works across game production, dedicated development, technical integration and portfolio adaptation. Start with the business need, then define only the delivery scope you actually need."
                headingLevel="h1"
              />
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/contact#project-enquiry" className="w-full min-[480px]:w-auto">Discuss a Project</Button>
                <Button href="/games" variant="secondary" className="w-full min-[480px]:w-auto">Explore Games</Button>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {buyerJobs.map((job) => (
                <Link key={job.title} href={job.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.055] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">{job.number}</span>
                    <span aria-hidden="true" className="text-sm text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-white">→</span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-white">{job.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{job.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeader eyebrow="Four ways to work with OpenGamer" title="Choose the Outcome Before the Service List" description="The detailed service catalogue remains available below, but most conversations begin with one of these four commercial needs." />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {buyerJobs.map((job) => (
            <article key={job.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <div className="flex items-start gap-5">
                <span className="text-sm font-semibold text-emerald">{job.number}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-semibold text-white">{job.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{job.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300">{item}</span>
                    ))}
                  </div>
                  <Link href={job.href} className="mt-6 inline-flex text-sm font-semibold text-emerald transition hover:text-white">View relevant services →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {solutionGroups.map((group, index) => (
        <Section key={group.id} id={group.id} className={index % 2 ? "bg-black/20" : ""}>
          <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeader eyebrow={group.eyebrow} title={group.title} description={group.description} />
              <Button href={`/contact?service=${encodeURIComponent(group.eyebrow)}#project-enquiry`} variant="secondary" className="mt-7">Discuss This Scope</Button>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {group.services.map(([title, clientType, deliverables], serviceIndex) => (
                <article key={title} className="grid gap-4 py-6 sm:grid-cols-[3rem_0.9fr_1.1fr] sm:gap-6 sm:py-7">
                  <span className="text-xs font-semibold tracking-[0.16em] text-emerald/80">{String(serviceIndex + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{clientType}</p>
                  </div>
                  <div className="sm:border-l sm:border-white/10 sm:pl-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Typical scope</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{deliverables}</p>
                    <Link href={`/contact?service=${encodeURIComponent(title)}#project-enquiry`} className="mt-4 inline-flex text-sm font-semibold text-emerald transition hover:text-white">Discuss service →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <SectionHeader eyebrow="Product proof" title="Real Work Behind the Service List" description="The service model is connected to actual OpenGamer games, original Live Casino IP and product-interface work." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Playable portfolio", title: "Forest Fortune", description: "A real OpenGamer slot reference for game-production discussions.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" },
              { eyebrow: "Original IP · In development", title: "ELEMENTALS", description: "Original Live Casino IP showing show-game product and experience design capability.", image: "/assets/projects/elementals/expositions/nexus-stage.webp", href: "/portfolio/elementals", actionLabel: "View Concept", accent: "#dca45f" },
              { eyebrow: "B2B product concept", title: "LC App", description: "Product-interface work exploring social and creator-led Live Casino engagement.", image: "/assets/projects/lc-app/optimized/lc-app-mobile-community.webp", href: "/portfolio/lc-app", actionLabel: "View Product", accent: "#6ccfde" }
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Need a Defined Scope or an Embedded Team?"
        description="Share the project type, current stage, technical dependencies and what is missing internally. The first conversation can stay focused on the smallest useful scope."
        ctaLabel="Discuss a Project"
        ctaHref="/contact#project-enquiry"
        secondaryLabel="Explore Games"
        secondaryHref="/games"
      />
    </SiteShell>
  );
}

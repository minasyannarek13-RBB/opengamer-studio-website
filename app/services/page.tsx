import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_77%_28%,rgba(46,230,166,0.10),transparent_26rem),radial-gradient(circle_at_92%_72%,rgba(93,156,255,0.055),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />
        <div aria-hidden="true" className="absolute right-[-10rem] top-[8%] h-[34rem] w-[34rem] rounded-full border border-emerald/[0.07]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div className="relative z-10">
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
              <div className="mt-8 flex flex-wrap gap-2" aria-label="OpenGamer solution scope">
                {["Game production", "Dedicated development", "Technology & integration", "Portfolio adaptation"].map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[600px]" aria-label="Selected OpenGamer work supporting the service offering">
              <div aria-hidden="true" className="absolute inset-[8%] rounded-[3rem] bg-emerald/[0.045] blur-3xl" />

              <Link href="/games/forest-fortune" className="group absolute left-0 top-[3%] h-[62%] w-[72%] overflow-hidden rounded-[1.6rem] border border-white/15 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <Image src="/assets/games/forest-fortune/artwork.webp" alt="Forest Fortune playable OpenGamer slot" fill priority sizes="(min-width:1280px) 43vw,(min-width:1024px) 40vw,75vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.02)_30%,rgba(4,6,8,0.84)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-emerald">Playable portfolio · Game production proof</span>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Forest Fortune</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">A real game reference behind the production offer.</p>
                </div>
              </Link>

              <Link href="/portfolio/elementals" className="group absolute right-0 top-[10%] h-[45%] w-[35%] overflow-hidden rounded-[1.45rem] border border-white/15 bg-black/45 shadow-[0_28px_90px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS original Live Casino IP" fill sizes="(min-width:1280px) 20vw,(min-width:1024px) 19vw,38vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-emerald">Original IP</span>
                  <strong className="mt-1.5 block text-base text-white sm:text-lg">ELEMENTALS</strong>
                </div>
              </Link>

              <Link href="/portfolio/lc-app" className="group absolute bottom-[3%] right-[4%] h-[46%] w-[30%] overflow-hidden rounded-[1.55rem] border border-white/15 bg-[#06090b] shadow-[0_30px_95px_rgba(0,0,0,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(46,230,166,0.08),transparent_15rem)]" />
                <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App B2B product concept" fill sizes="(min-width:1280px) 17vw,(min-width:1024px) 16vw,34vw" className="object-contain object-center p-3 transition duration-700 group-hover:scale-[1.015] sm:p-4" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5">
                  <span className="text-[0.5rem] font-semibold uppercase tracking-[0.13em] text-emerald">Product direction</span>
                  <strong className="mt-1 block text-base text-white">LC App</strong>
                </div>
              </Link>

              <div className="absolute bottom-[4%] left-0 w-[58%] border-t border-white/10 pt-5">
                <p className="text-[0.61rem] font-semibold uppercase tracking-[0.17em] text-slate-500">Scope around real work</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {["Custom game development", "Dedicated capacity", "RGS-related engineering", "Integration support"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm"><span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" /><span>{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(46,230,166,0.045),transparent_24rem)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader eyebrow="Four ways to work with OpenGamer" title="Choose the Outcome Before the Service List" description="Most commercial conversations start with the result you need, not a catalogue of disciplines. Pick the engagement model first; define the detailed scope second." />
            <div className="mt-7 flex flex-wrap gap-2">
              {["Full build", "Embedded capacity", "Technical scope", "Portfolio adaptation"].map((item) => (
                <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-500">{item}</span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10">
            {buyerJobs.map((job) => (
              <Link key={job.title} href={job.href} className="group grid gap-5 border-b border-white/10 py-8 transition duration-300 hover:border-emerald/30 sm:grid-cols-[3.2rem_0.8fr_1.2fr_auto] sm:items-start sm:gap-6 sm:py-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070a]">
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-emerald/90">{job.number}</span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.015em] text-white transition group-hover:text-emerald">{job.title}</h2>
                  <span className="mt-3 inline-flex text-sm font-semibold text-white/75 transition group-hover:text-white">View relevant scope →</span>
                </div>
                <div>
                  <p className="max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {job.items.map((item) => (
                      <span key={item} className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm"><span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald/80" />{item}</span>
                    ))}
                  </div>
                </div>
                <div className="hidden items-center sm:flex">
                  <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:border-emerald/30 group-hover:text-emerald">→</span>
                </div>
              </Link>
            ))}
          </div>
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

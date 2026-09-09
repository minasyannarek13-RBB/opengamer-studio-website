import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { integrationWorkflow, technologyArchitectureFlow, technologyPrinciples } from "@/content/services";

export const metadata: Metadata = {
  title: "Technology | OpenGamer Studio",
  description: "Technology capabilities for casino game development, RGS-related engineering, integration workflows and product delivery.",
  alternates: { canonical: "/technology" }
};

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

const engineeringScope = [
  ["01", "Game client", "HTML5 game clients, responsive interfaces, animation integration and performance-focused rendering."],
  ["02", "Game services", "Session flows, game logic, configuration, reporting and operational visibility."],
  ["03", "RGS-related engineering", "Backend modules and delivery support around remote game server environments."],
  ["04", "Partner connectivity", "Wallet communication, API mapping, operator and aggregator integration workflows."],
  ["05", "Release support", "QA coordination, acceptance preparation and post-release product support."]
];

const engagementModels = ["Project-based delivery", "Dedicated technical team", "Co-development", "Integration support", "Long-term product support"];

const heroTechnologyFlow = [
  ["01", "Game client", "Player-facing experience"],
  ["02", "Game services", "Session & round logic"],
  ["03", "Integration", "Wallet & API mapping"],
  ["04", "Partner environment", "Acceptance & release"]
];

export default function TechnologyPage() {
  return (
    <SiteShell atmosphere="technology">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 lg:py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(46,230,166,0.10),transparent_27rem),radial-gradient(circle_at_62%_82%,rgba(117,103,248,0.06),transparent_25rem),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_44%)]" />
        <div aria-hidden="true" className="absolute right-[-12rem] top-[6%] h-[36rem] w-[36rem] rounded-full border border-emerald/[0.06]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 xl:gap-20">
            <div>
              <SectionHeader
                eyebrow="Technology"
                title="Engineering the Product Layer Behind Casino Games"
                description="OpenGamer supports casino game production with front-end engineering, backend services, RGS-related development, integration workflows and delivery support."
                headingLevel="h1"
              />
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/contact?service=technology#project-enquiry" className="w-full min-[480px]:w-auto">Discuss Integration</Button>
                <Button href="/services#technology-and-integration" variant="secondary" className="w-full min-[480px]:w-auto">View Technical Scope</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="OpenGamer technology scope">
                {["Game clients", "Backend services", "RGS-related engineering", "Integration support"].map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[610px]" aria-label="OpenGamer technology connected to playable game work">
              <div aria-hidden="true" className="absolute inset-[8%] rounded-[3rem] bg-emerald/[0.04] blur-3xl" />
              <Link href="/games/deep-dive" className="group absolute inset-x-0 top-0 h-[67%] overflow-hidden rounded-[1.65rem] border border-white/12 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <Image src="/assets/games/deep-dive/artwork.webp" alt="Deep Dive playable OpenGamer game" fill priority sizes="(min-width:1280px) 50vw,(min-width:1024px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.018]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.03)_24%,rgba(4,6,8,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-emerald">Playable game · Technology around real product work</span>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Deep Dive</h2>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">A player-facing product reference connected to the client, services, integration and release layers described below.</p>
                </div>
              </Link>

              <div className="absolute inset-x-[4%] bottom-0 rounded-[1.4rem] border border-white/12 bg-[#06090b]/95 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur sm:p-5">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-emerald">Engineering path</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {heroTechnologyFlow.map(([number, title, text], index) => (
                    <div key={title} className="relative rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5 sm:p-4">
                      <span className="text-[0.52rem] font-semibold tracking-[0.15em] text-emerald/90">{number}</span>
                      <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-slate-500">{text}</p>
                      {index < heroTechnologyFlow.length - 1 && <span aria-hidden="true" className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-xs text-emerald/60 lg:block">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.64fr_1.36fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Engineering scope"
              title="One Product Stack. Multiple Entry Points."
              description="Partners can use OpenGamer for one technical layer or connect several layers into a coordinated game-production scope."
            />
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {engineeringScope.map(([index, title, description]) => (
              <div key={title} className="grid gap-4 py-6 sm:grid-cols-[4.5rem_0.75fr_1.25fr] sm:items-start sm:gap-6">
                <span className="text-xs font-semibold tracking-[0.18em] text-emerald">{index}</span>
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Front-end game engineering</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">The Player-Facing Product Layer</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">Production-focused client engineering for casino games across desktop and mobile environments.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {frontEndCapabilities.map((item) => <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">{item}</span>)}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Backend & RGS-related engineering</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">The Operational Product Layer</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">Backend engineering for game sessions, wallet communication, game logic, reporting and partner connectivity.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {backendCapabilities.map((item) => <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">{item}</span>)}
            </div>
          </article>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader eyebrow="Architecture" title="Reference Integration Architecture" description="A layered view separating player, partner, game technology and operational environments." />
          <ArchitectureDiagram items={technologyArchitectureFlow} />
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Product references" title="Technology Connected to Real Product Work" description="Real OpenGamer games and product concepts provide the visual proof layer for the engineering story." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Playable game", title: "Deep Dive", description: "Public game demo showing the player-facing product layer technology supports.", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive", actionLabel: "View Game", accent: "#5d9cff" },
              { eyebrow: "Product interface", title: "LC App", description: "B2B social live casino product-interface reference.", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/portfolio/lc-app", actionLabel: "View Product", accent: "#6ccfde" },
              { eyebrow: "Playable game", title: "Forest Fortune", description: "Portfolio game content connected to frontend and backend delivery.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" }
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader eyebrow="Delivery" title="Integration Workflow" description="Each integration begins with technical discovery. Scope, dependencies and timing are defined after reviewing the partner environment and documentation." />
          <div><ProcessTimeline items={integrationWorkflow.map((title) => ({ title }))} /></div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><SectionHeader eyebrow="Ways to engage" title="From One Technical Gap to Long-Term Product Support" description="Technology work can be scoped as a project, support stream or dedicated team depending on partner needs." /></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {engagementModels.map((model, index) => <div key={model} className="flex min-h-24 items-end justify-between rounded-xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-emerald/25 hover:bg-white/[0.05]"><span className="max-w-[15rem] text-sm font-medium leading-6 text-slate-200">{model}</span><span className="text-xs font-semibold text-emerald/80">0{index + 1}</span></div>)}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Engineering principles" title="Designed for Delivery, Not Decoration" />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {technologyPrinciples.map((principle, index) => <div key={principle} className="flex gap-5 py-5"><span className="mt-1 text-xs font-semibold text-emerald/80">0{index + 1}</span><p className="text-sm leading-6 text-slate-300">{principle}</p></div>)}
          </div>
        </div>
      </Section>

      <CTASection title="Discuss Integration Requirements" description="Share your platform, wallet flow, aggregator context, target launch path and technical documentation status." ctaLabel="Discuss Integration" ctaHref="/contact?service=technology#project-enquiry" secondaryLabel="View Development Services" secondaryHref="/services" />
    </SiteShell>
  );
}

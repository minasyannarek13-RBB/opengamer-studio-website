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
  ["01", "Game client", "HTML5 game clients, responsive interfaces, animation integration and performance-focused rendering.", "Player-facing entry point"],
  ["02", "Game services", "Session flows, game logic, configuration, reporting and operational visibility.", "Service-layer entry point"],
  ["03", "RGS-related engineering", "Backend modules and delivery support around remote game server environments.", "Backend scope"],
  ["04", "Partner connectivity", "Wallet communication, API mapping, operator and aggregator integration workflows.", "Integration scope"],
  ["05", "Release support", "QA coordination, acceptance preparation and post-release product support.", "Delivery scope"]
];

const engagementModels = ["Project-based delivery", "Dedicated technical team", "Co-development", "Integration support", "Long-term product support"];

const heroTechnologyFlow = [
  ["01", "Game client", "Player-facing experience"],
  ["02", "Game services", "Session & round logic"],
  ["03", "Integration", "Wallet & API mapping"],
  ["04", "Partner environment", "Acceptance & release"]
];

const architectureBoundaries = [
  ["Player layer", "Game client, responsive UI, launch state and player interaction."],
  ["Game service layer", "Session, round, configuration and reporting logic where required."],
  ["Partner boundary", "Wallet, authentication, API mapping and acceptance expectations."],
  ["Release boundary", "QA, monitoring expectations, handoff and post-release support scope."]
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
              <SectionHeader eyebrow="Technology" title="Engineering the Product Layer Behind Casino Games" description="OpenGamer supports casino game production with front-end engineering, backend services, RGS-related development, integration workflows and delivery support." headingLevel="h1" />
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/contact?service=technology#project-enquiry" className="w-full min-[480px]:w-auto">Discuss Integration</Button>
                <Button href="/services#technology-and-integration" variant="secondary" className="w-full min-[480px]:w-auto">View Technical Scope</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="OpenGamer technology scope">
                {["Game clients", "Backend services", "RGS-related engineering", "Integration support"].map((item) => <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>)}
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

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(46,230,166,0.045),transparent_22rem)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:items-start lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="Engineering scope" title="One Product Stack. Multiple Entry Points." description="Partners can use OpenGamer for one technical layer or connect several layers into a coordinated game-production scope." />
            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Scope principle</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">Start at the layer where the delivery gap exists. Add adjacent layers only when the product or integration path requires them.</p>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-8 left-[1.1rem] top-8 w-px bg-gradient-to-b from-emerald/55 via-white/12 to-transparent sm:left-[1.45rem]" />
            {engineeringScope.map(([index, title, description, entryPoint], itemIndex) => (
              <div key={title} className="group relative grid gap-4 border-b border-white/10 py-7 pl-12 transition duration-300 first:border-t sm:grid-cols-[0.9fr_1.1fr] sm:gap-8 sm:py-8 sm:pl-16">
                <div className="absolute left-0 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-emerald/30 bg-[#07100d] text-[0.58rem] font-semibold tracking-[0.12em] text-emerald sm:h-12 sm:w-12">{index}</div>
                <div>
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-slate-500">{entryPoint}</span>
                  <h2 className="mt-2 text-xl font-semibold text-white transition group-hover:text-emerald sm:text-2xl">{title}</h2>
                </div>
                <div className="sm:border-l sm:border-white/10 sm:pl-8">
                  <p className="text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{description}</p>
                  {itemIndex < engineeringScope.length - 1 && <p className="mt-3 text-xs font-medium uppercase tracking-[0.11em] text-white/35">Can connect to the next delivery layer ↓</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black/20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(93,156,255,0.045),transparent_24rem),radial-gradient(circle_at_86%_72%,rgba(46,230,166,0.035),transparent_22rem)]" />
        <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
          <article className="border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:rounded-l-[1.4rem] lg:border-r-0 lg:p-10">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#5d9cff]">Front-end game engineering</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">The Player-Facing Product Layer</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">Production-focused client engineering for casino games across desktop and mobile environments.</p>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-slate-500">What this layer carries</p>
              <div className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {frontEndCapabilities.map((item) => <div key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5d9cff]" />{item}</div>)}
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden border border-white/10 bg-[#06090b] p-6 sm:p-8 lg:rounded-r-[1.4rem] lg:p-10">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(46,230,166,0.07),transparent_20rem)]" />
            <div className="relative">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald">Backend & RGS-related engineering</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">The Operational Product Layer</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">Backend engineering for game sessions, wallet communication, game logic, reporting and partner connectivity.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {backendCapabilities.map((item) => <div key={item} className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-slate-300">{item}</div>)}
              </div>
              <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-500">RGS-related engineering describes backend work around remote game server environments. It does not imply ownership of a proprietary platform or certification.</div>
            </div>
          </article>
        </div>
        <div className="relative mt-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"><span className="h-px w-8 bg-white/10" /><span>Connected through product and integration scope</span><span className="h-px w-8 bg-white/10" /></div>
      </Section>

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(46,230,166,0.045),transparent_24rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="Architecture" title="Reference Integration Architecture" description="A layered view separating player, partner, game technology and operational environments." />
            <div className="mt-7 space-y-4 border-t border-white/10 pt-5">
              <p className="text-sm leading-6 text-slate-400">The exact boundary depends on the partner environment. Authentication, wallet behavior, API contracts and operational requirements are defined from actual partner documentation, not assumed in advance.</p>
              <Button href="/contact?service=technology#project-enquiry" variant="secondary">Discuss Architecture</Button>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#06090b] p-4 sm:p-6">
              <ArchitectureDiagram items={technologyArchitectureFlow} />
              <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                {architectureBoundaries.map(([title, text]) => <div key={title} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Product references" title="Different Products. Different Engineering Surfaces." description="The technology story is connected to multiple kinds of OpenGamer work rather than one repeated showcase title." />
        <div className="mt-10">
          <RelatedProductStrip items={[
            { eyebrow: "Playable game client", title: "Dragon Rush", description: "A public game reference for responsive player-facing client and presentation work.", image: "/assets/games/dragon-rush/artwork.webp", href: "/games/dragon-rush", actionLabel: "View Game", accent: "#5d9cff" },
            { eyebrow: "Product interface", title: "LC App", description: "B2B social Live Casino product-interface work showing a different product and UX surface.", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/portfolio/lc-app", actionLabel: "View Product", accent: "#6ccfde" },
            { eyebrow: "Playable portfolio", title: "Forest Fortune", description: "A second game-production reference connecting product presentation with the wider delivery stack.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" }
          ]} />
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

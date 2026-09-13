import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { technologyArchitectureFlow, technologyPrinciples } from "@/content/services";

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

const architectureBoundaries = [
  ["Player layer", "Game client, responsive UI, launch state and player interaction."],
  ["Game service layer", "Session, round, configuration and reporting logic where required."],
  ["Partner boundary", "Wallet, authentication, API mapping and acceptance expectations."],
  ["Release boundary", "QA, monitoring expectations, handoff and post-release support scope."]
];

const integrationSteps = [
  ["01", "Discovery", "Technical context, target environment and responsibilities are clarified.", "Discovery"],
  ["02", "Documentation", "API, wallet, authentication and launch documentation is reviewed.", "Discovery"],
  ["03", "Sandbox", "Connection assumptions are validated against the actual partner environment.", "Connection"],
  ["04", "Game flow", "Launch, session, wallet and error-state behavior is implemented and tested.", "Connection"],
  ["05", "QA", "Functional, regression and integration scenarios are exercised.", "Validation"],
  ["06", "Acceptance", "Open issues and partner acceptance requirements are resolved.", "Validation"],
  ["07", "Release", "Production handoff and release coordination are agreed with the partner.", "Release"],
  ["08", "Support", "Post-release issues, monitoring expectations and follow-up scope are handled as agreed.", "Release"]
];

const engagementModels = [
  ["01", "Project-based delivery", "A defined technical package with a clear beginning, boundary and handoff."],
  ["02", "Dedicated technical team", "Embedded capacity for a continuing engineering roadmap or product stream."],
  ["03", "Co-development", "Shared delivery where responsibilities are split between OpenGamer and the partner team."],
  ["04", "Integration support", "Focused help around APIs, wallet flows, acceptance or release dependencies."],
  ["05", "Long-term product support", "Ongoing maintenance and technical support after the initial delivery scope."]
];

const briefInputs = [
  ["Environment", "Operator, aggregator, platform or other target environment."],
  ["Current state", "What already exists: client, backend, documentation, sandbox or integration work."],
  ["Dependencies", "Wallet, authentication, APIs, certification preparation or third-party constraints."],
  ["Missing scope", "The exact technical gap you need OpenGamer to own or support."]
];

export default function TechnologyPage() {
  return (
    <SiteShell atmosphere="technology">
      <TechnologyHero />

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(46,230,166,0.045),transparent_22rem)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:items-start lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="Engineering scope" title="One Product Stack. Multiple Entry Points." description="Partners can use OpenGamer for one technical layer or connect several layers into a coordinated game-production scope." />
            <div className="mt-7 border-t border-white/10 pt-5"><p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Scope principle</p><p className="mt-3 text-sm leading-6 text-slate-400">Start at the layer where the delivery gap exists. Add adjacent layers only when the product or integration path requires them.</p></div>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-8 left-[1.1rem] top-8 w-px bg-gradient-to-b from-emerald/55 via-white/12 to-transparent sm:left-[1.45rem]" />
            {engineeringScope.map(([index, title, description, entryPoint], itemIndex) => (
              <div key={title} className="group relative grid gap-4 border-b border-white/10 py-7 pl-12 transition duration-300 first:border-t motion-reduce:transition-none sm:grid-cols-[0.9fr_1.1fr] sm:gap-8 sm:py-8 sm:pl-16">
                <div className="absolute left-0 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-emerald/30 bg-[#07100d] text-[0.58rem] font-semibold tracking-[0.12em] text-emerald sm:h-12 sm:w-12">{index}</div>
                <div><span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-slate-500">{entryPoint}</span><h2 className="mt-2 text-xl font-semibold text-white transition group-hover:text-emerald motion-reduce:transition-none sm:text-2xl">{title}</h2></div>
                <div className="sm:border-l sm:border-white/10 sm:pl-8"><p className="text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{description}</p>{itemIndex < engineeringScope.length - 1 && <p className="mt-3 text-xs font-medium uppercase tracking-[0.11em] text-white/35">Can connect to the next delivery layer ↓</p>}</div>
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
            <div className="mt-8 border-t border-white/10 pt-6"><p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-slate-500">What this layer carries</p><div className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">{frontEndCapabilities.map((item) => <div key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5d9cff]" />{item}</div>)}</div></div>
          </article>
          <article className="relative overflow-hidden border border-white/10 bg-[#06090b] p-6 sm:p-8 lg:rounded-r-[1.4rem] lg:p-10">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(46,230,166,0.07),transparent_20rem)]" />
            <div className="relative"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald">Backend & RGS-related engineering</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">The Operational Product Layer</h2><p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">Backend engineering for game sessions, wallet communication, game logic, reporting and partner connectivity.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{backendCapabilities.map((item) => <div key={item} className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-slate-300">{item}</div>)}</div><div className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-500">RGS-related engineering describes backend work around remote game server environments. It does not imply ownership of a proprietary platform or certification.</div></div>
          </article>
        </div>
        <div className="relative mt-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"><span className="h-px w-8 bg-white/10" /><span>Connected through product and integration scope</span><span className="h-px w-8 bg-white/10" /></div>
      </Section>

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(46,230,166,0.045),transparent_24rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28"><SectionHeader eyebrow="Architecture" title="Reference Integration Architecture" description="A layered view separating player, partner, game technology and operational environments." /><div className="mt-7 space-y-4 border-t border-white/10 pt-5"><p className="text-sm leading-6 text-slate-400">The exact boundary depends on the partner environment. Authentication, wallet behavior, API contracts and operational requirements are defined from actual partner documentation, not assumed in advance.</p><Button href="/contact?interest=technology#project-enquiry" variant="secondary">Discuss Architecture</Button></div></div>
          <div><div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#06090b] p-4 sm:p-6"><ArchitectureDiagram items={technologyArchitectureFlow} /><div className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">{architectureBoundaries.map(([title, text]) => <div key={title} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Product references" title="Different Products. Different Engineering Surfaces." description="The technology story is connected to multiple kinds of OpenGamer work rather than one repeated showcase title." />
        <div className="mt-10"><RelatedProductStrip items={[
          { eyebrow: "Playable game client", title: "Dragon Rush", description: "A public game reference for responsive player-facing client and presentation work.", image: "/assets/games/dragon-rush/artwork.webp", href: "/games/dragon-rush", actionLabel: "View Game", accent: "#5d9cff" },
          { eyebrow: "Product interface", title: "LC App", description: "B2B social Live Casino product-interface work showing a different product and UX surface.", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/portfolio/lc-app", actionLabel: "View Product", accent: "#6ccfde" },
          { eyebrow: "Playable portfolio", title: "Forest Fortune", description: "A second game-production reference connecting product presentation with the wider delivery stack.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" }
        ]} /></div>
      </Section>

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(46,230,166,0.04),transparent_24rem)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeader eyebrow="Delivery" title="Integration Is a Sequence, Not a Handoff Email" description="Each integration starts with technical discovery and finishes with an agreed release and support boundary. The exact work between those points depends on the real partner environment." /><div className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-slate-500">No sandbox, wallet or release behavior is assumed before the relevant documentation and partner constraints are reviewed.</div></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {integrationSteps.map(([number, title, text, phase]) => (
              <div key={number} className="group relative min-h-[180px] overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-emerald/25 motion-reduce:transition-none sm:p-6">
                <div aria-hidden="true" className="absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full border border-emerald/[0.06]" />
                <div className="relative flex items-start justify-between gap-5"><span className="text-[0.58rem] font-semibold tracking-[0.17em] text-emerald">{number}</span><span className="text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-slate-600">{phase}</span></div>
                <h3 className="relative mt-6 text-xl font-semibold text-white transition group-hover:text-emerald motion-reduce:transition-none">{title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black/20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_72%,rgba(93,156,255,0.035),transparent_22rem)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeader eyebrow="Ways to engage" title="Choose the Delivery Relationship After the Technical Gap Is Clear" description="The same engineering capability can be supplied as a focused project, embedded capacity or continuing support. The model should follow the ownership and duration of the work." /></div>
          <div className="border-t border-white/10">
            {engagementModels.map(([number, title, text]) => (
              <div key={number} className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[3.5rem_0.8fr_1.2fr] sm:gap-6 sm:py-7">
                <span className="text-[0.62rem] font-semibold tracking-[0.17em] text-emerald/90">{number}</span>
                <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
          <div><SectionHeader eyebrow="Engineering principles" title="Delivery Rules, Not Marketing Claims" description="A small set of principles shapes how technical work is scoped and handed off." /></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {technologyPrinciples.map((principle, index) => (
              <div key={principle} className="flex min-h-24 items-end justify-between rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
                <span className="max-w-[17rem] text-sm font-medium leading-6 text-slate-300">{principle}</span>
                <span className="text-[0.58rem] font-semibold tracking-[0.14em] text-emerald/75">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black/20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(46,230,166,0.055),transparent_25rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div><SectionHeader eyebrow="Useful first brief" title="Four Inputs Are Enough to Start the Technical Conversation" description="You do not need a finished specification. A precise description of the environment and missing scope is more useful than a long generic requirements document." /></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {briefInputs.map(([title, text], index) => (
              <div key={title} className="rounded-[1.1rem] border border-white/10 bg-white/[0.025] p-5 sm:p-6"><span className="text-[0.58rem] font-semibold tracking-[0.15em] text-emerald">0{index + 1}</span><h3 className="mt-4 text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection title="Define the Technical Boundary First" description="Share the target environment, current implementation, technical dependencies and the gap you want OpenGamer to own or support." ctaLabel="Discuss Integration" ctaHref="/contact?interest=technology#project-enquiry" secondaryLabel="View Development Services" secondaryHref="/services" />
    </SiteShell>
  );
}

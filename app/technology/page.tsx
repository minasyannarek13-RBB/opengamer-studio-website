import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
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

export default function TechnologyPage() {
  return (
    <SiteShell atmosphere="technology">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(46,230,166,0.08),transparent_24rem),radial-gradient(circle_at_62%_80%,rgba(117,103,248,0.07),transparent_22rem)]" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              eyebrow="Technology"
              title="Engineering the Product Layer Behind Casino Games"
              description="OpenGamer supports casino game production with front-end engineering, backend services, RGS-related development, integration workflows and delivery support."
              headingLevel="h1"
            />
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Built around real game work</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Technology is presented as the engineering layer that connects playable game clients, backend services and partner environments rather than as a separate abstract capability list.
              </p>
              <StudioGameSignature context="technology" variant="inline" className="mt-5 max-w-2xl" />
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
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Production-focused client engineering for casino games across desktop and mobile environments.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {frontEndCapabilities.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Backend & RGS-related engineering</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">The Operational Product Layer</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Backend engineering for game sessions, wallet communication, game logic, reporting and partner connectivity.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {backendCapabilities.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader
            eyebrow="Architecture"
            title="Reference Integration Architecture"
            description="A layered view separating player, partner, game technology and operational environments."
          />
          <ArchitectureDiagram items={technologyArchitectureFlow} />
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader
          eyebrow="Product references"
          title="Technology Connected to Real Product Work"
          description="Real OpenGamer games and product concepts provide the visual proof layer for the engineering story."
        />
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
          <SectionHeader
            eyebrow="Delivery"
            title="Integration Workflow"
            description="Each integration begins with technical discovery. Scope, dependencies and timing are defined after reviewing the partner environment and documentation."
          />
          <div>
            <ProcessTimeline items={integrationWorkflow.map((title) => ({ title }))} />
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Ways to engage"
              title="From One Technical Gap to Long-Term Product Support"
              description="Technology work can be scoped as a project, support stream or dedicated team depending on partner needs."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {engagementModels.map((model, index) => (
              <div key={model} className="flex min-h-24 items-end justify-between rounded-xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-emerald/25 hover:bg-white/[0.05]">
                <span className="max-w-[15rem] text-sm font-medium leading-6 text-slate-200">{model}</span>
                <span className="text-xs font-semibold text-emerald/80">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Engineering principles" title="Designed for Delivery, Not Decoration" />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {technologyPrinciples.map((principle, index) => (
              <div key={principle} className="flex gap-5 py-5">
                <span className="mt-1 text-xs font-semibold text-emerald/80">0{index + 1}</span>
                <p className="text-sm leading-6 text-slate-300">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Discuss Integration Requirements"
        description="Share your platform, wallet flow, aggregator context, target launch path and technical documentation status."
        ctaLabel="Discuss Integration"
        ctaHref="/contact?service=technology"
        secondaryLabel="View Development Services"
        secondaryHref="/services"
      />
    </SiteShell>
  );
}

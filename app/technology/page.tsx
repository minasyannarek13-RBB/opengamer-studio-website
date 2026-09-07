import type { Metadata } from "next";
import Image from "next/image";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { integrationWorkflow, technologyArchitectureFlow, technologyPrinciples } from "@/content/services";

export const metadata: Metadata = {
  title: "Technology | OpenGamer Studio",
  description: "Frontend, backend, RGS-related engineering and integration support for casino games and iGaming products.",
  alternates: { canonical: "/technology" }
};

const engineeringAreas = [
  {
    title: "Game Frontend",
    description: "Responsive HTML5 clients, game UI, animation integration, asset optimisation and device-focused performance.",
    items: ["HTML5 game clients", "Responsive UI", "Animation integration", "Performance optimisation"]
  },
  {
    title: "Backend & RGS-Related Engineering",
    description: "Game-session logic, configuration, wallet communication, reporting and RGS-related modules defined around the partner scope.",
    items: ["Session handling", "Game logic", "Configuration", "Reporting"]
  },
  {
    title: "Integration",
    description: "Structured work around launch flows, wallet communication, operator or aggregator connectivity, QA and acceptance.",
    items: ["API mapping", "Wallet flows", "Partner connectivity", "Acceptance support"]
  }
];

const proofVisuals = [
  { label: "Game-facing product", title: "Deep Dive", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive" },
  { label: "Product interface", title: "LC App", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/portfolio/lc-app" }
];

export default function TechnologyPage() {
  return (
    <SiteShell atmosphere="technology">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(46,230,166,0.13),transparent_28rem)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="premium-kicker text-xs font-semibold uppercase">Engineering</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl">Technology behind the game experience.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              OpenGamer connects game frontend, backend services, RGS-related engineering and integrations so the product experience and technical delivery stay aligned.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact?interest=technology#project-enquiry">Discuss Engineering</Button>
              <Button href="/services#technology-and-integration" variant="secondary">View Services</Button>
            </div>
          </div>

          <div className="grid min-h-[25rem] gap-3 sm:grid-cols-2">
            {proofVisuals.map((item, index) => (
              <a key={item.title} href={item.href} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-[0_24px_80px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/35 ${index === 1 ? "sm:translate-y-8" : ""}`}>
                <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 28vw, 48vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">{item.label}</span>
                  <strong className="mt-1 block text-xl font-semibold text-white">{item.title}</strong>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div className="mb-10 max-w-3xl">
          <p className="premium-kicker text-xs font-semibold uppercase">Core engineering areas</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Three connected layers instead of a wall of capabilities.</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">A project can use one layer or combine them into a broader delivery scope.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3" data-reveal-group="cards">
          {engineeringAreas.map((area) => (
            <Card key={area.title} tone="strong" className="h-full p-6">
              <h3 className="text-2xl font-semibold text-white">{area.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">{area.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-300">{item}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <div className="max-w-xl">
            <p className="premium-kicker text-xs font-semibold uppercase">Architecture</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Keep responsibilities visible across the integration path.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">This reference view separates player-facing, game, partner and operational layers so dependencies are easier to discuss before implementation.</p>
          </div>
          <ArchitectureDiagram items={technologyArchitectureFlow} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="premium-kicker text-xs font-semibold uppercase">Integration workflow</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Discover first. Integrate second.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">Technical scope, dependencies and acceptance conditions are defined against the actual partner environment rather than assumed in advance.</p>
          </div>
          <ProcessTimeline items={integrationWorkflow.map((title) => ({ title }))} />
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050609] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.32)]">
            <Image src="/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp" alt="LC App concept across multiple devices" width={1672} height={941} className="h-full w-full rounded-xl object-contain" sizes="(min-width: 1024px) 56vw, 100vw" />
          </div>
          <div className="max-w-xl">
            <p className="premium-kicker text-xs font-semibold uppercase">Product engineering reference</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white">Engineering should support the product, not compete with it.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">LC App is shown here as a product-interface reference: the visual system, responsive behaviour and product flows still need engineering decisions that stay connected to the user experience.</p>
            <Button href="/portfolio/lc-app" variant="secondary" className="mt-7">Explore LC App</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="premium-kicker text-xs font-semibold uppercase">Engineering principles</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white">Build for the next release, not just the demo.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2" data-reveal-group="cards">
            {technologyPrinciples.slice(0, 6).map((principle) => (
              <div key={principle} className="premium-card rounded-xl border border-line bg-white/[0.045] p-4 text-sm leading-6 text-slate-300 transition duration-300 hover:border-white/20">{principle}</div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Bring the product and the technical context"
        description="Share the platform, wallet flow, integration target and current development stage. OpenGamer can review the engineering scope from there."
        ctaLabel="Discuss Engineering"
        ctaHref="/contact?interest=technology#project-enquiry"
        secondaryLabel="View Development Services"
        secondaryHref="/services"
      />
    </SiteShell>
  );
}

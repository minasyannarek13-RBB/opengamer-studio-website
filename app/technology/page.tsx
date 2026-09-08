import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  { label: "Game-facing product", title: "Deep Dive", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive", contain: false },
  { label: "Product interface", title: "LC App", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/portfolio/lc-app", contain: true }
];

export default function TechnologyPage() {
  return (
    <SiteShell atmosphere="technology">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(46,230,166,0.13),transparent_28rem)]" />
        <Container className="relative grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10">
          <div className="min-w-0 max-w-2xl">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Engineering</p>
            <h1 className="mt-5 max-w-[12ch] break-words text-balance text-[clamp(2.7rem,9vw,4rem)] font-semibold leading-[0.99] tracking-[-0.02em] text-white">Technology Behind the Game Experience</h1>
            <p className="mt-5 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">OpenGamer connects game frontend, backend services, RGS-related engineering and integrations so product and technical delivery stay aligned.</p>
            <div className="mt-7 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap sm:mt-8">
              <Button href="/contact?interest=technology#project-enquiry" className="w-full min-[460px]:w-auto">Discuss Engineering</Button>
              <Button href="/services#technology-and-integration" variant="secondary" className="w-full min-[460px]:w-auto">View Services</Button>
            </div>
          </div>
          <div className="grid min-h-[21rem] min-w-0 gap-3 sm:min-h-[24rem] sm:grid-cols-2 lg:min-h-[25rem]">
            {proofVisuals.map((item, index) => (
              <Link key={item.title} href={item.href} className={`group relative min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-black/55 shadow-[0_24px_80px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/35 ${index === 1 ? "sm:translate-y-6 lg:translate-y-8" : ""}`}>
                <Image src={item.image} alt="" fill sizes="(min-width:1024px) 28vw,48vw" className={`${item.contain ? "object-contain p-2 sm:p-3" : "object-cover"} transition duration-500 group-hover:scale-[1.025]`} priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 min-w-0 p-4 sm:p-5">
                  <span className="block break-words text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-emerald sm:text-xs sm:tracking-[0.16em]">{item.label}</span>
                  <strong className="mt-1 block break-words text-lg font-semibold text-white sm:text-xl">{item.title}</strong>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="premium-kicker break-words text-xs font-semibold uppercase">Core engineering areas</p>
          <h2 className="mt-4 max-w-[16ch] break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-white">Three Connected Engineering Layers</h2>
          <p className="mt-4 max-w-2xl break-words text-base leading-7 text-slate-300 sm:mt-5">Use one layer or combine them into a broader delivery scope.</p>
        </div>
        <div className="grid min-w-0 gap-5 lg:grid-cols-3" data-reveal-group="cards">
          {engineeringAreas.map((area) => (
            <Card key={area.title} tone="strong" className="h-full min-w-0 p-5 sm:p-6">
              <h3 className="break-words text-2xl font-semibold text-white">{area.title}</h3>
              <p className="mt-4 break-words text-sm leading-6 text-slate-400">{area.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.items.map((item) => <span key={item} className="max-w-full break-words rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs leading-5 text-slate-300">{item}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.68fr_minmax(0,1.32fr)] lg:items-start">
          <div className="min-w-0 max-w-xl">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Architecture</p>
            <h2 className="mt-4 break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">Keep Responsibilities Clear Across the Integration Path</h2>
            <p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">Separate player-facing, game, partner and operational layers so dependencies are clear before implementation.</p>
          </div>
          <ArchitectureDiagram items={technologyArchitectureFlow} />
        </div>
      </Section>

      <Section>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.72fr_minmax(0,1.28fr)] lg:items-center">
          <div className="min-w-0">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Integration workflow</p>
            <h2 className="mt-4 break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">Define the Environment Before the Integration</h2>
            <p className="mt-4 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-5">Technical scope, dependencies and acceptance conditions are defined against the actual partner environment.</p>
          </div>
          <ProcessTimeline items={integrationWorkflow.map((title) => ({ title }))} />
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-[#050609] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.32)]"><Image src="/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp" alt="LC App concept across multiple devices" width={1672} height={941} className="h-full w-full rounded-[var(--radius-card)] object-contain" sizes="(min-width:1024px) 56vw,100vw" /></div>
          <div className="min-w-0 max-w-xl">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Product engineering reference</p>
            <h2 className="mt-4 break-words text-balance text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.08] text-white">Engineering Should Support the Product</h2>
            <p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">LC App is shown as a product-interface reference where responsive behaviour and product flows stay connected to engineering decisions.</p>
            <Button href="/portfolio/lc-app" variant="secondary" className="mt-7 w-full sm:w-auto">Explore LC App</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.7fr_minmax(0,1.3fr)]">
          <div className="min-w-0">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Engineering principles</p>
            <h2 className="mt-4 break-words text-balance text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.08] text-white">Build for the Next Release, Not Only the Demo</h2>
          </div>
          <div className="grid min-w-0 gap-3 md:grid-cols-2" data-reveal-group="cards">
            {technologyPrinciples.slice(0, 6).map((principle) => <div key={principle} className="premium-card min-w-0 break-words rounded-[var(--radius-card)] border border-line bg-white/[0.045] p-4 text-sm leading-6 text-slate-300 transition duration-300 hover:border-white/20">{principle}</div>)}
          </div>
        </div>
      </Section>

      <CTASection title="Bring the Product and Technical Context" description="Share the platform, wallet flow, integration target and current development stage. OpenGamer can review the engineering scope from there." ctaLabel="Discuss Engineering" ctaHref="/contact?interest=technology#project-enquiry" secondaryLabel="View Development Services" secondaryHref="/services" />
    </SiteShell>
  );
}

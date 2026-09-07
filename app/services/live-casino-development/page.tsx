import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const capabilityGroups = [
  ["Product & Format", "Concept direction, player journey, round flow and commercial objective before production begins."],
  ["Rules & Mathematics", "Rules, betting models, payouts, side bets and feature logic prepared for review and validation."],
  ["Player Experience", "Betting UI, mobile UX, result communication, localisation and live-session interaction."],
  ["Presenter & Studio Flow", "Presenter prompts, round states, table flow, display logic and operational clarity."],
  ["Technical Product Layer", "Frontend, backend services, integration and operational tooling scoped to the product."],
  ["QA & Launch Preparation", "Game-flow, device, interruption, localisation and acceptance scenarios prepared for delivery."]
];

export const metadata: Metadata = {
  title: "Live Casino Development | OpenGamer Studio",
  description: "Live Casino game and show-format development across concept, mathematics, player UX, presenter flows and technical product design.",
  alternates: { canonical: "/services/live-casino-development" }
};

export default function LiveCasinoDevelopmentPage() {
  return (
    <SiteShell atmosphere="elementals">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(220,164,95,0.12),transparent_28rem),radial-gradient(circle_at_18%_80%,rgba(46,230,206,0.08),transparent_24rem)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="premium-kicker text-xs font-semibold uppercase">Live Casino Development</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl">Design the product around the table, not only the table itself.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">OpenGamer works across show-game concepts, rules, player UX, presenter flows and the product technology that connects them.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact?interest=live-casino#project-enquiry">Discuss Live Casino</Button>
              <Button href="/portfolio/elementals" variant="secondary">Explore ELEMENTALS</Button>
            </div>
          </div>
          <div className="grid min-h-[25rem] gap-3 sm:grid-cols-[1.15fr_0.85fr]">
            <Link href="/portfolio/elementals" className="group relative overflow-hidden rounded-2xl border border-[#dca45f]/20 bg-black/45 shadow-[0_26px_90px_rgba(0,0,0,0.34)]">
              <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS Nexus stage concept" fill sizes="(min-width:1024px) 34vw,60vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">Show-game concept</span><strong className="mt-1 block text-xl font-semibold text-white">ELEMENTALS</strong></div>
            </Link>
            <Link href="/portfolio/lc-app" className="group relative overflow-hidden rounded-2xl border border-[#2ee6ce]/15 bg-black/45 shadow-[0_26px_90px_rgba(0,0,0,0.3)]">
              <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-community.webp" alt="LC App concept community interface" fill sizes="(min-width:1024px) 24vw,40vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2ee6ce]">Product layer</span><strong className="mt-1 block text-xl font-semibold text-white">LC App</strong></div>
            </Link>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mb-10 max-w-3xl"><p className="premium-kicker text-xs font-semibold uppercase">What OpenGamer can cover</p><h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">From format idea to a product teams can actually build around.</h2></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-group="cards">
          {capabilityGroups.map(([title, description]) => <Card key={title} tone="strong" className="h-full"><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></Card>)}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#dca45f]/20 bg-black/40 p-2"><Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS studio wheel concept" width={1086} height={724} className="h-full w-full rounded-xl object-cover" sizes="(min-width:1024px) 58vw,100vw" /></div>
          <div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">OpenGamer concept reference</p><h2 className="mt-4 text-balance text-4xl font-semibold text-white">ELEMENTALS shows the product thinking in context.</h2><p className="mt-5 text-base leading-7 text-slate-300">The concept combines a central wheel, realm-based bonus direction, dealer-host presentation and studio-facing product thinking. It remains in development and is not presented as a launched live product.</p><Button href="/portfolio/elementals" variant="secondary" className="mt-7">Explore ELEMENTALS</Button></div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="max-w-xl"><p className="premium-kicker text-xs font-semibold uppercase">Beyond the table</p><h2 className="mt-4 text-balance text-4xl font-semibold text-white">Live Casino can also be a product ecosystem.</h2><p className="mt-5 text-base leading-7 text-slate-300">LC App is a separate OpenGamer concept exploring discovery, creators, communities and communication around existing Live Casino ecosystems.</p><Button href="/portfolio/lc-app" variant="secondary" className="mt-7">Explore LC App</Button></div>
          <div className="overflow-hidden rounded-2xl border border-[#2ee6ce]/15 bg-[#050609] p-2"><Image src="/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp" alt="LC App concept across multiple devices" width={1672} height={941} className="h-full w-full rounded-xl object-contain" sizes="(min-width:1024px) 58vw,100vw" /></div>
        </div>
      </Section>

      <CTASection title="Discuss the next Live Casino product" description="Share the target format, player journey, studio context or current product gap. OpenGamer can review the right development scope." ctaLabel="Discuss Live Casino" ctaHref="/contact?interest=live-casino#project-enquiry" secondaryLabel="Explore Portfolio" secondaryHref="/portfolio" />
    </SiteShell>
  );
}

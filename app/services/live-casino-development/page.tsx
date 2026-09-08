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
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(220,164,95,0.12),transparent_28rem),radial-gradient(circle_at_18%_80%,rgba(46,230,206,0.08),transparent_24rem)]" />
        <Container className="relative grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10">
          <div className="min-w-0 max-w-2xl">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Live Casino Development</p>
            <h1 className="mt-5 max-w-[13ch] break-words text-balance text-[clamp(2.7rem,9vw,4rem)] font-semibold leading-[0.99] tracking-[-0.02em] text-white">Design the Experience Around the Table</h1>
            <p className="mt-5 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">OpenGamer works across show-game concepts, rules, player UX, presenter flows and the technology connecting them.</p>
            <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-8">
              <Button href="/contact?interest=live-casino#project-enquiry" className="w-full min-[480px]:w-auto">Discuss Live Casino</Button>
              <Button href="/portfolio/elementals" variant="secondary" className="w-full min-[480px]:w-auto">Explore ELEMENTALS</Button>
            </div>
          </div>
          <div className="grid min-h-[21rem] min-w-0 gap-3 sm:min-h-[24rem] sm:grid-cols-[1.15fr_0.85fr] lg:min-h-[25rem]">
            <Link href="/portfolio/elementals" className="group relative min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-[#dca45f]/20 bg-black/45 shadow-[0_26px_90px_rgba(0,0,0,0.34)]">
              <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS Nexus stage concept" fill sizes="(min-width:1024px) 34vw,60vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 min-w-0 p-4 sm:p-5"><span className="block break-words text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#dca45f] sm:text-xs sm:tracking-[0.16em]">Show-game concept</span><strong className="mt-1 block break-words text-lg font-semibold text-white sm:text-xl">ELEMENTALS</strong></div>
            </Link>
            <Link href="/portfolio/lc-app" className="group relative min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-[#2ee6ce]/15 bg-black/45 shadow-[0_26px_90px_rgba(0,0,0,0.3)]">
              <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-community.webp" alt="LC App concept community interface" fill sizes="(min-width:1024px) 24vw,40vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 min-w-0 p-4 sm:p-5"><span className="block break-words text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#2ee6ce] sm:text-xs sm:tracking-[0.16em]">Product layer</span><strong className="mt-1 block break-words text-lg font-semibold text-white sm:text-xl">LC App</strong></div>
            </Link>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mb-8 max-w-3xl sm:mb-10"><p className="premium-kicker break-words text-xs font-semibold uppercase">What OpenGamer can cover</p><h2 className="mt-4 max-w-[17ch] break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">From Format Idea to Buildable Product</h2></div>
        <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-group="cards">
          {capabilityGroups.map(([title, description]) => <Card key={title} tone="strong" className="h-full min-w-0"><h3 className="break-words text-xl font-semibold text-white">{title}</h3><p className="mt-3 break-words text-sm leading-6 text-slate-400">{description}</p></Card>)}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-[#dca45f]/20 bg-black/40 p-2"><Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS studio wheel concept" width={1086} height={724} className="h-full w-full rounded-[var(--radius-card)] object-cover" sizes="(min-width:1024px) 58vw,100vw" /></div>
          <div className="min-w-0 max-w-xl"><p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#dca45f]">OpenGamer concept reference</p><h2 className="mt-4 break-words text-balance text-[clamp(2rem,5.5vw,2.75rem)] font-semibold leading-[1.08] text-white">ELEMENTALS Shows the Product Thinking in Context</h2><p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">The concept combines a central wheel, realm-based bonus direction, dealer-host presentation and studio-facing product thinking. ELEMENTALS remains in development.</p><Button href="/portfolio/elementals" variant="secondary" className="mt-7 w-full sm:w-auto">Explore ELEMENTALS</Button></div>
        </div>
      </Section>

      <Section>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.72fr_minmax(0,1.28fr)] lg:items-center">
          <div className="min-w-0 max-w-xl"><p className="premium-kicker break-words text-xs font-semibold uppercase">Beyond the table</p><h2 className="mt-4 break-words text-balance text-[clamp(2rem,5.5vw,2.75rem)] font-semibold leading-[1.08] text-white">Live Casino Can Extend Beyond the Session</h2><p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">LC App is a separate OpenGamer concept exploring discovery, creators, communities and communication around existing Live Casino ecosystems.</p><Button href="/portfolio/lc-app" variant="secondary" className="mt-7 w-full sm:w-auto">Explore LC App</Button></div>
          <div className="min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-[#2ee6ce]/15 bg-[#050609] p-2"><Image src="/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp" alt="LC App concept across multiple devices" width={1672} height={941} className="h-full w-full rounded-[var(--radius-card)] object-contain" sizes="(min-width:1024px) 58vw,100vw" /></div>
        </div>
      </Section>

      <CTASection title="Discuss the Next Live Casino Product" description="Share the target format, player journey, studio context or current product gap. OpenGamer can review the right development scope." ctaLabel="Discuss Live Casino" ctaHref="/contact?interest=live-casino#project-enquiry" secondaryLabel="Explore Portfolio" secondaryHref="/portfolio" />
    </SiteShell>
  );
}

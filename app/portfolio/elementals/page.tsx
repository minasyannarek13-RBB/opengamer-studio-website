import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { elementalsExpositions, elementalsRealms, elementalsWheelImage } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "ELEMENTALS | Live Casino Show Game Concept — OpenGamer",
  description: "ELEMENTALS is an original Live Casino show-game concept in development, built around the Great Wheel and four elemental realms.",
  alternates: { canonical: "/portfolio/elementals" },
  openGraph: {
    title: "ELEMENTALS — Four Realms. One Great Wheel.",
    description: "An original cinematic Live Casino show-game concept from OpenGamer.",
    images: [{ url: "/assets/projects/elementals/expositions/nexus-stage.webp", width: 1200, height: 676, alt: "ELEMENTALS Nexus stage concept" }]
  }
};

const productFacts = [
  ["Format", "Live Casino show-game concept"],
  ["Core structure", "Great Wheel + four elemental realms"],
  ["Status", "In development"],
  ["Discussion", "Provider, operator or co-development"]
];

export default function ElementalsPage() {
  const featured = elementalsExpositions.find((item) => item.featured) || elementalsExpositions[0];
  const realms = elementalsExpositions.filter((item) => !item.featured && item.title.includes("Realm"));

  return (
    <SiteShell atmosphere="elementals">
      <div className="elementals-page">
        <section className="relative overflow-hidden border-b border-white/10 py-12 sm:py-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(220,164,95,0.13),transparent_30rem),radial-gradient(circle_at_20%_80%,rgba(65,137,110,0.10),transparent_26rem)]" />
          <Container className="relative grid min-w-0 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
            <div className="min-w-0 max-w-2xl">
              <p className="break-words text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">OpenGamer original concept</p>
              <h1 className="mt-5 break-words text-balance text-[clamp(3.3rem,13vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.025em] text-white">ELEMENTALS</h1>
              <p className="mt-4 break-words text-balance text-[clamp(1.8rem,6vw,2.5rem)] font-medium leading-tight text-white">Four Realms. One Great Wheel.</p>
              <p className="mt-5 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">A cinematic Live Casino show-game concept built around a central wheel, four elemental bonus worlds and a dealer-host presentation.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="max-w-full break-words rounded-full border border-[#dca45f]/35 bg-[#dca45f]/10 px-4 py-2 text-sm leading-5 text-[#f0c98f]">Original concept · In development</span>
                <span className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm leading-5 text-slate-300">Live Casino show game</span>
              </div>
              <div className="mt-7 flex flex-col gap-3 min-[500px]:flex-row min-[500px]:flex-wrap sm:mt-8">
                <Button href="/contact?interest=elementals#project-enquiry" className="w-full min-[500px]:w-auto">Discuss ELEMENTALS</Button>
                <Button href="/services/live-casino-development" variant="secondary" className="w-full min-[500px]:w-auto">Live Casino Development</Button>
              </div>
            </div>
            <div className="min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-[#dca45f]/20 bg-black/40 p-2 shadow-[0_36px_120px_rgba(0,0,0,0.46)]">
              <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS Nexus stage with four elemental portals" width={1200} height={676} priority className="h-full w-full rounded-[var(--radius-card)] object-cover" sizes="(min-width:1024px) 56vw,100vw" />
            </div>
          </Container>
        </section>

        <Section>
          <div className="grid min-w-0 gap-8 lg:grid-cols-[0.68fr_minmax(0,1.32fr)] lg:items-center">
            <div className="min-w-0 max-w-xl">
              <p className="break-words text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">The core idea</p>
              <h2 className="mt-4 break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">The Wheel Is the Stage. The Realms Are the Payoff.</h2>
              <p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">The Nexus connects the base experience to Fire, Water, Earth and Air. Each realm has its own visual world and bonus direction.</p>
              <div className="mt-7 grid min-w-0 gap-3 sm:grid-cols-2">
                {productFacts.map(([label, value]) => (
                  <div key={label} className="min-w-0 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] p-4">
                    <p className="break-words text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    <p className="mt-2 break-words text-sm leading-6 text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-black/40 p-2 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
              <Image src={elementalsWheelImage} alt="ELEMENTALS Great Wheel artwork" width={1024} height={1024} className="aspect-[4/3] h-full w-full rounded-[var(--radius-card)] object-cover" sizes="(min-width:1024px) 58vw,100vw" />
            </div>
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="break-words text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">World direction</p>
            <h2 className="mt-4 break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">One Universe. Four Distinct Realms.</h2>
            <p className="mt-4 max-w-2xl break-words text-base leading-7 text-slate-300 sm:mt-5">Concept frames establish the visual language of the Nexus and four elemental worlds.</p>
          </div>
          <div className="grid min-w-0 gap-5 lg:grid-cols-2" data-reveal-group="cards">
            <article className="min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-[#dca45f]/20 bg-white/[0.035] lg:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden bg-black/40 sm:aspect-[16/8]">
                <Image src={featured.image} alt={featured.alt} width={featured.width} height={featured.height} className="h-full w-full object-cover" sizes="100vw" />
              </div>
              <div className="min-w-0 p-5 sm:p-6">
                <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#dca45f]">Central stage</p>
                <h3 className="mt-2 break-words text-2xl font-semibold text-white">{featured.title}</h3>
                <p className="mt-3 max-w-3xl break-words text-sm leading-6 text-slate-400">{featured.description}</p>
              </div>
            </article>
            {realms.map((item) => (
              <article key={item.title} className="group min-w-0 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035]">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image src={item.image} alt={item.alt} width={item.width} height={item.height} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" sizes="(min-width:1024px) 48vw,100vw" />
                </div>
                <div className="min-w-0 p-5">
                  <h3 className="break-words text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="break-words text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">Realm gateways</p>
            <h2 className="mt-4 max-w-[16ch] break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">A Distinct Identity for Every Realm</h2>
          </div>
          <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-4" data-reveal-group="cards">
            {elementalsRealms.map((realm) => (
              <Card key={realm.title} className={`min-w-0 overflow-hidden bg-gradient-to-br ${realm.tone} p-0`} style={{ "--realm-accent": realm.title === "Fire" ? "var(--realm-fire)" : realm.title === "Water" ? "var(--realm-water)" : realm.title === "Earth" ? "var(--realm-earth)" : "var(--realm-air)" } as CSSProperties}>
                <div className="relative aspect-[4/5] overflow-hidden bg-black/42">
                  <Image src={realm.portalImage} alt={`${realm.title} elemental portal`} width={1024} height={1024} className="h-full w-full object-cover" sizes="(min-width:1024px) 23vw,50vw" />
                  <div className="absolute left-4 top-4 h-14 w-14 overflow-hidden rounded-[var(--radius-small-card)] border border-white/15 bg-black/65 shadow-xl">
                    <Image src={realm.iconImage} alt="" width={1024} height={1024} className="h-full w-full object-cover" sizes="56px" />
                  </div>
                </div>
                <div className="min-w-0 p-5">
                  <h3 className="break-words text-xl font-semibold text-white">{realm.title}</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-slate-300">{realm.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[0.7fr_minmax(0,1.3fr)] lg:items-center">
            <div className="min-w-0 max-w-xl">
              <p className="break-words text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">Dealer-host direction</p>
              <h2 className="mt-4 break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">A Guardian, Not a Generic Presenter</h2>
              <p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">The host direction supports the ritual and cinematic identity of the concept. Character presentation is part of the world-building.</p>
            </div>
            <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-4">
              {elementalsRealms.map((realm) => (
                <article key={realm.guardianImage} className="min-w-0 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={realm.guardianImage} alt={`${realm.title} guardian concept`} width={1024} height={1024} className="h-full w-full object-cover" sizes="(min-width:1024px) 18vw,45vw" />
                  </div>
                  <p className="break-words p-3 text-sm font-semibold text-white">{realm.title}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid min-w-0 gap-5 lg:grid-cols-3">
            <Card tone="strong" className="min-w-0"><p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#dca45f]">Original direction</p><h2 className="mt-3 break-words text-xl font-semibold text-white">Designed to Differentiate</h2><p className="mt-3 break-words text-sm leading-6 text-slate-400">The concept has its own world, visual language and bonus-realm structure.</p></Card>
            <Card tone="strong" className="min-w-0"><p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#dca45f]">Current status</p><h2 className="mt-3 break-words text-xl font-semibold text-white">In Development</h2><p className="mt-3 break-words text-sm leading-6 text-slate-400">Mechanics, mathematics and production details continue to be developed.</p></Card>
            <Card tone="strong" className="min-w-0"><p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#dca45f]">Partnership path</p><h2 className="mt-3 break-words text-xl font-semibold text-white">Open for Discussion</h2><p className="mt-3 break-words text-sm leading-6 text-slate-400">Provider, operator, studio-production and co-development paths can be explored around the concept.</p></Card>
          </div>
        </Section>

        <CTASection title="Discuss the ELEMENTALS Direction" description="Explore provider collaboration, studio-production planning or co-development around the concept." ctaLabel="Discuss ELEMENTALS" ctaHref="/contact?interest=elementals#project-enquiry" secondaryLabel="Live Casino Development" secondaryHref="/services/live-casino-development" />
      </div>
    </SiteShell>
  );
}

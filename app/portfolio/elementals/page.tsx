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
  ["Direction", "Provider, operator or co-development discussion"]
];

export default function ElementalsPage() {
  const featured = elementalsExpositions.find((item) => item.featured) || elementalsExpositions[0];
  const realms = elementalsExpositions.filter((item) => !item.featured && item.title.includes("Realm"));

  return (
    <SiteShell atmosphere="elementals">
      <div className="elementals-page">
        <section className="relative overflow-hidden border-b border-white/10 py-14 sm:py-20 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(220,164,95,0.13),transparent_30rem),radial-gradient(circle_at_20%_80%,rgba(65,137,110,0.10),transparent_26rem)]" />
          <Container className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dca45f]">OpenGamer original concept</p>
              <h1 className="mt-5 text-balance text-6xl font-semibold leading-[0.92] text-white sm:text-7xl">ELEMENTALS</h1>
              <p className="mt-5 text-balance text-3xl font-medium leading-tight text-white sm:text-4xl">Four realms. One Great Wheel.</p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">A cinematic Live Casino show-game concept built around a central wheel, four elemental bonus worlds and a dealer-host presentation.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#dca45f]/35 bg-[#dca45f]/10 px-4 py-2 text-sm text-[#f0c98f]">Original concept · In development</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">Live Casino show game</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact?interest=elementals#project-enquiry">Discuss ELEMENTALS</Button>
                <Button href="/services/live-casino-development" variant="secondary">Live Casino Development</Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#dca45f]/20 bg-black/40 p-2 shadow-[0_36px_120px_rgba(0,0,0,0.46)]">
              <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS Nexus stage with four elemental portals" width={1200} height={676} priority className="h-full w-full rounded-xl object-cover" sizes="(min-width:1024px) 56vw,100vw" />
            </div>
          </Container>
        </section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dca45f]">The core idea</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">The wheel is the stage. The realms are the payoff.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">The Nexus connects the base experience to Fire, Water, Earth and Air. Each realm is designed as its own visual world rather than a simple theme swap.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {productFacts.map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
              <Image src={elementalsWheelImage} alt="ELEMENTALS Great Wheel artwork" width={1024} height={1024} className="aspect-[4/3] h-full w-full rounded-xl object-cover" sizes="(min-width:1024px) 58vw,100vw" />
            </div>
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dca45f]">World direction</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">One visual universe, four distinct realms.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">Concept frames establish the tone of the Nexus and the four elemental worlds without presenting unfinished mechanics as final.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2" data-reveal-group="cards">
            <article className="overflow-hidden rounded-2xl border border-[#dca45f]/20 bg-white/[0.035] lg:col-span-2">
              <div className="relative aspect-[16/8] overflow-hidden bg-black/40">
                <Image src={featured.image} alt={featured.alt} width={featured.width} height={featured.height} className="h-full w-full object-cover" sizes="100vw" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">Central stage</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{featured.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{featured.description}</p>
              </div>
            </article>
            {realms.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image src={item.image} alt={item.alt} width={item.width} height={item.height} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" sizes="(min-width:1024px) 48vw,100vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dca45f]">Realm gateways</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Each realm needs its own identity before it needs more copy.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-reveal-group="cards">
            {elementalsRealms.map((realm) => (
              <Card key={realm.title} className={`overflow-hidden bg-gradient-to-br ${realm.tone} p-0`} style={{ "--realm-accent": realm.title === "Fire" ? "var(--realm-fire)" : realm.title === "Water" ? "var(--realm-water)" : realm.title === "Earth" ? "var(--realm-earth)" : "var(--realm-air)" } as CSSProperties}>
                <div className="relative aspect-[4/5] overflow-hidden bg-black/42">
                  <Image src={realm.portalImage} alt={`${realm.title} elemental portal`} width={1024} height={1024} className="h-full w-full object-cover" sizes="(min-width:1024px) 23vw,50vw" />
                  <div className="absolute left-4 top-4 h-14 w-14 overflow-hidden rounded-xl border border-white/15 bg-black/65 shadow-xl">
                    <Image src={realm.iconImage} alt="" width={1024} height={1024} className="h-full w-full object-cover" sizes="56px" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{realm.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{realm.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dca45f]">Dealer-host direction</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">A guardian, not a generic presenter.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">The host direction supports the ritual and cinematic identity of the concept. Character presentation is part of the world-building, not proof of a launched studio or final production setup.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {elementalsRealms.map((realm) => (
                <article key={realm.guardianImage} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={realm.guardianImage} alt={`${realm.title} guardian concept`} width={1024} height={1024} className="h-full w-full object-cover" sizes="(min-width:1024px) 18vw,45vw" />
                  </div>
                  <p className="p-3 text-sm font-semibold text-white">{realm.title}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card tone="strong"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">Original direction</p><h2 className="mt-3 text-xl font-semibold text-white">Designed to differentiate.</h2><p className="mt-3 text-sm leading-6 text-slate-400">The concept is positioned around its own world, visual language and bonus-realm structure.</p></Card>
            <Card tone="strong"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">Current status</p><h2 className="mt-3 text-xl font-semibold text-white">In development.</h2><p className="mt-3 text-sm leading-6 text-slate-400">Final mechanics, mathematics, launch timing and certification are not published as complete.</p></Card>
            <Card tone="strong"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dca45f]">Partnership path</p><h2 className="mt-3 text-xl font-semibold text-white">Open for project discussion.</h2><p className="mt-3 text-sm leading-6 text-slate-400">Provider, operator, studio-production and co-development discussions can be explored around the concept.</p></Card>
          </div>
        </Section>

        <CTASection title="Bring ELEMENTALS into a serious product discussion" description="Explore provider collaboration, studio-production planning or co-development around the concept." ctaLabel="Discuss ELEMENTALS" ctaHref="/contact?interest=elementals#project-enquiry" secondaryLabel="Live Casino Development" secondaryHref="/services/live-casino-development" />
      </div>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { elementalsExpositions, elementalsRealms, elementalsWheelImage, portfolioProjects } from "@/content/portfolio";

const elementals = portfolioProjects[0];
const featuredExposition = elementalsExpositions.find((item) => item.featured) ?? elementalsExpositions[0];

export const metadata: Metadata = {
  title: "ELEMENTALS | Premium Live Casino Show Game — OpenGamer",
  description: "ELEMENTALS is an original Live Casino show-game concept built around the Great Wheel and four elemental realms. In development.",
  alternates: { canonical: "/portfolio/elementals" },
  openGraph: {
    title: "ELEMENTALS — Original Live Casino Show-Game Concept",
    description: "The Great Wheel, four elemental realms and a cinematic dealer-host direction. In development.",
    images: elementals.image ? [{ url: elementals.image, width: 800, height: 600, alt: elementals.imageAlt }] : undefined
  }
};

export default function ElementalsPage() {
  return (
    <SiteShell atmosphere="elementals">
      <div className="elementals-page">
        <section className="elementals-hero relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(147,51,234,0.13),transparent_26rem),radial-gradient(circle_at_84%_72%,rgba(46,230,166,0.07),transparent_28rem)]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(circle_at_70%_44%,black,transparent_72%)]" />
          <Container className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
            <div>
              <span className="premium-status rounded-full px-3 py-1 text-xs">Original Live Casino IP · In development</span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-emerald">OpenGamer original concept</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">ELEMENTALS</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">A cinematic Live Casino show-game direction built around the Great Wheel, four elemental realms and a dealer-host presentation.</p>
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/contact?interest=elementals#project-enquiry" className="w-full min-[480px]:w-auto">Discuss ELEMENTALS</Button>
                <Button href="/services#live-casino" variant="secondary" className="w-full min-[480px]:w-auto">View Live Casino Scope</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="ELEMENTALS public status">
                {["Show-game concept", "Great Wheel", "Four realms", "Dealer-host direction"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
                ))}
              </div>
            </div>

            <div className="elementals-stage-frame relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-black/45 shadow-[0_34px_120px_rgba(0,0,0,0.48)]">
              <div className="relative aspect-[16/10] min-h-[360px] sm:min-h-[470px] lg:min-h-[560px]">
                <Image src={featuredExposition.image} alt={featuredExposition.alt} fill priority className="object-cover" sizes="(min-width:1024px) 58vw,100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-emerald">Product world</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">The Nexus and the Great Wheel</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">The central presentation frame connects the host position, wheel and elemental realm gateways into one show-game world.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <SectionHeader eyebrow="Product system" title="One Core World. Four Distinct Directions." description="The public concept is organized around a central wheel and four elemental realms. Final mechanics, mathematics and launch configuration remain in development." />
              <div className="mt-7 grid gap-3 border-t border-white/10 pt-5 text-sm text-slate-300">
                {[
                  ["Core", "Great Wheel + Nexus"],
                  ["Presentation", "Dealer-host show format"],
                  ["World structure", "Fire · Water · Earth · Air"],
                  ["Status", "In development"]
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-5 border-b border-white/10 pb-3"><span className="text-slate-500">{label}</span><span className="text-right text-slate-200">{value}</span></div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card tone="strong" className="elementals-stage-frame overflow-hidden p-0">
                <div className="relative aspect-[16/10] min-h-[360px] lg:min-h-[500px]">
                  <Image src={elementalsWheelImage} alt="ELEMENTALS Great Wheel artwork" fill className="object-cover" sizes="(min-width:1024px) 58vw,100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />
                </div>
              </Card>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {elementalsRealms.map((realm) => (
                  <Card key={realm.title} className={`elementals-realm-card overflow-hidden bg-gradient-to-br ${realm.tone} p-0`} style={{ "--realm-accent": realm.title === "Fire" ? "var(--realm-fire)" : realm.title === "Water" ? "var(--realm-water)" : realm.title === "Earth" ? "var(--realm-earth)" : "var(--realm-air)" } as CSSProperties}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                      <Image src={realm.portalImage} alt={`${realm.title} elemental portal`} fill className="object-cover" sizes="(min-width:1024px) 17vw,(min-width:768px) 45vw,100vw" />
                      <div className="absolute left-3 top-3 h-12 w-12 overflow-hidden rounded-lg border border-white/15 bg-black/60">
                        <Image src={realm.iconImage} alt={`${realm.title} elemental icon`} fill className="object-cover" sizes="48px" />
                      </div>
                    </div>
                    <div className="p-4"><h3 className="text-lg font-semibold text-white">{realm.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{realm.description}</p></div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section className="relative overflow-hidden bg-black/20">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(147,51,234,0.08),transparent_28rem)]" />
          <div className="relative">
            <SectionHeader eyebrow="World direction" title="A Cinematic Identity Around the Game System" description="Selected concept frames and guardian artwork define the intended world and presentation tone without implying that the final studio or production configuration is complete." />
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {elementalsExpositions.filter((item) => !item.featured).slice(0, 4).map((item, index) => (
                  <div key={item.title} className={`relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/40 ${index === 0 ? "sm:col-span-2" : ""}`}>
                    <div className={`relative ${index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                      <Image src={item.image} alt={item.alt} fill className="object-cover" sizes={index === 0 ? "(min-width:1024px) 62vw,100vw" : "(min-width:1024px) 30vw,50vw"} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {elementalsRealms.slice(0, 2).map((realm) => (
                  <div key={realm.guardianImage} className="relative min-h-[250px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/40 lg:min-h-[330px]">
                    <Image src={realm.guardianImage} alt={`${realm.title} elemental guardian concept`} fill className="object-cover" sizes="(min-width:1024px) 28vw,50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">{realm.title} Guardian</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <SectionHeader eyebrow="Current public status" title="Concept Direction Is Visible. Production Status Stays Explicit." description="ELEMENTALS is an original Live Casino show-game concept in development. Public materials do not claim launch, certification, live integration or finalized mathematics." />
            </div>
            <div className="border-y border-white/10">
              {[
                ["01", "Product format", "Live Casino show-game concept"],
                ["02", "Development status", "In development"],
                ["03", "Mechanics & mathematics", "Not published as final"],
                ["04", "Certification / integration", "Not confirmed"]
              ].map(([number, label, value]) => (
                <div key={label} className="grid gap-3 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-center">
                  <span className="text-xs font-semibold tracking-[0.16em] text-emerald">{number}</span><h3 className="font-semibold text-white">{label}</h3><p className="text-sm text-slate-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <StudioGameSignature context="elementals" variant="related-game" className="mt-10 max-w-3xl" />
        </Section>

        <CTASection title="Discuss ELEMENTALS as a Product Development Opportunity" description="Use the current concept as a starting point for a show-game development, provider collaboration or co-development discussion. Final technical, studio and commercial scope is defined separately." ctaLabel="Discuss ELEMENTALS" ctaHref="/contact?interest=elementals#project-enquiry" secondaryLabel="View Live Casino Scope" secondaryHref="/services#live-casino" />
      </div>
    </SiteShell>
  );
}

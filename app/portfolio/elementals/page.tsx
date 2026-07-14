import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { elementalsRealms, elementalsWheelImage, portfolioProjects } from "@/content/portfolio";

const elementals = portfolioProjects[0];

export const metadata: Metadata = {
  title: "ELEMENTALS | Premium Live Casino Show Game — OpenGamer",
  description: "ELEMENTALS is a premium Live Casino show game concept built around four elemental realms and the Great Wheel. In development.",
  alternates: { canonical: "/portfolio/elementals" },
  openGraph: {
    title: "ELEMENTALS — A New Kind of Live Casino Show Game",
    description: "Four realms. One Wheel. A cinematic live casino show game concept from OpenGamer Studio.",
    images: elementals.image ? [{ url: elementals.image, width: 800, height: 600, alt: elementals.imageAlt }] : undefined
  }
};

export default function ElementalsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/20 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(35,196,131,0.14),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%)]" />
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="reveal">
            <span className="rounded-full border border-emerald/30 px-3 py-1 text-xs text-emerald">In Development</span>
            <h1 className="mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">ELEMENTALS</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A premium Live Casino show game built around four elemental realms and the Great Wheel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Discuss ELEMENTALS Partnership</Button>
              <Button href="/services/live-casino-development" variant="secondary">
                View Live Casino Development
              </Button>
            </div>
          </div>
          {elementals.image ? (
            <div className="premium-card surface-hairline image-frame reveal overflow-hidden rounded-lg border border-line bg-white/[0.045]">
              <Image src={elementals.image} alt={elementals.imageAlt} width={1536} height={1024} priority className="h-full w-full object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
            </div>
          ) : null}
        </Container>
      </section>
      <Section>
        <SectionHeader
          eyebrow="Product Overview"
          title="The Great Wheel at the Center"
          description="The Great Wheel anchors the product concept and connects the four elemental realms into one show-game structure."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch" data-reveal-group="cards">
          <Card tone="strong" className="overflow-hidden p-0">
            <div className="image-frame relative aspect-[16/10] bg-black/30 lg:aspect-auto lg:h-full">
              <Image src={elementalsWheelImage} alt="ELEMENTALS Great Wheel artwork" width={1024} height={1024} className="h-full w-full object-cover" sizes="(min-width: 1024px) 52vw, 100vw" />
            </div>
          </Card>
          <Card className="h-full">
            <h2 className="text-2xl font-semibold text-white">One Wheel. Four Realms.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              ELEMENTALS combines a central Great Wheel with four elemental bonus realms, presented through a dealer-host format and a cinematic, ritual-inspired world.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              The Nexus is the central world connecting all four realms — the setting for the base game and the point every bonus round returns to.
            </p>
          </Card>
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader eyebrow="Four Realms" title="Realm Gateways" description="Each realm has a distinct visual identity. Final mechanics are in development and not yet published." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-reveal-group="cards">
          {elementalsRealms.map((realm) => (
            <Card key={realm.title} className={`bg-gradient-to-br ${realm.tone} p-0`}>
              <div className="image-frame relative aspect-[4/5] overflow-hidden bg-black/35">
                <Image src={realm.portalImage} alt={`${realm.title} elemental portal`} width={1024} height={1024} className="h-full w-full object-cover" sizes="(min-width: 1024px) 22vw, 50vw" />
                <div className="absolute left-4 top-4 h-16 w-16 overflow-hidden rounded-lg border border-white/15 bg-black/55 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
                  <Image src={realm.iconImage} alt={`${realm.title} elemental icon`} width={1024} height={1024} className="h-full w-full object-cover" sizes="64px" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{realm.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{realm.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="Four Guardians" title="Guardian Presentation" description="The guardian direction supports the premium ritual tone without presenting the concept as launched or finalized." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-reveal-group="cards">
          {elementalsRealms.map((realm) => (
            <Card key={realm.guardianImage} className="overflow-hidden p-0">
              <div className="image-frame relative aspect-square bg-black/35">
                <Image src={realm.guardianImage} alt={`${realm.title} elemental guardian`} width={1024} height={1024} className="h-full w-full object-cover" sizes="(min-width: 1024px) 28vw, 100vw" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{realm.title} Guardian</h3>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-black/20">
        <div className="grid gap-6 lg:grid-cols-3" data-reveal-group="cards">
          <Card>
            <h2 className="text-xl font-semibold text-white">Built to Differentiate, Not Clone</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Each realm&apos;s bonus round is designed as original mechanics rather than a reskin of an existing market format.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-white">A Guardian, Not a Generic Dealer</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              ELEMENTALS is presented through a dealer-host character, reinforcing the ritual and cinematic fantasy tone.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-white">Product Status</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">In Development. Mechanics, mathematics, launch timing and certification are not yet finalized.</p>
          </Card>
        </div>
      </Section>
      <CTASection
        title="Discuss an ELEMENTALS Partnership"
        description="Discuss studio production, provider collaboration or a co-development partnership for ELEMENTALS."
        ctaLabel="Discuss ELEMENTALS Partnership"
      />
    </SiteShell>
  );
}

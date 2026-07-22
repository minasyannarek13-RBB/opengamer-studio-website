import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { lcAppAssets } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "LC App | B2B Social Layer for Live Casino — OpenGamer",
  description: "LC App is a product concept exploring a social product layer for existing Live Casino ecosystems.",
  alternates: { canonical: "/portfolio/lc-app" },
  openGraph: {
    title: "LC App — Social Layer for Live Casino",
    description: "A product concept exploring Live Casino discovery, communities, creator-led experiences and communication.",
    images: [{ url: lcAppAssets.deviceEcosystem.src, width: lcAppAssets.deviceEcosystem.width, height: lcAppAssets.deviceEcosystem.height, alt: lcAppAssets.deviceEcosystem.alt }]
  }
};

const conceptSections = [
  {
    eyebrow: "Discovery",
    title: "Discover Live Tables and Communities",
    copy: "A discovery layer concept for exploring live tables, hosts, friends and relevant player communities from one interface.",
    asset: lcAppAssets.discover
  },
  {
    eyebrow: "Social Feed",
    title: "Live Content and Social Participation",
    copy: "A social-feed concept connecting live sessions, scheduled rooms, creator content and community interaction without separating engagement from gameplay discovery.",
    asset: lcAppAssets.socialFeed
  },
  {
    eyebrow: "Creator Profile",
    title: "Creator-Led Live Experiences",
    copy: "A profile concept for hosts and creators, bringing live rooms, content, schedules and communities into one visible destination.",
    asset: lcAppAssets.creatorProfile
  },
  {
    eyebrow: "Community",
    title: "Communities Around Live Play",
    copy: "A community-space concept for discussions, scheduled rooms, shared content and participation around Live Casino experiences.",
    asset: lcAppAssets.community
  }
];

export default function LcAppPage() {
  return (
    <SiteShell>
      <div className="lc-app-page">
      <section className="lc-app-hero relative overflow-hidden border-b border-white/10 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.034)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="reveal">
            <h1 className="mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">A Social Layer for Live Casino</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              LC App is a product concept exploring how live tables, player communities, creator-led experiences and communication could exist within one connected B2B product layer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="premium-status rounded-full px-3 py-1 text-xs">Product Concept · In Development</span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">Concept UI</span>
            </div>
            <Button href="/contact?interest=lc-app" className="mt-8">
              Discuss the Project
            </Button>
          </div>
          <div className="lc-device-stage premium-card surface-hairline image-frame reveal overflow-hidden rounded-lg border border-line p-2 shadow-[0_34px_118px_rgba(0,0,0,0.44)]">
            <Image
              src={lcAppAssets.deviceEcosystem.src}
              alt={lcAppAssets.deviceEcosystem.alt}
              width={lcAppAssets.deviceEcosystem.width}
              height={lcAppAssets.deviceEcosystem.height}
              priority
              className="h-full w-full rounded-md object-contain"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Product Direction"
              title="One Connected Live Casino Experience"
              description="The concept brings discovery, live gameplay, social feeds, creator profiles and communities into a consistent product experience designed around existing Live Casino ecosystems."
            />
            <span className="mt-6 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">Concept UI</span>
          </div>
          <ConceptImage asset={lcAppAssets.productLineup} priority={false} wide />
        </div>
      </Section>

      {conceptSections.map((section, index) => (
        <Section key={section.title} className={index % 2 === 0 ? "bg-black/20" : undefined}>
          <div className={`grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:max-w-xl">
              <SectionHeader eyebrow={section.eyebrow} title={section.title} description={section.copy} />
              <span className="mt-6 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">Concept UI</span>
            </div>
            <ConceptImage asset={section.asset} tall={section.asset.height > section.asset.width} priority={false} />
          </div>
        </Section>
      ))}

      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-center">
          <ConceptImage asset={lcAppAssets.desktopExperience} priority={false} />
          <div className="lg:max-w-xl">
            <SectionHeader
              eyebrow="Cross-Device Experience"
              title="Designed Beyond a Single Screen"
              description="The concept explores a consistent experience across desktop, laptop and mobile environments while keeping live play and communication connected."
            />
            <span className="mt-6 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">Concept UI</span>
          </div>
        </div>
      </Section>

      <CTASection
        title="A Product Concept in Development"
        description="LC App is currently presented as a product direction rather than a launched application. OpenGamer is open to discussing product development, operator collaboration and strategic technology partnerships around the concept."
        ctaLabel="Discuss the Project"
        ctaHref="/contact?interest=lc-app"
      />
      </div>
    </SiteShell>
  );
}

function ConceptImage({ asset, tall = false, wide = false, priority = false }: { asset: { src: string; width: number; height: number; alt: string }; tall?: boolean; wide?: boolean; priority?: boolean }) {
  return (
    <div className={`lc-device-stage premium-card surface-hairline image-frame overflow-hidden rounded-lg border border-line p-2 shadow-[0_22px_80px_rgba(0,0,0,0.3)] ${wide ? "lg:shadow-[0_30px_110px_rgba(0,0,0,0.38)]" : ""}`}>
      <div className={`relative overflow-hidden rounded-md bg-black/38 ${tall ? "lc-phone-frame max-h-[760px]" : ""}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          priority={priority}
          className="h-full w-full object-contain"
          sizes={tall ? "(min-width: 1024px) 28vw, 100vw" : "(min-width: 1024px) 54vw, 100vw"}
        />
      </div>
    </div>
  );
}

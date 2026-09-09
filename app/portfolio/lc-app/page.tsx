import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { lcAppAssets, lcAppOverview } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "LC App | B2B Social Layer for Live Casino — OpenGamer",
  description: "LC App is an in-development B2B product concept exploring social Live Casino discovery, communities and creator-led engagement.",
  alternates: { canonical: "/portfolio/lc-app" },
  openGraph: {
    title: "LC App — Social Product Direction for Live Casino",
    description: "An in-development B2B concept connecting live tables, communities, creator-led experiences and communication.",
    images: [{ url: lcAppAssets.deviceEcosystem.src, width: lcAppAssets.deviceEcosystem.width, height: lcAppAssets.deviceEcosystem.height, alt: lcAppAssets.deviceEcosystem.alt }]
  }
};

const productLayers = [
  ["01", "Discovery", "Explore live tables, hosts and relevant community activity from one product surface."],
  ["02", "Social participation", "Bring content, live-session context and community interaction closer to gameplay discovery."],
  ["03", "Creator profiles", "Give hosts and creators a visible destination for content, schedules, live rooms and communities."],
  ["04", "Community", "Support shared spaces around Live Casino experiences without positioning the concept as a standalone operator."]
];

export default function LcAppPage() {
  return (
    <SiteShell atmosphere="lc-app">
      <div className="lc-app-page">
        <section className="lc-app-hero relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,rgba(46,230,166,0.12),transparent_25rem),radial-gradient(circle_at_88%_72%,rgba(93,156,255,0.07),transparent_28rem)]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
          <Container className="relative grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-14">
            <div>
              <span className="premium-status rounded-full px-3 py-1 text-xs">B2B product direction · In development</span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-emerald">LC App</p>
              <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">A Social Layer for Live Casino</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{lcAppOverview}</p>
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/contact?interest=lc-app#project-enquiry" className="w-full min-[480px]:w-auto">Discuss LC App</Button>
                <Button href="/portfolio" variant="secondary" className="w-full min-[480px]:w-auto">View Portfolio</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="LC App concept scope">
                {["Live discovery", "Creator profiles", "Communities", "Cross-device concept"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
                ))}
              </div>
            </div>

            <div className="lc-device-stage relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#06090b] p-3 shadow-[0_34px_118px_rgba(0,0,0,0.44)] sm:p-4">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(46,230,166,0.08),transparent_24rem)]" />
              <Image src={lcAppAssets.deviceEcosystem.src} alt={lcAppAssets.deviceEcosystem.alt} width={lcAppAssets.deviceEcosystem.width} height={lcAppAssets.deviceEcosystem.height} priority className="relative h-full w-full rounded-[1.35rem] object-contain" sizes="(min-width:1024px) 58vw,100vw" />
            </div>
          </Container>
        </section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <SectionHeader eyebrow="Product thesis" title="Keep Engagement Closer to the Live Experience" description="The concept explores whether discovery, creator identity, community and communication can sit around existing Live Casino ecosystems instead of living in disconnected channels." />
              <p className="mt-6 border-l border-emerald/35 pl-4 text-sm leading-7 text-slate-400">LC App is presented as a B2B product direction. It is not positioned here as a licensed casino, launched operator product or confirmed provider integration.</p>
            </div>

            <div className="border-y border-white/10">
              {productLayers.map(([number, title, description]) => (
                <div key={title} className="grid gap-3 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[3.5rem_0.72fr_1.28fr] sm:items-start sm:gap-6">
                  <span className="text-xs font-semibold tracking-[0.18em] text-emerald">{number}</span>
                  <h2 className="text-xl font-semibold text-white">{title}</h2>
                  <p className="text-sm leading-6 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="relative overflow-hidden bg-black/20">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_86%_30%,rgba(46,230,166,0.055),transparent_28rem)]" />
          <div className="relative">
            <SectionHeader eyebrow="Core experience" title="Discovery, Social Participation and Creator Identity in One Product Direction" description="The concept screens are shown as product-design evidence, not as a claim of a currently launched application." />
            <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <ConceptPanel asset={lcAppAssets.productLineup} className="lg:col-span-2" />
              <div className="grid gap-5 sm:grid-cols-2">
                <ConceptPanel asset={lcAppAssets.discover} tall label="Discovery" />
                <ConceptPanel asset={lcAppAssets.socialFeed} tall label="Social feed" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <ConceptPanel asset={lcAppAssets.creatorProfile} tall label="Creator profile" />
                <ConceptPanel asset={lcAppAssets.community} label="Community" />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-14">
            <ConceptPanel asset={lcAppAssets.desktopExperience} />
            <div>
              <SectionHeader eyebrow="Cross-device direction" title="The Product Concept Extends Beyond a Single Mobile Screen" description="The visual direction explores a consistent experience across desktop and mobile while keeping live play, discovery and communication connected." />
              <div className="mt-7 grid gap-3 border-t border-white/10 pt-5 text-sm">
                {[
                  ["Product status", "In development"],
                  ["Interface status", "Concept UI"],
                  ["Operator/provider integrations", "Not confirmed"],
                  ["Production launch", "Not claimed"]
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-5 border-b border-white/10 pb-3"><span className="text-slate-500">{label}</span><span className="text-right text-slate-200">{value}</span></div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section className="relative overflow-hidden bg-black/20">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(46,230,166,0.04),transparent_24rem)]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <SectionHeader eyebrow="Development snapshot" title="What the Current Concept Shows" description="Current public materials show the product and interface direction. Launched production use, pilots, customers and live integrations are not presented as confirmed." />
              <div className="mt-7 flex flex-wrap gap-2">
                {["B2B direction", "Concept UI", "In development"].map((item) => <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-slate-500">{item}</span>)}
              </div>
            </div>
            <div className="border-y border-white/10">
              {[
                ["01", "Product direction", "Concept interfaces and product structure are available for review."],
                ["02", "Development status", "In development"],
                ["03", "Live integrations / customers", "Not confirmed"],
                ["04", "Discussion scope", "Product development and strategic collaboration can be scoped separately."]
              ].map(([number, title, copy]) => (
                <div key={title} className="grid gap-3 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start sm:gap-6">
                  <span className="text-xs font-semibold tracking-[0.16em] text-emerald">{number}</span>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <StudioGameSignature context="lcApp" variant="related-game" className="mt-10 max-w-3xl" />
        </Section>

        <CTASection title="Discuss LC App as a Product Development Direction" description="Use the current concept and interface work as a starting point for a product-development or strategic collaboration discussion. Commercial, legal and integration scope remains separate until agreed." ctaLabel="Discuss LC App" ctaHref="/contact?interest=lc-app#project-enquiry" secondaryLabel="View Portfolio" secondaryHref="/portfolio" />
      </div>
    </SiteShell>
  );
}

function ConceptPanel({ asset, tall = false, label, className = "" }: { asset: { src: string; width: number; height: number; alt: string }; tall?: boolean; label?: string; className?: string }) {
  return (
    <div className={`lc-device-stage relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#06090b] p-2 shadow-[0_22px_80px_rgba(0,0,0,0.3)] ${className}`}>
      <div className={`relative overflow-hidden rounded-[1.05rem] bg-black/38 ${tall ? "mx-auto max-h-[720px] max-w-[360px]" : ""}`}>
        <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} className="h-full w-full object-contain" sizes={tall ? "(min-width:1024px) 22vw,45vw" : "(min-width:1024px) 58vw,100vw"} />
      </div>
      {label ? <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/65 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-emerald backdrop-blur">{label}</span> : null}
    </div>
  );
}

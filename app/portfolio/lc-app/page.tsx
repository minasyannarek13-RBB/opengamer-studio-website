import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { lcAppAssets, lcAppDisclaimer } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "LC App | Social Product Concept for Live Casino — OpenGamer",
  description: "LC App is an OpenGamer product concept exploring a social discovery and engagement layer for existing Live Casino ecosystems.",
  alternates: { canonical: "/portfolio/lc-app" },
  openGraph: {
    title: "LC App — Social Layer for Live Casino",
    description: "A product concept connecting Live Casino discovery, creator-led experiences, communities and communication.",
    images: [{ url: lcAppAssets.deviceEcosystem.src, width: lcAppAssets.deviceEcosystem.width, height: lcAppAssets.deviceEcosystem.height, alt: lcAppAssets.deviceEcosystem.alt }]
  }
};

const productPillars = [
  { number: "01", title: "Discover", description: "Find live tables, hosts and relevant communities through one product layer." },
  { number: "02", title: "Follow", description: "Keep creator profiles, schedules, content and live sessions visible beyond a single table visit." },
  { number: "03", title: "Participate", description: "Bring conversation, communities and live-session discovery closer together." }
];

const phoneMoments = [
  { eyebrow: "Discovery", title: "Find the Next Live Experience", copy: "A discovery view built around live tables, creators and social context.", asset: lcAppAssets.discover },
  { eyebrow: "Social feed", title: "Keep Live Content Moving", copy: "A feed concept for sessions, creator content and community activity.", asset: lcAppAssets.socialFeed },
  { eyebrow: "Creator profile", title: "Make the Host Part of the Product", copy: "A destination for creator identity, content, schedule and live-room access.", asset: lcAppAssets.creatorProfile }
];

export default function LcAppPage() {
  return (
    <SiteShell atmosphere="lc-app">
      <div className="lc-app-page">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#050609] py-12 sm:py-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(95,17,24,0.20),transparent_38%),linear-gradient(245deg,rgba(46,230,206,0.12),transparent_36%),radial-gradient(circle_at_74%_18%,rgba(36,199,169,0.14),transparent_28rem)]" />
          <Container className="relative grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10">
            <div className="min-w-0 max-w-2xl">
              <p className="premium-kicker break-words text-xs font-semibold uppercase">OpenGamer product concept</p>
              <h1 className="mt-5 max-w-[12ch] break-words text-balance text-[clamp(2.8rem,9vw,4.2rem)] font-semibold leading-[0.97] tracking-[-0.025em] text-white">A Social Layer Around Live Casino</h1>
              <p className="mt-5 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                LC App explores discovery, creators, communities and communication around existing Live Casino ecosystems in one connected B2B product experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="max-w-full break-words rounded-full border border-[#24c7a9]/35 bg-[#24c7a9]/10 px-4 py-2 text-sm font-medium leading-5 text-[#a7fff4]">Product concept · In development</span>
                <span className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm leading-5 text-slate-300">Built around existing Live Casino ecosystems</span>
              </div>
              <div className="mt-7 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap sm:mt-8">
                <Button href="/contact?interest=lc-app#project-enquiry" className="w-full min-[460px]:w-auto">Discuss LC App</Button>
                <Button href="/portfolio" variant="secondary" className="w-full min-[460px]:w-auto">Back to Portfolio</Button>
              </div>
            </div>

            <div className="grid min-w-0 gap-3 sm:grid-cols-[1.2fr_0.8fr]" aria-label="LC App concept screens">
              <VisualFrame asset={lcAppAssets.deviceEcosystem} className="sm:row-span-2" priority />
              <VisualFrame asset={lcAppAssets.creatorProfile} portrait />
              <VisualFrame asset={lcAppAssets.discover} portrait />
            </div>
          </Container>
        </section>

        <Section>
          <div className="grid min-w-0 gap-8 lg:grid-cols-[0.72fr_minmax(0,1.28fr)] lg:items-start">
            <div className="min-w-0 max-w-xl lg:sticky lg:top-28">
              <p className="premium-kicker break-words text-xs font-semibold uppercase">Product thesis</p>
              <h2 className="mt-4 break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">Extend Engagement Beyond the Table</h2>
              <p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">
                The concept does not replace Live Casino. It explores the layer around it: where players discover sessions, follow creators and join communities.
              </p>
            </div>
            <div className="grid min-w-0 gap-4 md:grid-cols-3">
              {productPillars.map((pillar) => (
                <article key={pillar.number} className="premium-card min-h-48 min-w-0 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-5 sm:min-h-56">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#2ee6ce]">{pillar.number}</span>
                  <h3 className="mt-6 break-words text-2xl font-semibold text-white sm:mt-8">{pillar.title}</h3>
                  <p className="mt-3 break-words text-sm leading-6 text-slate-400">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Core product moments</p>
            <h2 className="mt-4 max-w-[16ch] break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">Discovery, Content and Creator Identity</h2>
          </div>
          <div className="grid min-w-0 gap-5 lg:grid-cols-3" data-reveal-group="cards">
            {phoneMoments.map((moment) => (
              <article key={moment.title} className="group min-w-0 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035]">
                <div className="relative mx-auto aspect-[0.47/1] max-h-[38rem] w-full overflow-hidden bg-[#050609]">
                  <Image src={moment.asset.src} alt={moment.asset.alt} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain transition duration-500 group-hover:scale-[1.018]" />
                </div>
                <div className="min-w-0 border-t border-white/10 p-5">
                  <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#2ee6ce]">{moment.eyebrow}</p>
                  <h3 className="mt-2 break-words text-xl font-semibold text-white">{moment.title}</h3>
                  <p className="mt-3 break-words text-sm leading-6 text-slate-400">{moment.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid min-w-0 gap-5 lg:grid-cols-2">
            <article className="min-w-0 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035]">
              <VisualFrame asset={lcAppAssets.community} flush />
              <div className="min-w-0 p-5 sm:p-6">
                <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#2ee6ce]">Community layer</p>
                <h2 className="mt-2 break-words text-2xl font-semibold text-white">Interaction Around Live Play</h2>
                <p className="mt-3 max-w-xl break-words text-sm leading-6 text-slate-400">Community spaces, scheduled rooms and shared content are explored inside the same product environment.</p>
              </div>
            </article>
            <article className="min-w-0 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035]">
              <VisualFrame asset={lcAppAssets.productLineup} flush />
              <div className="min-w-0 p-5 sm:p-6">
                <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#2ee6ce]">Product system</p>
                <h2 className="mt-2 break-words text-2xl font-semibold text-white">One Language Across the Experience</h2>
                <p className="mt-3 max-w-xl break-words text-sm leading-6 text-slate-400">The concept uses one visual and interaction system across social, creator and gaming surfaces.</p>
              </div>
            </article>
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <VisualFrame asset={lcAppAssets.desktopExperience} />
            <div className="min-w-0 max-w-xl">
              <p className="premium-kicker break-words text-xs font-semibold uppercase">Cross-device direction</p>
              <h2 className="mt-4 break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] text-white">Designed Beyond Mobile</h2>
              <p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">The concept extends across desktop and mobile while keeping the same hierarchy around live discovery, content and communication.</p>
              <p className="mt-6 break-words rounded-[var(--radius-card)] border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-500">{lcAppDisclaimer}</p>
            </div>
          </div>
        </Section>

        <CTASection
          title="Explore the LC App Direction with OpenGamer"
          description="LC App is an in-development product concept. OpenGamer is open to product-development, operator-collaboration and strategic technology discussions around the direction."
          ctaLabel="Discuss LC App"
          ctaHref="/contact?interest=lc-app#project-enquiry"
          secondaryLabel="Explore OpenGamer Services"
          secondaryHref="/services"
        />
      </div>
    </SiteShell>
  );
}

function VisualFrame({ asset, className = "", portrait = false, flush = false, priority = false }: { asset: { src: string; width: number; height: number; alt: string }; className?: string; portrait?: boolean; flush?: boolean; priority?: boolean }) {
  return (
    <div className={`${flush ? "" : "premium-card surface-hairline min-w-0 rounded-[var(--radius-card)] border border-white/10 bg-[#050609] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.32)]"} ${className}`}>
      <div className={`relative min-w-0 overflow-hidden ${flush ? "aspect-[16/10]" : portrait ? "min-h-56 sm:min-h-72" : "min-h-[17rem] sm:min-h-[20rem]"} rounded-[var(--radius-small-card)] bg-[#050609]`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          priority={priority}
          className="h-full w-full object-contain"
          sizes={portrait ? "(min-width: 1024px) 22vw, 46vw" : "(min-width: 1024px) 56vw, 100vw"}
        />
      </div>
    </div>
  );
}

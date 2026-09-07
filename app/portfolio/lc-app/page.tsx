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
  { eyebrow: "Discovery", title: "Find the next live experience", copy: "A discovery view built around live tables, creators and social context.", asset: lcAppAssets.discover },
  { eyebrow: "Social feed", title: "Keep live content moving", copy: "A feed concept for sessions, creator content and community activity.", asset: lcAppAssets.socialFeed },
  { eyebrow: "Creator profile", title: "Make the host part of the product", copy: "A destination for creator identity, content, schedule and live-room access.", asset: lcAppAssets.creatorProfile }
];

export default function LcAppPage() {
  return (
    <SiteShell atmosphere="lc-app">
      <div className="lc-app-page">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#050609] py-14 sm:py-20 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(95,17,24,0.20),transparent_38%),linear-gradient(245deg,rgba(46,230,206,0.12),transparent_36%),radial-gradient(circle_at_74%_18%,rgba(36,199,169,0.14),transparent_28rem)]" />
          <Container className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="premium-kicker text-xs font-semibold uppercase">OpenGamer product concept</p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">Live Casino, with a social layer around it.</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                LC App explores how discovery, creators, communities and communication could sit around existing Live Casino ecosystems in one connected B2B product experience.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#24c7a9]/35 bg-[#24c7a9]/10 px-4 py-2 text-sm font-medium text-[#a7fff4]">Product concept · In development</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">Existing Live Casino ecosystems</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact?interest=lc-app#project-enquiry">Discuss LC App</Button>
                <Button href="/portfolio" variant="secondary">Back to Portfolio</Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]" aria-label="LC App concept screens">
              <VisualFrame asset={lcAppAssets.deviceEcosystem} className="sm:row-span-2" priority />
              <VisualFrame asset={lcAppAssets.creatorProfile} portrait />
              <VisualFrame asset={lcAppAssets.discover} portrait />
            </div>
          </Container>
        </section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="max-w-xl lg:sticky lg:top-28">
              <p className="premium-kicker text-xs font-semibold uppercase">Product thesis</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Extend engagement beyond the table.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                The concept does not replace the Live Casino product. It explores a layer around it: helping players discover where to go, who to follow and where communities form.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {productPillars.map((pillar) => (
                <article key={pillar.number} className="premium-card min-h-56 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#2ee6ce]">{pillar.number}</span>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="mb-10 max-w-3xl">
            <p className="premium-kicker text-xs font-semibold uppercase">Core product moments</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Three screens that explain the product faster than three paragraphs.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3" data-reveal-group="cards">
            {phoneMoments.map((moment) => (
              <article key={moment.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
                <div className="relative mx-auto aspect-[0.47/1] max-h-[38rem] w-full overflow-hidden bg-[#050609]">
                  <Image src={moment.asset.src} alt={moment.asset.alt} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain transition duration-500 group-hover:scale-[1.018]" />
                </div>
                <div className="border-t border-white/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2ee6ce]">{moment.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{moment.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
              <VisualFrame asset={lcAppAssets.community} flush />
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2ee6ce]">Community layer</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Keep interaction visible around live play.</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Community spaces, scheduled rooms and shared content are explored as part of the same product environment.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
              <VisualFrame asset={lcAppAssets.productLineup} flush />
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2ee6ce]">Product system</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">A consistent language across the experience.</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">The concept is designed as one product system rather than a collection of unrelated social and gaming screens.</p>
              </div>
            </article>
          </div>
        </Section>

        <Section className="bg-black/20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <VisualFrame asset={lcAppAssets.desktopExperience} />
            <div className="max-w-xl">
              <p className="premium-kicker text-xs font-semibold uppercase">Cross-device direction</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Not designed as a phone-only idea.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">The concept extends across desktop and mobile while keeping the same hierarchy around live discovery, content and communication.</p>
              <p className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-500">{lcAppDisclaimer}</p>
            </div>
          </div>
        </Section>

        <CTASection
          title="Explore the product direction with OpenGamer"
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
    <div className={`${flush ? "" : "premium-card surface-hairline rounded-2xl border border-white/10 bg-[#050609] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.32)]"} ${className}`}>
      <div className={`relative overflow-hidden ${flush ? "aspect-[16/10]" : portrait ? "min-h-64 sm:min-h-72" : "min-h-[20rem]"} rounded-xl bg-[#050609]`}>
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

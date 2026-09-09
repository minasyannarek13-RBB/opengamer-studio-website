import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About | OpenGamer Studio",
  description: "OpenGamer is an iGaming development studio creating casino games, product concepts and technology support for B2B partners.",
  alternates: { canonical: "/about" }
};

const disciplines = [
  "Game design",
  "Mathematics",
  "Art & animation",
  "Front-end engineering",
  "Back-end engineering",
  "Integration support",
  "QA & release",
  "Product delivery"
];

const deliveryModes = [
  ["Complete build", "One coordinated scope from product definition through production and release preparation."],
  ["Dedicated capacity", "Specialist iGaming development capacity added around an existing partner roadmap."],
  ["Co-development", "Shared ownership of scope where internal and OpenGamer teams build together."],
  ["Technical support", "Focused engineering, integration, modernization or release support where the gap is specific."]
];

const principles = [
  ["Product before output", "Start with the commercial and product outcome, then define the implementation scope."],
  ["Defined responsibility", "Make ownership, dependencies and delivery boundaries explicit before production starts."],
  ["Technical transparency", "Keep architecture, constraints and integration assumptions visible throughout delivery."],
  ["Maintainable delivery", "Build for continued operation and iteration rather than a one-off handoff that becomes somebody else's archaeology project."]
];

export default function AboutPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.09),transparent_24rem),radial-gradient(circle_at_86%_56%,rgba(93,156,255,0.055),transparent_26rem),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_52%)]" />
        <div aria-hidden="true" className="absolute right-[-12rem] top-[10%] h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 xl:gap-20">
            <div className="relative z-10">
              <SectionHeader
                eyebrow="About OpenGamer"
                title="Product, Game and Engineering in One iGaming Studio"
                description="OpenGamer builds casino games, original product concepts and technical delivery scopes for B2B partners. Engagement can cover a complete build or a defined discipline inside an existing roadmap."
                headingLevel="h1"
              />
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/contact#project-enquiry" className="w-full min-[480px]:w-auto">Discuss a Project</Button>
                <Button href="/games" variant="secondary" className="w-full min-[480px]:w-auto">Explore Games</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="OpenGamer company scope">
                {["Game production", "Dedicated development", "Technology & integration"].map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-rows-[1.15fr_0.85fr]" aria-label="Selected OpenGamer work">
              <Link href="/games/forest-fortune" className="group relative min-h-[330px] overflow-hidden rounded-[1.6rem] border border-white/12 bg-black/40 shadow-[0_34px_110px_rgba(0,0,0,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:col-span-2 lg:min-h-[390px]">
                <Image src="/assets/games/forest-fortune/artwork.webp" alt="Forest Fortune OpenGamer game artwork" fill priority sizes="(min-width:1280px) 55vw,(min-width:1024px) 53vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.02)_30%,rgba(4,6,8,0.88)_100%)]" />
                <div className="absolute left-5 top-5"><span className="rounded-full border border-emerald/25 bg-[#07100d]/80 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-emerald backdrop-blur">Playable portfolio</span></div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-emerald">Game production proof</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Forest Fortune</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">A public game reference connected to OpenGamer's production and delivery story.</p>
                </div>
              </Link>

              <Link href="/portfolio/elementals" className="group relative min-h-[245px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[270px]">
                <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS original Live Casino IP concept" fill sizes="(min-width:1024px) 27vw,(min-width:640px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-emerald">Original IP · In development</span>
                  <h3 className="mt-2 text-xl font-semibold text-white">ELEMENTALS</h3>
                </div>
              </Link>

              <Link href="/portfolio/lc-app" className="group relative min-h-[245px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#06090b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[270px]">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(46,230,166,0.08),transparent_16rem)]" />
                <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App B2B product concept" fill sizes="(min-width:1024px) 27vw,(min-width:640px) 48vw,100vw" className="object-contain p-4 transition duration-700 group-hover:scale-[1.018]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent p-5">
                  <span className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-emerald">B2B product direction · In development</span>
                  <h3 className="mt-1.5 text-xl font-semibold text-white">LC App</h3>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-slate-500">Disciplines inside the delivery scope</p>
            <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {disciplines.map((discipline, index) => (
                <div key={discipline} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-[0.58rem] font-semibold tracking-[0.16em] text-emerald/80">{String(index + 1).padStart(2, "0")}</span>
                  <span>{discipline}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="premium-kicker text-xs font-semibold uppercase">What OpenGamer is</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-white sm:text-4xl">One studio across product, game and technology work.</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">OpenGamer can take responsibility for a complete casino game build or join an existing roadmap for a defined discipline, integration task or dedicated development stream.</p>
          </div>
          <div className="border-y border-white/10">
            {deliveryModes.map(([title, description], index) => (
              <div key={title} className="grid gap-3 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[4rem_0.72fr_1.28fr] sm:items-start sm:gap-6">
                <span className="text-xs font-semibold tracking-[0.18em] text-emerald">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black/20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(46,230,166,0.04),transparent_24rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeader eyebrow="Operating principles" title="How the Studio Works" description="Delivery is organized around responsibility, technical visibility and a scope that can survive contact with an actual production environment." />
          </div>
          <div className="border-t border-white/10">
            {principles.map(([title, description], index) => (
              <div key={title} className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[3rem_0.72fr_1.28fr] sm:gap-6 sm:py-7">
                <span className="text-xs font-semibold tracking-[0.16em] text-emerald/80">0{index + 1}</span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Bring OpenGamer a Product, Game or Technical Gap"
        description="Share the current stage, target environment and the responsibility you need OpenGamer to own."
        ctaLabel="Discuss a Project"
        ctaHref="/contact#project-enquiry"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </SiteShell>
  );
}

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
  ["Maintainable delivery", "Build for continued operation and iteration, with a handoff another team can understand and maintain."]
];

const proofReferences = [
  { title: "Forest Fortune", label: "Playable game", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune" },
  { title: "Cake Bonanza", label: "Portfolio title · No public demo", image: "/assets/games/cake-bonanza/artwork.webp", href: "/games/cake-bonanza" },
  { title: "ELEMENTALS", label: "Original IP · In development", image: "/assets/projects/elementals/expositions/nexus-stage.webp", href: "/portfolio/elementals" },
  { title: "LC App", label: "B2B product concept", image: "/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp", href: "/portfolio/lc-app", contain: true }
];

export default function AboutPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(46,230,166,0.085),transparent_24rem),radial-gradient(circle_at_86%_50%,rgba(93,156,255,0.05),transparent_26rem),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_52%)]" />
        <div aria-hidden="true" className="absolute right-[-12rem] top-[8%] h-[34rem] w-[34rem] rounded-full border border-white/[0.035]" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 xl:gap-20">
            <div className="relative z-10">
              <SectionHeader
                eyebrow="About OpenGamer"
                title="An iGaming Studio Built Around Product Responsibility"
                description="OpenGamer combines game production, product thinking and technical delivery for B2B partners. The scope can be a complete build, an embedded team or one clearly defined technical responsibility."
                headingLevel="h1"
              />
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/contact#project-enquiry" className="w-full min-[480px]:w-auto">Discuss a Project</Button>
                <Button href="/portfolio" variant="secondary" className="w-full min-[480px]:w-auto">View Portfolio</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="OpenGamer company scope">
                {["Game production", "Dedicated development", "Technology & integration", "Portfolio & original IP"].map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#06090b] p-5 shadow-[0_34px_110px_rgba(0,0,0,0.32)] sm:p-7 lg:p-8">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(46,230,166,0.07),transparent_20rem)]" />
              <div className="relative">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald">How OpenGamer fits into a roadmap</p>
                <div className="mt-6 border-y border-white/10">
                  {[
                    ["01", "Product responsibility", "Clarify the commercial goal, player experience, scope and ownership before production starts."],
                    ["02", "Production responsibility", "Connect game design, art, mathematics, engineering and QA around one delivery path."],
                    ["03", "Technical responsibility", "Define integration, backend, RGS-related and release boundaries against the actual partner environment."]
                  ].map(([number, title, text]) => (
                    <div key={title} className="grid gap-3 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:gap-5 sm:py-6">
                      <span className="text-[0.58rem] font-semibold tracking-[0.16em] text-emerald/90">{number}</span>
                      <h2 className="text-base font-semibold text-white sm:text-lg">{title}</h2>
                      <p className="text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Selected work you can inspect</p>
                    <Link href="/portfolio" className="text-xs font-semibold text-emerald/85 transition hover:text-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">View portfolio →</Link>
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {proofReferences.map((item) => (
                      <Link key={item.title} href={item.href} className="group grid grid-cols-[4.4rem_1fr_auto] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 transition hover:border-emerald/25 hover:bg-white/[0.035] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                        <div className="relative aspect-[10/7] overflow-hidden rounded-lg bg-black/40">
                          <Image src={item.image} alt={`${item.title} OpenGamer work`} fill sizes="72px" className={`${item.contain ? "object-contain p-1" : "object-cover"} transition duration-500 group-hover:scale-[1.025]`} />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[0.48rem] font-semibold uppercase tracking-[0.11em] text-emerald">{item.label}</span>
                          <strong className="mt-1 block truncate text-sm text-white">{item.title}</strong>
                        </div>
                        <span aria-hidden="true" className="pr-1 text-sm text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-emerald">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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
        <div className="grid gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:items-start lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="Ways to work" title="Take the Responsibility You Need, Not a Fixed Package" description="The engagement model follows the roadmap and the missing ownership, rather than forcing every partner into the same production package." />
          </div>
          <div className="border-y border-white/10">
            {deliveryModes.map(([title, description], index) => (
              <div key={title} className="grid gap-3 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[4rem_0.72fr_1.28fr] sm:items-start sm:gap-6 sm:py-8">
                <span className="text-xs font-semibold tracking-[0.18em] text-emerald">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black/20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(46,230,166,0.04),transparent_24rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="Operating principles" title="Built for Real Production Constraints" description="Delivery is organized around responsibility, technical visibility and decisions that remain understandable throughout the project lifecycle." />
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

      <Section>
        <div className="grid gap-8 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:p-10">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-emerald">Before the first conversation</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.015em] text-white sm:text-3xl">Define the gap, not a forty-page brief.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Current stage", "Concept, build, integration or live product."],
              ["Missing ownership", "What your internal team cannot or should not own."],
              ["Environment", "Platform, partner, technical or commercial constraints already known."]
            ].map(([title, text]) => (
              <div key={title} className="border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
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

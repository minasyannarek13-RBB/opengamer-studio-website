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
  title: "Live Casino Development | OpenGamer Studio",
  description: "Live Casino product design and development for table-game, show-game and hybrid concepts, including player UX, presenter flows and integration-oriented engineering.",
  alternates: { canonical: "/services/live-casino-development" },
  openGraph: {
    title: "Live Casino Development | OpenGamer Studio",
    description: "Design and develop Live Casino products around game logic, player UX, presenter flows and technical delivery.",
    url: "/services/live-casino-development",
    images: [{ url: "/assets/projects/elementals/expositions/nexus-studio-wheel.webp", width: 1086, height: 724, alt: "ELEMENTALS Live Casino show-game concept" }]
  }
};

const buyerScopes = [
  {
    number: "01",
    title: "Create a Live Game",
    description: "Define a new table, show-game or hybrid product from player proposition through game flow and interface behaviour.",
    tags: ["Product concept", "Rules & mechanics", "Player journey"]
  },
  {
    number: "02",
    title: "Build the Product Layer",
    description: "Design player-facing and studio-facing interfaces around the live session, betting states, result communication and operational flow.",
    tags: ["Player UX", "Presenter flow", "Frontend interfaces"]
  },
  {
    number: "03",
    title: "Connect the Technical Scope",
    description: "Add frontend, backend and integration-oriented engineering around the product where the delivery model requires it.",
    tags: ["Backend", "Integration", "Release support"]
  }
];

const deliveryAreas = [
  ["Product & game design", "Format logic, target player, rules, round flow, bonus structure and product documentation."],
  ["Mathematics support", "Payout logic, feature behaviour and mathematical preparation where the project scope requires it."],
  ["Player experience", "Betting states, mobile UX, result communication, session states and error handling."],
  ["Presenter & studio UX", "Presenter prompts, round states, display logic and operating-team product flows."],
  ["Frontend & backend engineering", "Player interfaces and supporting services shaped around the agreed technical architecture."],
  ["Integration & QA support", "API mapping, acceptance scenarios, regression coverage and launch-readiness support without claiming certification ownership."]
];

export default function LiveCasinoDevelopmentPage() {
  return (
    <SiteShell atmosphere="elementals">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(46,230,166,0.12),transparent_28rem),radial-gradient(circle_at_92%_72%,rgba(93,156,255,0.055),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_52%)]" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="Live Casino Development"
              title="Design the Product Around the Live Experience"
              description="OpenGamer supports Live Casino product development across game logic, player UX, presenter flows and the technical scope around them. The engagement can cover one discipline or a coordinated product build."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Button href="/contact?interest=live-casino#project-enquiry" className="w-full min-[480px]:w-auto">Discuss a Live Product</Button>
              <Button href="/portfolio/elementals" variant="secondary" className="w-full min-[480px]:w-auto">Explore ELEMENTALS</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Live Casino development scope">
              {["Game design", "Player UX", "Presenter flows", "Frontend / backend", "Integration support"].map((item) => (
                <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
              ))}
            </div>
          </div>

          <Link href="/portfolio/elementals" className="group relative min-h-[420px] overflow-hidden rounded-[1.65rem] border border-white/15 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[520px]">
            <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS original Live Casino show-game concept" fill priority sizes="(min-width:1024px) 56vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.018]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.02)_28%,rgba(4,6,8,0.88)_100%)]" />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-7 sm:top-7">
              <span className="rounded-full border border-emerald/25 bg-[#07100d]/80 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-emerald backdrop-blur">Original Live Casino IP</span>
              <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur">In development</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-emerald">Product proof</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl">ELEMENTALS</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">An original show-game direction built around a central wheel, four elemental realms and a host-led product experience.</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald">Explore the concept →</span>
            </div>
          </Link>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Three starting points"
              title="Start From the Product Problem"
              description="The scope should follow the commercial and product need, not a fixed service package."
            />
          </div>
          <div className="border-t border-white/10">
            {buyerScopes.map((scope) => (
              <div key={scope.number} className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-10">
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-emerald">{scope.number}</span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.015em] text-white sm:text-[1.8rem]">{scope.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{scope.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {scope.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[0.62rem] text-slate-500">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow="Delivery scope" title="One Product, Multiple Disciplines" description="Use only the disciplines the project actually requires. OpenGamer does not need to own studio operation or broadcast infrastructure to contribute to the product layer." />
          <Button href="/services" variant="secondary">View All Solutions</Button>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-0 md:grid-cols-2">
          {deliveryAreas.map(([title, description], index) => (
            <div key={title} className="grid grid-cols-[2.2rem_1fr] gap-4 border-t border-white/10 py-6">
              <span className="text-xs font-semibold text-emerald">0{index + 1}</span>
              <div>
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#05070a] shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:min-h-[440px]">
            <Image src="/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp" alt="LC App concept interface across devices" fill sizes="(min-width:1024px) 52vw,100vw" className="object-contain p-5 sm:p-7" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Separate product direction</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Live Engagement Beyond the Table</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">LC App is a separate B2B product concept exploring discovery, creator-led experiences and communities around existing Live Casino ecosystems. It is shown here only as related product thinking, not as part of the ELEMENTALS game.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/portfolio/lc-app" variant="secondary">Explore LC App</Button>
              <Button href="/contact?interest=live-casino#project-enquiry" variant="link">Discuss Live Casino Scope</Button>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Build the Live Product Layer You Actually Need"
        description="Share the game format, target player, existing studio or provider context and the product gap. OpenGamer can scope the design, interface and engineering work around it."
        ctaLabel="Discuss a Live Product"
        ctaHref="/contact?interest=live-casino#project-enquiry"
        secondaryLabel="Explore ELEMENTALS"
        secondaryHref="/portfolio/elementals"
      />
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
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
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.09),transparent_22rem),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_58%)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <SectionHeader
              eyebrow="About OpenGamer"
              title="A Product and Game Studio Built Around iGaming Delivery"
              description="OpenGamer brings game production, product thinking and engineering into one B2B delivery structure for operators, aggregators, platforms and game providers."
              headingLevel="h1"
            />
            <StudioGameSignature context="about" variant="inline" className="mt-8 max-w-2xl" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {disciplines.map((discipline, index) => (
              <div key={discipline} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-slate-300">
                <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-emerald">{String(index + 1).padStart(2, "0")}</span>
                <span>{discipline}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="premium-kicker text-xs font-semibold uppercase">What OpenGamer is</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-white sm:text-4xl">One studio across product, game and technology work.</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              OpenGamer can take responsibility for a complete casino game build or join an existing roadmap for a defined discipline, integration task or dedicated development stream.
            </p>
          </div>
          <div className="border-y border-white/10">
            {deliveryModes.map(([title, description], index) => (
              <div key={title} className="grid gap-3 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[5rem_0.7fr_1.3fr] sm:items-start">
                <span className="text-xs font-semibold tracking-[0.18em] text-emerald">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Operating principles"
              title="How the Studio Works"
              description="Delivery is organized around responsibility, technical visibility and a scope that can survive contact with an actual production environment."
            />
          </div>
          <div className="space-y-6">
            {principles.map(([title, description]) => (
              <div key={title} className="border-l border-emerald/35 pl-5">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Studio output"
            title="Work You Can Inspect"
            description="The public portfolio connects the company story to actual games, original IP and product-interface work."
          />
          <Link href="/portfolio" className="text-sm font-semibold text-emerald transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
            Explore the portfolio →
          </Link>
        </div>
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Playable games", title: "Slot Portfolio", description: "Selected OpenGamer titles with public demos where available.", image: "/assets/games/sweet-wins/artwork.webp", href: "/games", actionLabel: "Explore Games" },
              { eyebrow: "Original Live Casino IP", title: "ELEMENTALS", description: "Original show-game concept currently in development.", image: "/assets/projects/elementals/expositions/nexus-stage.webp", href: "/portfolio/elementals", actionLabel: "View Concept", accent: "#dca45f" },
              { eyebrow: "B2B product concept", title: "LC App", description: "Product-interface work exploring a social engagement layer for Live Casino.", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/portfolio/lc-app", actionLabel: "View Product", accent: "#6ccfde" }
            ]}
          />
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

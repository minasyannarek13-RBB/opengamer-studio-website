import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About | OpenGamer Studio",
  description: "OpenGamer is an iGaming development studio creating casino games, product concepts and technology support for B2B partners.",
  alternates: { canonical: "/about" }
};

const aboutSections = [
  {
    title: "What OpenGamer Is",
    description:
      "OpenGamer brings game design, mathematics, visual production, front-end and back-end engineering, integration and post-launch product support into one delivery structure."
  },
  {
    title: "What We Build",
    description:
      "Custom and branded slot titles, RGS-related engineering support and original live casino concepts, including ELEMENTALS, a premium show-game concept currently in development."
  },
  {
    title: "How We Work",
    description:
      "Engagements are structured around the required outcome — from a single title or specific production capability to a dedicated team, co-development project or longer-term technology relationship."
  },
  {
    title: "Who We Work With",
    description:
      "Operators, aggregators, platforms and game providers that need production capability, integration support, a dedicated build team or a long-term development partner."
  }
];

const workingPrinciples = [
  "Product Before Output",
  "Defined Responsibility",
  "Modular Delivery",
  "Technical Transparency",
  "Industry-Specific Execution",
  "Long-Term Maintainability"
];

export default function AboutPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.09),transparent_22rem),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_58%)]" />
        <Container>
          <SectionHeader
            eyebrow="About OpenGamer"
            title="Engineering iGaming Products, End to End"
            description="OpenGamer is an iGaming development studio creating casino games, product concepts and technology support for operators, aggregators, platforms and game providers."
            headingLevel="h1"
          />
          <StudioGameSignature context="about" variant="inline" className="mt-8 max-w-2xl" />
        </Container>
      </section>
      <Section>
        <div className="grid gap-4 lg:grid-cols-2" data-reveal-group="cards">
          {aboutSections.map((section) => (
            <Card key={section.title} className="h-full">
              <h2 className="text-balance text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{section.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader title="How OpenGamer Works" description="Delivery is structured around clear responsibility, technical transparency and maintainable product outcomes." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-group="cards">
          {workingPrinciples.map((principle) => (
            <Card key={principle} className="h-full">
              <h2 className="text-xl font-semibold text-white">{principle}</h2>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="Studio output" title="What the Studio Builds" description="OpenGamer connects slot production, live casino concepts, product interfaces and technology delivery." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Games", title: "Slot Portfolio", description: "Selected playable and review-ready OpenGamer game content.", image: "/assets/games/sweet-wins/artwork.webp", href: "/games", actionLabel: "Explore Games" },
              { eyebrow: "Live Casino", title: "ELEMENTALS", description: "Original show-game concept currently in development.", image: "/assets/projects/elementals/expositions/nexus-stage.webp", href: "/portfolio/elementals", actionLabel: "View Concept", accent: "#dca45f" },
              { eyebrow: "Technology", title: "Product Engineering", description: "Frontend, backend and integration-oriented delivery capability.", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/technology", actionLabel: "View Technology", accent: "#6ccfde" }
            ]}
          />
        </div>
      </Section>
      <CTASection
        title="Discuss a Project"
        description="Share what you want to build, integrate or scale. OpenGamer will review the requirements and propose the right engagement model."
        ctaLabel="Discuss a Project"
        ctaHref="/contact"
      />
    </SiteShell>
  );
}

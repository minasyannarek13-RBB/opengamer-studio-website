import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About | OpenGamer Studio",
  description: "OpenGamer is a full-cycle iGaming development studio creating casino games and gaming technology for B2B partners.",
  alternates: { canonical: "/about" }
};

const aboutSections = [
  {
    title: "What OpenGamer Is",
    description:
      "OpenGamer brings game design, mathematics, visual production, front-end and back-end engineering, integration and live operations into one delivery structure — a single accountable team rather than a chain of separate vendors."
  },
  {
    title: "What We Build",
    description:
      "Custom and branded slot titles, proprietary game technology and original live casino concepts — including ELEMENTALS, a premium show-game concept currently in development. A verified game portfolio is available on the Games page."
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

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.09),transparent_22rem),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_58%)]" />
        <Container>
          <SectionHeader
            eyebrow="About OpenGamer"
            title="Engineering iGaming Products, End to End"
            description="OpenGamer is a full-cycle iGaming development studio creating casino games and gaming technology for operators, aggregators, platforms and game providers."
            headingLevel="h1"
          />
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
      <CTASection
        title="Discuss a Project"
        description="Share what you want to build, integrate or scale. OpenGamer will review the requirements and propose the right engagement model."
        ctaLabel="Discuss a Project"
        ctaHref="/contact"
      />
    </SiteShell>
  );
}

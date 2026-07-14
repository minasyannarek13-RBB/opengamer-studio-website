import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { GamePortfolio } from "@/components/sections/GamePortfolio";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Games | OpenGamer Studio",
  description: "Complete confirmed OpenGamer slot game portfolio with official artwork and demo links.",
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Games | OpenGamer Studio",
    description: "Complete confirmed OpenGamer slot game portfolio with official artwork and demo links.",
    url: "/games",
    type: "website"
  }
};

export default function GamesPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.09),transparent_22rem),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_58%)]" />
        <Container>
          <SectionHeader
            eyebrow="Games"
            title="Slot Game Portfolio"
            description="The complete confirmed OpenGamer game catalogue from the public portfolio, using official artwork and demo links. Optional game metadata stays hidden until approved."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <GamePortfolio />
      </Section>
      <CTASection
        title="Build a New Title or Expand a Portfolio"
        description="OpenGamer can support custom slot development, white-label games, reskins, modernization and integration-ready production."
      />
    </SiteShell>
  );
}

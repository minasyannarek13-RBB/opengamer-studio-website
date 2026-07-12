import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { GamePortfolio } from "@/components/sections/GamePortfolio";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Games | OpenGamer Studio",
  description: "Confirmed OpenGamer slot game portfolio with official artwork and demo links.",
  alternates: { canonical: "/games" }
};

export default function GamesPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Games"
            title="Slot Game Portfolio"
            description="A focused portfolio of confirmed OpenGamer titles using official artwork. Optional game metadata stays hidden until approved."
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

import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { GamePortfolio } from "@/components/sections/GamePortfolio";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Games | OpenGamer Studio",
  description: "OpenGamer slot game catalogue with local artwork, selected public demos and series presentation.",
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Games | OpenGamer Studio",
    description: "OpenGamer slot game catalogue with selected public demos and series presentation.",
    url: "/games",
    type: "website",
    images: [{ url: "/assets/brand/opengamer-og.png", width: 1200, height: 630, alt: "OpenGamer games portfolio" }]
  }
};

export default function GamesPage() {
  return (
    <SiteShell atmosphere="games">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.09),transparent_22rem),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_58%)]" />
        <Container>
          <SectionHeader
            eyebrow="Games"
            title="OpenGamer Slot Game Catalogue"
            description="A catalogue of OpenGamer slot titles and selected series, presented with local artwork and public demo links where available."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <GamePortfolio />
      </Section>
      <Section className="bg-black/20">
        <SectionHeader eyebrow="Custom content" title="Looking for Custom Game Production?" description="Use existing portfolio work as a starting point for branded games, reskins or full-cycle game production discussions." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Portfolio reference", title: "Forest Fortune", description: "Fantasy slot production and demo-ready game presentation.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" },
              { eyebrow: "Portfolio reference", title: "Deep Dive", description: "Underwater game artwork, feature pacing and public demo access.", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive", actionLabel: "View Game", accent: "#5d9cff" },
              { eyebrow: "Custom scope", title: "Branded and Reskin Work", description: "Discuss custom content built around partner commercial goals.", image: "/assets/games/choco-boom/artwork.webp", href: "/contact?interest=portfolio", actionLabel: "Request Scope", accent: "#dca45f" }
            ]}
          />
        </div>
      </Section>
      <CTASection
        title="Request Portfolio or Discuss a Custom Game"
        description="OpenGamer can support custom slot development, white-label delivery, reskins, modernization and integration-ready production."
        ctaLabel="Discuss a Project"
        ctaHref="/contact?interest=game"
        secondaryLabel="Request Portfolio"
        secondaryHref="/contact?interest=portfolio"
      />
    </SiteShell>
  );
}

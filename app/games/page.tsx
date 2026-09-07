import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { GamePortfolio } from "@/components/sections/GamePortfolio";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Games | OpenGamer Studio",
  description: "Explore selected OpenGamer slot games, artwork and public demos where available, or discuss custom and branded game production.",
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Games | OpenGamer Studio",
    description: "Selected OpenGamer slot games with artwork, game details and public demos where available.",
    url: "/games",
    type: "website",
    images: [{ url: "/assets/brand/opengamer-og.png", width: 1200, height: 630, alt: "OpenGamer games portfolio" }]
  }
};

const portfolioHeroGames = [
  { title: "Forest Fortune", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune" },
  { title: "Deep Dive", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive" },
  { title: "Dragon Rush", image: "/assets/games/dragon-rush/artwork.webp", href: "/games/dragon-rush" }
];

export default function GamesPage() {
  return (
    <SiteShell atmosphere="games">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.11),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_62%)]" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="premium-kicker text-xs font-semibold uppercase">OpenGamer game portfolio</p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Original Slot Games You Can Explore.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Browse selected OpenGamer titles, open public demos where available, and use the portfolio as a starting point for custom, branded or distribution discussions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#game-catalogue">Explore Games</Button>
              <Button href="/contact?interest=game#project-enquiry" variant="secondary">Discuss Game Production</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
              {["Original titles", "Public demos where available", "Custom and branded production"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">{item}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Selected OpenGamer slot titles">
            {portfolioHeroGames.map((game, index) => (
              <a
                key={game.title}
                href={game.href}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-emerald/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 ${index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={game.image}
                  alt={`${game.title} slot artwork`}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 48vw, 92vw" : "(min-width: 1024px) 24vw, 46vw"}
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald">OpenGamer game</span>
                  <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">{game.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div id="game-catalogue" className="scroll-mt-28">
          <SectionHeader
            eyebrow="Game catalogue"
            title="Explore the OpenGamer Slot Portfolio"
            description="Browse selected titles, then open each game page for artwork, mechanics and confirmed demo access where available."
          />
          <div className="mt-10">
            <GamePortfolio />
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Custom game production" title="Use the Portfolio as a Starting Point" description="Need an original title, branded adaptation or reskin? Start from an existing reference and define the scope around your product and commercial goals." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Portfolio reference", title: "Forest Fortune", description: "A reference for fantasy-themed slot production and game presentation.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" },
              { eyebrow: "Portfolio reference", title: "Deep Dive", description: "A reference for themed artwork, feature pacing and public demo presentation.", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive", actionLabel: "View Game", accent: "#5d9cff" },
              { eyebrow: "Custom scope", title: "Branded and Reskin Work", description: "Discuss custom content shaped around a partner brief, brand or portfolio need.", image: "/assets/games/choco-boom/artwork.webp", href: "/contact?interest=portfolio#project-enquiry", actionLabel: "Discuss Scope", accent: "#dca45f" }
            ]}
          />
        </div>
      </Section>
      <CTASection
        title="Building a Game or Expanding a Portfolio?"
        description="Share the format, current stage and delivery scope. OpenGamer can discuss custom development, branded games, reskins and portfolio opportunities."
        ctaLabel="Discuss a Project"
        ctaHref="/contact?interest=game#project-enquiry"
        secondaryLabel="Request Portfolio"
        secondaryHref="/contact?interest=portfolio#project-enquiry"
      />
    </SiteShell>
  );
}

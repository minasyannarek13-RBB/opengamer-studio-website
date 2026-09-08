import Image from "next/image";
import Link from "next/link";
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
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.11),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_62%)]" />
        <Container className="relative grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">OpenGamer game portfolio</p>
            <h1 className="mt-5 max-w-[12ch] break-words text-balance text-[clamp(2.6rem,9vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-white lg:text-6xl">
              Original Slot Games to Explore
            </h1>
            <p className="mt-5 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              Browse selected OpenGamer titles, open public demos where available, and use the portfolio as a starting point for custom or branded production.
            </p>
            <div className="mt-7 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap sm:mt-8">
              <Button href="#game-catalogue" className="w-full min-[460px]:w-auto">Explore Games</Button>
              <Button href="/contact?interest=game#project-enquiry" variant="secondary" className="w-full min-[460px]:w-auto">Discuss Game Production</Button>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4" aria-label="Selected OpenGamer slot titles">
            {portfolioHeroGames.map((game, index) => (
              <Link
                key={game.title}
                href={game.href}
                className={`group relative min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-emerald/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 ${index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}
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
                <div className="absolute inset-x-0 bottom-0 min-w-0 p-3 sm:p-5">
                  <span className="block break-words text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-emerald sm:text-xs sm:tracking-[0.14em]">OpenGamer game</span>
                  <h2 className="mt-1 break-words text-base font-semibold text-white sm:text-xl">{game.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div id="game-catalogue" className="scroll-mt-28">
          <SectionHeader
            eyebrow="Game catalogue"
            title="Explore the Slot Portfolio"
            description="Open each game for artwork, mechanics and confirmed demo access where available."
          />
          <div className="mt-8 sm:mt-10">
            <GamePortfolio />
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Custom game production" title="Start from a Real Reference" description="Need an original title, branded adaptation or reskin? Use an existing game as a reference and define the scope around your product goals." />
        <div className="mt-8 sm:mt-10">
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  description: "Explore OpenGamer slot games, selected public demos and portfolio titles for licensing, custom production and branded-game discussions.",
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Games | OpenGamer Studio",
    description: "Explore OpenGamer slot games, selected public demos and portfolio titles.",
    url: "/games",
    type: "website",
    images: [{ url: "/assets/brand/opengamer-og.png", width: 1200, height: 630, alt: "OpenGamer games portfolio" }]
  }
};

const featuredTitles = [
  {
    title: "Forest Fortune",
    image: "/assets/games/forest-fortune/artwork.webp",
    href: "/games/forest-fortune",
    className: "lg:col-span-7 lg:row-span-2",
    description: "A selected OpenGamer slot title with public demo access."
  },
  {
    title: "Deep Dive",
    image: "/assets/games/deep-dive/artwork.webp",
    href: "/games/deep-dive",
    className: "lg:col-span-5",
    description: "Playable portfolio title with a distinct underwater visual direction."
  },
  {
    title: "Dragon Rush",
    image: "/assets/games/dragon-rush/artwork.webp",
    href: "/games/dragon-rush",
    className: "lg:col-span-5",
    description: "Playable OpenGamer slot from the current public portfolio."
  }
];

export default function GamesPage() {
  return (
    <SiteShell atmosphere="games">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black/15 py-14 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(46,230,166,0.10),transparent_26rem),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_62%)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="OpenGamer games"
              title="Playable Titles First. Full Catalogue Behind Them."
              description="Review selected OpenGamer slot titles, open public demos where available and explore the wider catalogue for licensing, branded adaptations or custom production discussions."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#catalogue">Browse Full Catalogue</Button>
              <Button href="/contact?interest=game#project-enquiry" variant="secondary">Discuss Custom Production</Button>
            </div>
            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {["Playable portfolio titles", "Public demos where available", "Custom & branded production", "Portfolio & licensing discussions"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald shadow-[0_0_14px_rgba(46,230,166,0.30)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-2" aria-label="Selected playable OpenGamer titles">
            {featuredTitles.map((game, index) => (
              <Link
                key={game.title}
                href={game.href}
                className={`group relative min-h-[220px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/40 shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 ${game.className} ${index === 0 ? "sm:min-h-[380px] lg:min-h-[470px]" : "sm:min-h-[250px]"}`}
              >
                <Image src={game.image} alt={`${game.title} slot artwork`} fill priority={index === 0} sizes={index === 0 ? "(min-width:1024px) 55vw,100vw" : "(min-width:1024px) 40vw,100vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-emerald">Playable OpenGamer title</span>
                  <h2 className={`mt-2 font-semibold text-white ${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{game.title}</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{game.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section id="catalogue">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Full catalogue" title="Explore the OpenGamer Game Portfolio" description="Search and filter the current catalogue by demo availability and game type." />
          <Button href="/contact?interest=portfolio#project-enquiry" variant="secondary">Request Portfolio</Button>
        </div>
        <GamePortfolio />
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Custom content" title="Use the Portfolio as a Starting Point" description="Existing work can frame discussions around branded games, reskins, modernization or a new full-cycle game production scope." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Portfolio reference", title: "Forest Fortune", description: "A playable portfolio reference for custom production discussions.", image: "/assets/games/forest-fortune/artwork.webp", href: "/games/forest-fortune", actionLabel: "View Game" },
              { eyebrow: "Portfolio reference", title: "Deep Dive", description: "A playable title showing a different visual and product direction.", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive", actionLabel: "View Game", accent: "#5d9cff" },
              { eyebrow: "Custom scope", title: "Branded and Reskin Work", description: "Discuss custom content shaped around partner commercial goals.", image: "/assets/games/choco-boom/artwork.webp", href: "/contact?interest=portfolio#project-enquiry", actionLabel: "Request Scope", accent: "#dca45f" }
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Request the Portfolio or Start a Custom Game"
        description="OpenGamer supports custom slot development, branded adaptations, reskins, modernization and integration-ready production."
        ctaLabel="Discuss a Project"
        ctaHref="/contact?interest=game#project-enquiry"
        secondaryLabel="Request Portfolio"
        secondaryHref="/contact?interest=portfolio#project-enquiry"
      />
    </SiteShell>
  );
}

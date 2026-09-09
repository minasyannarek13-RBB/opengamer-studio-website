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
    status: "Playable",
    description: "A selected OpenGamer slot title with verified public demo access."
  },
  {
    title: "Cake Bonanza",
    image: "/assets/games/cake-bonanza/artwork.webp",
    href: "/games/cake-bonanza",
    className: "lg:col-span-5",
    status: "Portfolio title · No public demo",
    description: "A confirmed OpenGamer portfolio title presented for product and commercial review."
  },
  {
    title: "Dragon Rush",
    image: "/assets/games/dragon-rush/artwork.webp",
    href: "/games/dragon-rush",
    className: "lg:col-span-5",
    status: "Playable",
    description: "A public OpenGamer slot reference available for direct demo evaluation."
  }
];

export default function GamesPage() {
  return (
    <SiteShell atmosphere="games">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-14 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(46,230,166,0.10),transparent_26rem),radial-gradient(circle_at_92%_72%,rgba(117,103,248,0.055),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_62%)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="OpenGamer games"
              title="Selected Titles Up Front. Full Catalogue Behind Them."
              description="Explore confirmed OpenGamer game work across playable titles and portfolio entries. Public demos are clearly marked where available; titles without a public demo remain visible as part of the portfolio."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Button href="#catalogue" className="w-full min-[480px]:w-auto">Browse Full Catalogue</Button>
              <Button href="/contact?interest=game#project-enquiry" variant="secondary" className="w-full min-[480px]:w-auto">Discuss Game Production</Button>
            </div>
            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {["Playable titles", "Portfolio titles without public demos", "Custom & branded production", "Licensing & adaptation discussions"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald shadow-[0_0_14px_rgba(46,230,166,0.30)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-2" aria-label="Selected OpenGamer game titles">
            {featuredTitles.map((game, index) => (
              <Link
                key={game.title}
                href={game.href}
                className={`group relative min-h-[220px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/40 shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 ${game.className} ${index === 0 ? "sm:min-h-[380px] lg:min-h-[470px]" : "sm:min-h-[250px]"}`}
              >
                <Image src={game.image} alt={`${game.title} slot artwork`} fill priority={index === 0} sizes={index === 0 ? "(min-width:1024px) 55vw,100vw" : "(min-width:1024px) 40vw,100vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-emerald">{game.status}</span>
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
          <SectionHeader eyebrow="Full catalogue" title="Explore the OpenGamer Game Portfolio" description="Search and filter confirmed titles by public demo availability and game type." />
          <Button href="/contact?interest=portfolio#project-enquiry" variant="secondary">Discuss Portfolio</Button>
        </div>
        <GamePortfolio />
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="From existing work to new scope" title="Use the Portfolio as a Starting Point" description="Playable and portfolio-only titles can frame discussions around branded games, reskins, modernization, licensing or a new full-cycle production scope." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Playable reference", title: "Deep Dive", description: "A public game reference available for direct evaluation.", image: "/assets/games/deep-dive/artwork.webp", href: "/games/deep-dive", actionLabel: "View Game", accent: "#5d9cff" },
              { eyebrow: "Portfolio title · No public demo", title: "Dragon Fruits", description: "A confirmed portfolio title available for product and commercial discussion.", image: "/assets/games/dragon-fruits/artwork.webp", href: "/games/dragon-fruits", actionLabel: "View Title", accent: "#dca45f" },
              { eyebrow: "Custom scope", title: "Branded and Reskin Work", description: "Discuss custom content shaped around partner product and commercial requirements.", image: "/assets/games/choco-boom/artwork.webp", href: "/contact?interest=portfolio#project-enquiry", actionLabel: "Discuss Scope", accent: "#7567f8" }
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Discuss a Portfolio Title or Start a New Game"
        description="OpenGamer supports custom slot development, branded adaptations, reskins, modernization and integration-oriented production."
        ctaLabel="Discuss a Project"
        ctaHref="/contact?interest=game#project-enquiry"
        secondaryLabel="Discuss Portfolio"
        secondaryHref="/contact?interest=portfolio#project-enquiry"
      />
    </SiteShell>
  );
}

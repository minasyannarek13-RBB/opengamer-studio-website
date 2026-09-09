import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { GamePortfolio } from "@/components/sections/GamePortfolio";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  catalogueGames,
  getGameDemoStatusLabel,
  getGameStatusLabel,
  heroProductGames,
  inDevelopmentGames,
  playableGames,
  portfolioGames
} from "@/content/games";

export const metadata: Metadata = {
  title: "Games | OpenGamer Studio",
  description: "Explore confirmed OpenGamer game titles, with verified public demos and portfolio status shown explicitly.",
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Games | OpenGamer Studio",
    description: "Explore confirmed OpenGamer game titles and verified public demos.",
    url: "/games",
    type: "website",
    images: [{ url: "/assets/brand/opengamer-og.png", width: 1200, height: 630, alt: "OpenGamer games catalogue" }]
  }
};

const featuredTitles = heroProductGames.slice(0, 3);
const portfolioHighlights = portfolioGames.slice(0, 4);
const developmentHighlights = inDevelopmentGames.slice(0, 4);

export default function GamesPage() {
  return (
    <SiteShell atmosphere="games">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-14 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(46,230,166,0.10),transparent_26rem),radial-gradient(circle_at_92%_72%,rgba(117,103,248,0.055),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_62%)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="OpenGamer game catalogue"
              title="Playable Titles and Confirmed Portfolio Work"
              description="Every title uses one public status model: Playable when a public demo is verified, Portfolio Title when the game is confirmed without a public demo, and In Development only when that status is confirmed."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Button href="#catalogue" className="w-full min-[480px]:w-auto">Browse Full Catalogue</Button>
              <Button href="/contact?interest=game#project-enquiry" variant="secondary" className="w-full min-[480px]:w-auto">Discuss a Game</Button>
            </div>
            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div><strong className="text-2xl text-white">{playableGames.length}</strong><p className="mt-1 text-sm text-slate-500">Playable</p></div>
              <div><strong className="text-2xl text-white">{portfolioGames.length}</strong><p className="mt-1 text-sm text-slate-500">Portfolio titles</p></div>
              <div><strong className="text-2xl text-white">{inDevelopmentGames.length}</strong><p className="mt-1 text-sm text-slate-500">In development</p></div>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-2" aria-label="Selected OpenGamer game titles">
            {featuredTitles.map((game, index) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className={`group relative min-h-[220px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/40 shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transform-none motion-reduce:transition-none ${index === 0 ? "lg:col-span-7 lg:row-span-2 sm:min-h-[380px] lg:min-h-[470px]" : "lg:col-span-5 sm:min-h-[250px]"}`}
              >
                <Image src={game.artwork?.catalogue || game.image} alt={`${game.title} artwork`} fill priority={index === 0} sizes={index === 0 ? "(min-width:1024px) 55vw,100vw" : "(min-width:1024px) 40vw,100vw"} className="object-cover transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-emerald">{getGameStatusLabel(game)} · {getGameDemoStatusLabel(game)}</span>
                  <h2 className={`mt-2 font-semibold text-white ${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{game.title}</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{game.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {portfolioHighlights.length ? (
        <section className="relative overflow-hidden border-b border-white/10 bg-black/20 py-10 sm:py-12">
          <Container className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald">Portfolio titles</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.015em] text-white sm:text-3xl">Confirmed catalogue work beyond public demos</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-500">These titles are part of the confirmed OpenGamer catalogue. Their public status stays separate from demo availability.</p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioHighlights.map((game) => (
                <Link key={game.slug} href={`/games/${game.slug}`} className="group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.025] p-3 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="relative aspect-[10/7] overflow-hidden rounded-[0.9rem] border border-white/[0.06] bg-black/30">
                    <Image src={game.artwork?.catalogue || game.image} alt={`${game.title} artwork`} fill sizes="(min-width:1024px) 22vw,(min-width:640px) 46vw,100vw" className="object-cover transition duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur">No Public Demo</span>
                  </div>
                  <div className="px-1 pb-1 pt-4">
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-slate-500">Portfolio Title</p>
                    <div className="mt-1.5 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                      <span aria-hidden="true" className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-emerald motion-reduce:transform-none motion-reduce:transition-none">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {developmentHighlights.length ? (
        <section className="relative overflow-hidden border-b border-white/10 py-10 sm:py-12">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(117,103,248,0.05),transparent_24rem)]" />
          <Container className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald">In development</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.015em] text-white sm:text-3xl">Game work currently in development</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-500">Development status is shown only for titles explicitly marked that way in the catalogue.</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {developmentHighlights.map((game) => (
                <Link key={game.slug} href={`/games/${game.slug}`} className="group overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.025] transition hover:border-emerald/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                  <div className="relative aspect-[10/7] overflow-hidden bg-black/30">
                    <Image src={game.artwork?.catalogue || game.image} alt={`${game.title} artwork`} fill sizes="(min-width:1024px) 22vw,(min-width:640px) 46vw,100vw" className="object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span className="text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-emerald">In Development</span>
                      <h3 className="mt-1.5 text-lg font-semibold text-white">{game.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <Section id="catalogue">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Full catalogue" title="Explore OpenGamer Games" description={`${catalogueGames.length} confirmed catalogue entries. Search by title or filter by public status.`} />
          <Button href="/contact?interest=portfolio#project-enquiry" variant="secondary">Discuss a Title</Button>
        </div>
        <GamePortfolio />
      </Section>

      <CTASection
        title="Discuss a Catalogue Title or a New Game Brief"
        description="Use a confirmed catalogue entry as the reference point, or share the scope of a new game request."
        ctaLabel="Discuss a Game"
        ctaHref="/contact?interest=game#project-enquiry"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </SiteShell>
  );
}

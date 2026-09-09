import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductHeroBackground } from "@/components/visual/ProductHeroBackground";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  catalogueGames,
  games,
  getGameDemoStatusLabel,
  getGamePrimaryActionLabel,
  getGameStatus,
  getGameStatusLabel,
  getVerifiedDemoUrl
} from "@/content/games";

type GameDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GameDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);

  if (!game) return { title: "Game Details | OpenGamer Studio" };

  return {
    title: `${game.title} | OpenGamer Studio`,
    description: game.shortDescription,
    alternates: { canonical: `/games/${game.slug}` },
    openGraph: {
      title: `${game.title} | OpenGamer Studio`,
      description: game.shortDescription,
      url: `/games/${game.slug}`,
      images: [{ url: game.artwork?.hero || game.image, width: game.imageWidth, height: game.imageHeight, alt: `${game.title} artwork` }]
    }
  };
}

export default async function GameDetailPage({ params }: GameDetailProps) {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);
  if (!game) notFound();

  const status = getGameStatus(game);
  const statusLabel = getGameStatusLabel(game);
  const availabilityLabel = getGameDemoStatusLabel(game);
  const demoUrl = getVerifiedDemoUrl(game);
  const enquiryHref = `/contact?interest=game&game=${game.slug}#project-enquiry`;
  const catalogueIndex = catalogueGames.findIndex((item) => item.slug === (game.seriesSlug || game.slug));
  const relatedAnchor = catalogueIndex >= 0 ? catalogueIndex : 0;
  const relatedGames = [
    catalogueGames[(relatedAnchor - 1 + catalogueGames.length) % catalogueGames.length],
    catalogueGames[(relatedAnchor + 1) % catalogueGames.length]
  ].filter((item) => item && item.slug !== game.slug && item.slug !== game.seriesSlug);

  const gameDetails: [string, string][] = [
    ["Status", statusLabel],
    ["Public demo", availabilityLabel],
    ...(game.lineCount ? [["Configuration", game.lineCount] as [string, string]] : []),
    ...(game.variants?.length ? [["Confirmed variants", game.variants.join(", ")] as [string, string]] : [])
  ];

  return (
    <SiteShell atmosphere="games">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <ProductHeroBackground image={game.artwork?.hero || game.image} accentPrimary={game.visualAccent || "#2ee6a6"} pattern="grid" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
              <Link href="/games" className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">Games</Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-300">{game.title}</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">OpenGamer game catalogue</p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{game.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{game.shortDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Game status">
              <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300">{statusLabel}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300">{availabilityLabel}</span>
              {game.lineCount ? <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300">{game.lineCount}</span> : null}
            </div>

            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              {demoUrl ? (
                <Button href={demoUrl} target="_blank" rel="noopener noreferrer" className="w-full min-[480px]:w-auto">Play Demo</Button>
              ) : (
                <Button href={enquiryHref} className="w-full min-[480px]:w-auto">{getGamePrimaryActionLabel(game)}</Button>
              )}
              <Button href="/games" variant="secondary" className="w-full min-[480px]:w-auto">View Game Catalogue</Button>
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-[#050609] shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:min-h-[28rem] lg:min-h-[32rem]">
            <Image src={game.artwork?.hero || game.image} alt={`${game.title} artwork`} fill priority className="object-cover" sizes="(min-width: 1024px) 54vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-emerald">{statusLabel}</p>
                <p className="mt-1 text-sm text-slate-300">Artwork from the OpenGamer game catalogue.</p>
              </div>
              <span className="shrink-0 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-semibold text-slate-300">{availabilityLabel}</span>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Game profile</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Confirmed public information</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">This page shows information supported by the current catalogue record. Product and commercial details can be expanded when they are confirmed for the relevant title.</p>
            <dl className="mt-7 border-t border-white/10">
              {gameDetails.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[0.42fr_0.58fr] gap-4 border-b border-white/10 py-4 text-sm">
                  <dt className="text-slate-500">{label}</dt>
                  <dd className="text-right text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="space-y-10">
            <div className="border-b border-white/10 pb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Catalogue record</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{game.title}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{game.longDescription || game.shortDescription}</p>
            </div>

            {game.variants?.length ? (
              <div className="border-b border-white/10 pb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Confirmed configurations</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {game.variants.map((item) => <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">{item}</span>)}
                </div>
              </div>
            ) : null}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Next action</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">{status === "playable" ? "Review the public demo or discuss the title" : status === "portfolio" ? "Discuss this portfolio title" : "Discuss the title in development"}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">Public demos are linked only where verified. Commercial, technical and delivery scope can then be defined around the relevant discussion.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {demoUrl ? <Button href={demoUrl} target="_blank" rel="noopener noreferrer">Play Demo</Button> : null}
                <Button href={enquiryHref} variant={demoUrl ? "secondary" : "primary"}>{demoUrl ? "Discuss This Title" : getGamePrimaryActionLabel(game)}</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">More from the catalogue</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Explore related titles</h2>
          </div>
          <Button href="/games" variant="link">View All Games</Button>
        </div>
        <nav className="mt-8 grid gap-5 md:grid-cols-2" aria-label="Related games">
          {relatedGames.map((item) => (
            <Link key={item.slug} href={`/games/${item.slug}`} className="group grid min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-white/[0.035] transition hover:-translate-y-0.5 hover:border-emerald/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transform-none motion-reduce:transition-none sm:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-48 sm:min-h-full">
                <Image src={item.artwork?.hero || item.image} alt={`${item.title} artwork`} fill className="object-cover transition duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" sizes="(min-width: 768px) 20vw, 100vw" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-emerald">{getGameStatusLabel(item)}</span>
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-slate-500">{getGameDemoStatusLabel(item)}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.shortDescription}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-emerald transition group-hover:text-white">View Title</span>
              </div>
            </Link>
          ))}
        </nav>
      </Section>

      <CTASection title="Interested in This Title or a New Game Brief?" description="Use the catalogue as a reference point, then share the confirmed scope you want OpenGamer to discuss." ctaLabel="Discuss a Project" ctaHref={enquiryHref} secondaryLabel="View Games" secondaryHref="/games" />
    </SiteShell>
  );
}

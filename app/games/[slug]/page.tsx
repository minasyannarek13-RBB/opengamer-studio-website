import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductHeroBackground } from "@/components/visual/ProductHeroBackground";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { games, getGameCommercialStatusLabel, getVerifiedDemoUrl } from "@/content/games";

type GameDetailProps = { params: Promise<{ slug: string }> };

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

  const demoUrl = getVerifiedDemoUrl(game);
  const commercialStatus = getGameCommercialStatusLabel(game);
  const gameIndex = games.findIndex((item) => item.slug === game.slug);
  const relatedGames = [games[(gameIndex - 1 + games.length) % games.length], games[(gameIndex + 1) % games.length]];
  const gameDetails = [
    ["Game type", game.gameType || "Slot Game"],
    game.keyMechanic ? ["Primary mechanic", game.keyMechanic] : null,
    commercialStatus ? ["Commercial status", commercialStatus] : null,
    ["Demo", demoUrl ? "Public demo available" : "Available on request"],
    game.configurationLabel || game.lineCount ? ["Configuration", game.configurationLabel || game.lineCount] : null,
    game.variants?.length ? ["Configurations", game.variants.join(", ")] : null,
    game.supportedDevices?.length ? ["Devices", game.supportedDevices.join(", ")] : null
  ].filter(Boolean) as [string, string][];

  return (
    <SiteShell atmosphere="games">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <ProductHeroBackground image={game.artwork?.hero || game.image} accentPrimary={game.visualAccent || "#2ee6a6"} pattern={game.slug === "deep-dive" ? "particles" : game.slug === "forest-fortune" ? "mist" : game.slug === "dragon-rush" ? "rays" : "grid"} />
        <Container className="relative grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10">
          <div className="min-w-0 max-w-2xl">
            <nav className="mb-6 flex min-w-0 flex-wrap items-center gap-2 text-sm text-slate-500 sm:mb-7" aria-label="Breadcrumb">
              <Button href="/games" variant="link" className="text-slate-400">Games</Button><span aria-hidden="true">/</span><span className="min-w-0 break-words text-slate-300">{game.title}</span>
            </nav>
            <p className="break-words text-xs font-semibold uppercase tracking-[0.16em] text-emerald">OpenGamer game</p>
            <h1 className="mt-4 max-w-[12ch] break-words text-balance text-[clamp(2.9rem,10vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-white">{game.title}</h1>
            <p className="mt-5 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">{game.shortDescription}</p>
            <div className="mt-7 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap sm:mt-8">
              {demoUrl ? <Button href={demoUrl} target="_blank" rel="noopener noreferrer" className="w-full min-[460px]:w-auto">Play Demo</Button> : <Button href={`/contact?interest=game&game=${game.slug}#project-enquiry`} className="w-full min-[460px]:w-auto">Request Demo</Button>}
              <Button href={`/contact?interest=game&game=${game.slug}#project-enquiry`} variant="secondary" className="w-full min-[460px]:w-auto">Discuss This Game</Button>
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-black/40 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.34)]">
            <div className="relative aspect-[10/7] overflow-hidden rounded-[var(--radius-card)]">
              <Image src={game.artwork?.hero || game.image} alt={`${game.title} artwork`} width={game.imageWidth} height={game.imageHeight} priority className="h-full w-full object-cover" sizes="(min-width:1024px) 54vw,100vw" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[0.42fr_minmax(0,1fr)]">
          <Card tone="strong" className="h-fit min-w-0">
            <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-emerald">Game details</p>
            <dl className="mt-4 grid gap-3 text-sm">
              {gameDetails.map(([label, value]) => (
                <div key={label} className="grid min-w-0 grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 border-t border-white/10 pt-3">
                  <dt className="break-words text-slate-500">{label}</dt><dd className="break-words text-right text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <div className="min-w-0">
            <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-emerald">Game proposition</p>
            <h2 className="mt-3 max-w-[18ch] break-words text-balance text-[clamp(2rem,6vw,2.75rem)] font-semibold leading-[1.08] text-white">What Defines {game.title}</h2>
            <p className="mt-4 max-w-3xl break-words text-base leading-7 text-slate-300 sm:mt-5">{game.longDescription || game.shortDescription}</p>
            {(game.mechanics || []).length ? <div className="mt-6 flex flex-wrap gap-2">{(game.mechanics || []).map((item) => <span key={item} className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm leading-5 text-slate-300">{item}</span>)}</div> : null}
            {(game.features || []).length ? <div className="mt-7 grid min-w-0 gap-3 sm:mt-8 sm:grid-cols-2">{(game.features || []).map((item) => <div key={item} className="min-w-0 break-words rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300"><span className="mr-3 text-emerald">•</span>{item}</div>)}</div> : null}
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.7fr_minmax(0,1.3fr)] lg:items-start">
          <div className="min-w-0 max-w-xl">
            <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-emerald">Commercial path</p>
            <h2 className="mt-3 break-words text-balance text-[clamp(2rem,6vw,2.75rem)] font-semibold leading-[1.08] text-white">Explore the Game, Then Define the Commercial Path</h2>
            <p className="mt-4 break-words text-base leading-7 text-slate-300 sm:mt-5">Demo access is shown where available. Commercial model, configuration and integration can then be discussed for the specific partner context.</p>
          </div>
          <nav className="grid min-w-0 gap-4 sm:grid-cols-2" aria-label="Related games">
            {relatedGames.map((item) => (
              <Link key={item.slug} href={`/games/${item.slug}`} className="group min-w-0 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40"><Image src={item.artwork?.hero || item.image} alt={`${item.title} artwork`} width={item.imageWidth} height={item.imageHeight} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" sizes="(min-width:1024px) 28vw,50vw" /></div>
                <div className="min-w-0 p-4"><p className="break-words text-xs font-semibold uppercase tracking-[0.12em] text-emerald">Related game</p><h3 className="mt-2 break-words text-xl font-semibold text-white">{item.title}</h3><p className="mt-2 break-words text-sm leading-6 text-slate-400">{item.shortDescription}</p></div>
              </Link>
            ))}
          </nav>
        </div>
      </Section>

      <CTASection title="Interested in This Game or a Custom Direction?" description="Share the target market, platform, theme or integration context. OpenGamer can review the right commercial and production path." ctaLabel="Discuss This Game" ctaHref={`/contact?interest=game&game=${game.slug}#project-enquiry`} secondaryLabel="Request Portfolio" secondaryHref="/contact?interest=portfolio#project-enquiry" />
    </SiteShell>
  );
}

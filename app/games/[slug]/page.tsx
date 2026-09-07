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
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-14 sm:py-20 lg:py-24">
        <ProductHeroBackground image={game.artwork?.hero || game.image} accentPrimary={game.visualAccent || "#2ee6a6"} pattern={game.slug === "deep-dive" ? "particles" : game.slug === "forest-fortune" ? "mist" : game.slug === "dragon-rush" ? "rays" : "grid"} />
        <Container className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="max-w-3xl">
            <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
              <Button href="/games" variant="link" className="text-slate-400">Games</Button><span aria-hidden="true">/</span><span className="text-slate-300">{game.title}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">OpenGamer game</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">{game.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{game.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {demoUrl ? <Button href={demoUrl} target="_blank" rel="noopener noreferrer">Play Demo</Button> : <Button href={`/contact?interest=game&game=${game.slug}#project-enquiry`}>Request Demo</Button>}
              <Button href={`/contact?interest=game&game=${game.slug}#project-enquiry`} variant="secondary">Discuss This Game</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.34)]">
            <div className="relative aspect-[10/7] overflow-hidden rounded-[1.15rem]">
              <Image src={game.artwork?.hero || game.image} alt={`${game.title} artwork`} width={game.imageWidth} height={game.imageHeight} priority className="h-full w-full object-cover" sizes="(min-width:1024px) 54vw,100vw" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
          <Card tone="strong" className="h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">Game details</p>
            <dl className="mt-4 grid gap-3 text-sm">
              {gameDetails.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-t border-white/10 pt-3">
                  <dt className="text-slate-500">{label}</dt><dd className="max-w-[62%] text-right text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">Game proposition</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">What makes {game.title} worth opening.</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">{game.longDescription || game.shortDescription}</p>
            {(game.mechanics || []).length ? <div className="mt-6 flex flex-wrap gap-2">{(game.mechanics || []).map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300">{item}</span>)}</div> : null}
            {(game.features || []).length ? <div className="mt-8 grid gap-3 sm:grid-cols-2">{(game.features || []).map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300"><span className="mr-3 text-emerald">•</span>{item}</div>)}</div> : null}
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">Commercial path</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold text-white">Review the game first. Discuss the model second.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">Demo access is shown where confirmed. Commercial availability, configuration, integration and release requirements can then be discussed against the specific partner context.</p>
          </div>
          <nav className="grid gap-4 sm:grid-cols-2" aria-label="Related games">
            {relatedGames.map((item) => (
              <Link key={item.slug} href={`/games/${item.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40"><Image src={item.artwork?.hero || item.image} alt={`${item.title} artwork`} width={item.imageWidth} height={item.imageHeight} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" sizes="(min-width:1024px) 28vw,50vw" /></div>
                <div className="p-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald">Related game</p><h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.shortDescription}</p></div>
              </Link>
            ))}
          </nav>
        </div>
      </Section>

      <CTASection title="Interested in this game or a custom direction?" description="Share the target market, platform, theme or integration context. OpenGamer can review the right commercial and production path." ctaLabel="Discuss This Game" ctaHref={`/contact?interest=game&game=${game.slug}#project-enquiry`} secondaryLabel="Request Portfolio" secondaryHref="/contact?interest=portfolio#project-enquiry" />
    </SiteShell>
  );
}

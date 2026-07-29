import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { games, getGameCommercialStatusLabel, getVerifiedDemoUrl } from "@/content/games";

type GameDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GameDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);

  if (!game) {
    return { title: "Game Details | OpenGamer Studio" };
  }

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

  if (!game) {
    notFound();
  }

  const demoUrl = getVerifiedDemoUrl(game);
  const commercialStatus = getGameCommercialStatusLabel(game);
  const gameIndex = games.findIndex((item) => item.slug === game.slug);
  const relatedGames = [games[(gameIndex - 1 + games.length) % games.length], games[(gameIndex + 1) % games.length]];
  const gameDetails = [
    ["Game type", game.gameType || "Slot Game"],
    ["Primary mechanic", game.keyMechanic],
    commercialStatus ? ["Commercial status", commercialStatus] : null,
    ["Demo status", demoUrl ? "Public demo available" : "Request demo"],
    game.configurationLabel || game.lineCount ? ["Configuration", game.configurationLabel || game.lineCount] : null,
    game.variants?.length ? ["Available configurations", game.variants.join(", ")] : null,
    game.supportedDevices?.length ? ["Supported devices", game.supportedDevices.join(", ")] : null
  ].filter(Boolean) as [string, string][];

  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
              <Button href="/games" variant="link" className="text-slate-400">
                Games
              </Button>
              <span aria-hidden="true">/</span>
              <span className="text-slate-300">{game.title}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">Game Portfolio</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">{game.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{game.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {demoUrl ? (
                <Button href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Play Demo
                </Button>
              ) : (
                <Button href={`/contact?interest=game&game=${game.slug}`}>Request Demo</Button>
              )}
              <Button href="/contact" variant="secondary">
                Discuss a Project
              </Button>
            </div>
          </div>
          <div className="premium-card image-frame aspect-[10/7] overflow-hidden rounded-3xl border border-line bg-white/[0.045] shadow-[0_22px_80px_rgba(0,0,0,0.26)]">
            <Image
              src={game.artwork?.hero || game.image}
              alt={`${game.title} artwork`}
              width={game.imageWidth}
              height={game.imageHeight}
              priority
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr]">
          <Card>
            <h2 className="text-xl font-semibold text-white">Verified specifications</h2>
            <dl className="mt-5 grid gap-3 text-sm">
              {gameDetails.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-t border-white/10 pt-3">
                  <dt className="text-slate-500">{label}</dt>
                  <dd className="max-w-[62%] text-right text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-white">Game proposition</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{game.longDescription || game.shortDescription}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(game.mechanics || []).map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-white">Feature direction</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
              {(game.features || []).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-white">Availability and integration</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Public demos are linked where verified. RTP, volatility, certification details, integration scope and commercial availability are shared only when confirmed for a qualified business discussion.
            </p>
          </Card>
        </div>

        <nav className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Related games">
          {relatedGames.map((item) => (
            <Card key={item.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Related Game</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.shortDescription}</p>
              <Button href={`/games/${item.slug}`} variant="link" className="mt-5">
                View Game
              </Button>
            </Card>
          ))}
        </nav>
      </Section>

      <CTASection
        title="Interested in This Game or a Custom Version?"
        description="Share the target theme, mechanics, platform and integration context. OpenGamer will propose the right production model."
        ctaLabel="Discuss a Project"
        secondaryLabel="Request Portfolio"
        secondaryHref="/contact?interest=portfolio"
      />
    </SiteShell>
  );
}

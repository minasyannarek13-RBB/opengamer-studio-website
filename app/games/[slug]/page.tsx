import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { games } from "@/content/games";

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
      images: [{ url: game.image, width: game.imageWidth, height: game.imageHeight, alt: `${game.title} artwork` }]
    }
  };
}

export default async function GameDetailPage({ params }: GameDetailProps) {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);

  if (!game) {
    notFound();
  }

  const confirmedFacts = [
    ["Title", game.title],
    ["Category", game.category?.join(", ") || "Slot Game"]
  ];
  const gameIndex = games.findIndex((item) => item.slug === game.slug);
  const previousGame = games[(gameIndex - 1 + games.length) % games.length];
  const nextGame = games[(gameIndex + 1) % games.length];

  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">Game Portfolio</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">{game.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{game.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {game.demoUrl ? (
                <Button href={game.demoUrl} target="_blank" rel="noreferrer">
                  Play Demo
                </Button>
              ) : null}
              <Button href="/contact" variant="secondary">
                Discuss Similar Game
              </Button>
            </div>
          </div>
          <div className="premium-card overflow-hidden rounded-lg border border-line bg-white/[0.045] shadow-[0_22px_80px_rgba(0,0,0,0.26)]">
            <Image
              src={game.image}
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
            <h2 className="text-xl font-semibold text-white">Confirmed Information</h2>
            <dl className="mt-5 grid gap-3 text-sm">
              {confirmedFacts.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-t border-white/10 pt-3">
                  <dt className="text-slate-500">{label}</dt>
                  <dd className="text-right text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-white">Additional Metadata</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              RTP, volatility, release status, format, mechanics and certification details are intentionally omitted
              until approved game-level information is available.
            </p>
          </Card>
        </div>
        <nav className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Game navigation">
          {[previousGame, nextGame].map((item) => (
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
        title="Build a Game with Similar Production Quality"
        description="Share the target theme, mechanics, platform and integration context. OpenGamer will propose the right production model."
      />
    </SiteShell>
  );
}

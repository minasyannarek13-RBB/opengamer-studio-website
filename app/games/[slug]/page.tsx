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

  if (!game) notFound();

  const demoUrl = getVerifiedDemoUrl(game);
  const commercialStatus = getGameCommercialStatusLabel(game);
  const gameEnquiryHref = `/contact?interest=game&game=${game.slug}#project-enquiry`;
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

  const proofLabels = [
    commercialStatus || "Portfolio title",
    demoUrl ? "Playable" : "Demo on request",
    game.gameType || "Slot Game",
    game.keyMechanic || null
  ].filter(Boolean) as string[];

  return (
    <SiteShell atmosphere="games">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <ProductHeroBackground
          image={game.artwork?.hero || game.image}
          accentPrimary={game.visualAccent || "#2ee6a6"}
          pattern={game.slug === "deep-dive" ? "particles" : game.slug === "forest-fortune" ? "mist" : game.slug === "dragon-rush" ? "rays" : "grid"}
        />
        <Container className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
              <Link href="/games" className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">Games</Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-300">{game.title}</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">OpenGamer game portfolio</p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{game.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{game.shortDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Game status">
              {proofLabels.map((label) => (
                <span key={label} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300">{label}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              {demoUrl ? (
                <Button href={demoUrl} target="_blank" rel="noopener noreferrer" className="w-full min-[480px]:w-auto">Play Demo</Button>
              ) : (
                <Button href={gameEnquiryHref} className="w-full min-[480px]:w-auto">Request Demo</Button>
              )}
              <Button href={gameEnquiryHref} variant="secondary" className="w-full min-[480px]:w-auto">Discuss This Game</Button>
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-[#050609] shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:min-h-[28rem] lg:min-h-[32rem]">
            <Image
              src={game.artwork?.hero || game.image}
              alt={`${game.title} artwork`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-emerald">Portfolio title</p>
                <p className="mt-1 text-sm text-slate-300">Artwork shown from the OpenGamer game portfolio.</p>
              </div>
              {demoUrl ? <span className="shrink-0 rounded-full border border-emerald/30 bg-black/45 px-3 py-1.5 text-xs font-semibold text-emerald">Playable</span> : null}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Verified game profile</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">What is confirmed for this title</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">Only portfolio information currently supported by the game record is shown here. Commercial terms, certification details and integration scope stay out until confirmed.</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Product proposition</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The game in one view</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{game.longDescription || game.shortDescription}</p>
              {(game.mechanics || []).length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {(game.mechanics || []).map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">{item}</span>
                  ))}
                </div>
              ) : null}
            </div>

            {(game.features || []).length ? (
              <div className="border-b border-white/10 pb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Feature direction</p>
                <div className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {(game.features || []).map((item, index) => (
                    <div key={item} className="flex gap-4 border-t border-white/10 pt-4">
                      <span className="text-xs font-semibold text-emerald">0{index + 1}</span>
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Commercial and integration context</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Discuss the version that fits your product</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">Public demos are linked where verified. RTP, volatility, certification details, integration scope and commercial availability are shared only when confirmed for a qualified business discussion.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={gameEnquiryHref}>Discuss This Game</Button>
                <Button href="/services#game-production" variant="secondary">Game Production Services</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">More from the portfolio</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Explore related titles</h2>
          </div>
          <Button href="/games" variant="link">View All Games</Button>
        </div>
        <nav className="mt-8 grid gap-5 md:grid-cols-2" aria-label="Related games">
          {relatedGames.map((item) => {
            const relatedDemo = getVerifiedDemoUrl(item);
            return (
              <Link key={item.slug} href={`/games/${item.slug}`} className="group grid min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-white/[0.035] transition hover:-translate-y-0.5 hover:border-emerald/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:grid-cols-[0.42fr_0.58fr]">
                <div className="relative min-h-48 sm:min-h-full">
                  <Image src={item.artwork?.hero || item.image} alt={`${item.title} artwork`} fill className="object-cover transition duration-500 group-hover:scale-[1.025]" sizes="(min-width: 768px) 20vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-emerald">Portfolio title</span>
                    {relatedDemo ? <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Playable</span> : null}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.shortDescription}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-emerald transition group-hover:text-white">View Game</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </Section>

      <CTASection
        title="Interested in This Game or a Custom Version?"
        description="Share the target theme, mechanics, platform and integration context. OpenGamer will propose the right production model."
        ctaLabel="Discuss a Project"
        ctaHref={gameEnquiryHref}
        secondaryLabel="Request Portfolio"
        secondaryHref="/contact?interest=portfolio#project-enquiry"
      />
    </SiteShell>
  );
}

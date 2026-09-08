import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { getGameCommercialStatusLabel, getVerifiedDemoUrl, type Game } from "@/content/games";
import { getOptimizedGameArtwork } from "@/lib/gameAssets";

export function GameCard({ game }: { game: Game }) {
  const commercialStatus = getGameCommercialStatusLabel(game);
  const demoUrl = getVerifiedDemoUrl(game);
  const primaryCategory = game.category?.[0];
  const artwork = getOptimizedGameArtwork(game);

  return (
    <article className="premium-card game-card group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_18px_60px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:bg-white/[0.05] hover:shadow-[0_24px_76px_rgba(0,0,0,0.26)] focus-within:-translate-y-0.5 focus-within:border-emerald/45" style={{ "--game-accent": game.visualAccent || "#2ee6a6" } as CSSProperties}>
      <Link href={`/games/${game.slug}`} className="image-frame relative aspect-[10/7] overflow-hidden bg-black/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald/70">
        <Image src={artwork} alt={`${game.title} artwork`} width={game.imageWidth} height={game.imageHeight} sizes="(min-width:1280px) 300px,(min-width:768px) 50vw,100vw" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] group-focus-within:scale-[1.025]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4">
          {primaryCategory ? <span className="max-w-full break-words rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">{primaryCategory}</span> : <span />}
          {demoUrl ? <span className="shrink-0 rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald backdrop-blur">Demo</span> : null}
        </div>
      </Link>
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="grid min-w-0 gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-4">
          <h3 className="min-w-0 break-words text-xl font-semibold text-white sm:text-2xl">{game.title}</h3>
          {commercialStatus ? <span className="max-w-full break-words text-xs leading-5 text-slate-500 sm:max-w-44 sm:text-right">{commercialStatus}</span> : null}
        </div>
        <p className="mt-3 break-words text-sm leading-6 text-slate-400">{game.shortDescription}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {demoUrl ? <Button href={demoUrl} className="min-h-10 px-4" target="_blank" rel="noopener noreferrer">Play Demo</Button> : <Button href={`/contact?interest=game&game=${game.slug}#project-enquiry`} variant="secondary" className="min-h-10 px-4">Request Demo</Button>}
          <Button href={`/games/${game.slug}`} variant="link" aria-label={`View details for ${game.title}`}>View Game</Button>
        </div>
      </div>
    </article>
  );
}

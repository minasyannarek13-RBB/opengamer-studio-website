import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import {
  getGameDemoStatusLabel,
  getGameEnquiryHref,
  getGamePrimaryActionLabel,
  getGameStatus,
  getGameStatusLabel,
  getVerifiedDemoUrl,
  type Game
} from "@/content/games";
import { getOptimizedGameArtwork } from "@/lib/gameAssets";

export function GameCard({ game }: { game: Game }) {
  const status = getGameStatus(game);
  const statusLabel = getGameStatusLabel(game);
  const availabilityLabel = getGameDemoStatusLabel(game);
  const demoUrl = getVerifiedDemoUrl(game);
  const primaryCategory = game.category?.[0];
  const artwork = getOptimizedGameArtwork(game);
  const detailHref = `/games/${game.slug}`;
  const enquiryHref = getGameEnquiryHref(game);
  const statusClass =
    status === "playable"
      ? "border border-emerald/25 bg-emerald/10 text-emerald"
      : status === "in-development"
        ? "border border-amber-300/20 bg-amber-300/[0.08] text-amber-200"
        : "border border-white/15 bg-black/55 text-slate-300";

  return (
    <article
      className="premium-card game-card group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_18px_60px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:bg-white/[0.05] hover:shadow-[0_24px_76px_rgba(0,0,0,0.26)] focus-within:-translate-y-0.5 focus-within:border-emerald/45 motion-reduce:transform-none motion-reduce:transition-none"
      style={{ "--game-accent": game.visualAccent || "#2ee6a6" } as CSSProperties}
    >
      <Link
        href={detailHref}
        aria-label={`View ${game.title}`}
        className="image-frame relative aspect-[10/7] overflow-hidden bg-black/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald/70"
      >
        <Image
          src={artwork}
          alt={`${game.title} artwork`}
          width={game.imageWidth}
          height={game.imageHeight}
          sizes="(min-width:1280px) 300px,(min-width:768px) 50vw,100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] group-focus-within:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4">
          <div className="flex flex-wrap gap-2">
            {primaryCategory ? (
              <span className="max-w-full break-words rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {primaryCategory}
              </span>
            ) : null}
            {game.lineCount ? (
              <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                {game.lineCount}
              </span>
            ) : null}
          </div>
          <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${statusClass}`}>{statusLabel}</span>
        </div>
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="min-w-0">
          <h3 className="min-w-0 break-words text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl">
            <Link href={detailHref} className="rounded-sm transition hover:text-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transition-none">
              {game.title}
            </Link>
          </h3>
          <p className="mt-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-slate-500">{availabilityLabel}</p>
        </div>

        <p className="mt-3 break-words text-sm leading-6 text-slate-400">{game.shortDescription}</p>

        <div className="mt-auto grid gap-3 pt-6 sm:flex sm:flex-wrap sm:items-center">
          {demoUrl ? (
            <Button href={demoUrl} className="min-h-11 w-full px-4 sm:w-auto" target="_blank" rel="noopener noreferrer">
              {getGamePrimaryActionLabel(game)} <span aria-hidden="true">↗</span>
            </Button>
          ) : (
            <Button
              href={enquiryHref}
              variant="secondary"
              className="min-h-11 w-full px-4 sm:w-auto"
            >
              {getGamePrimaryActionLabel(game)}
            </Button>
          )}
          <Button
            href={detailHref}
            variant="link"
            className="justify-self-start"
            aria-label={`View details for ${game.title}`}
          >
            View Title
          </Button>
        </div>
      </div>
    </article>
  );
}

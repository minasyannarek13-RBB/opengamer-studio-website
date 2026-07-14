import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Game } from "@/content/games";

export function GameCard({ game }: { game: Game }) {
  const metadata = [
    game.format ? ["Format", game.format] : null,
    game.rtp ? ["RTP", game.rtp] : null,
    game.volatility ? ["Volatility", game.volatility] : null
  ].filter(Boolean) as [string, string][];

  return (
    <article className="premium-card group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:bg-white/[0.058] focus-within:-translate-y-0.5 focus-within:border-emerald/50">
      <div className="image-frame relative aspect-[10/7] overflow-hidden bg-black/45">
        <Image
          src={game.image}
          alt={`${game.title} artwork`}
          width={game.imageWidth}
          height={game.imageHeight}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.018] group-focus-within:scale-[1.018]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/82 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          {game.category?.map((category) => (
            <span key={category} className="premium-status rounded-full px-3 py-1 text-xs">
              {category}
            </span>
          ))}
          {game.status ? (
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{game.status}</span>
          ) : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">{game.title}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{game.shortDescription}</p>
        {metadata.length ? (
          <dl className="mt-4 grid gap-2 text-sm">
            {metadata.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-t border-white/10 pt-2">
                <dt className="text-slate-500">{label}</dt>
                <dd className="text-slate-200">{value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          {game.demoUrl ? (
            <Button href={game.demoUrl} variant="secondary" className="min-h-10 px-4" target="_blank" rel="noreferrer">
              Play Demo
            </Button>
          ) : null}
          <Button href={`/games/${game.slug}`} variant="link" aria-label={`View details for ${game.title}`}>
            Details
          </Button>
        </div>
      </div>
    </article>
  );
}

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
    <article className="group overflow-hidden rounded-lg border border-line bg-white/[0.04] transition-colors hover:border-white/20 focus-within:border-emerald/50">
      <div className="relative aspect-[10/7] overflow-hidden bg-black/40">
        <Image
          src={game.image}
          alt={`${game.title} artwork`}
          width={game.imageWidth}
          height={game.imageHeight}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/65 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          {game.category?.map((category) => (
            <span key={category} className="rounded-full border border-emerald/30 px-3 py-1 text-xs text-emerald">
              {category}
            </span>
          ))}
          {game.status ? (
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{game.status}</span>
          ) : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{game.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{game.shortDescription}</p>
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
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {game.demoUrl ? (
            <Button href={game.demoUrl} variant="secondary" className="min-h-10 px-4" target="_blank" rel="noreferrer">
              Play Demo
            </Button>
          ) : null}
          <Button href={`/games/${game.slug}`} variant="link">
            Details
          </Button>
        </div>
      </div>
    </article>
  );
}

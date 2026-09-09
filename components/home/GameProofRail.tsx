import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const games = [
  { title: "Forest Fortune", slug: "forest-fortune", image: "/assets/games/forest-fortune/artwork.webp", status: "Playable" },
  { title: "Deep Dive", slug: "deep-dive", image: "/assets/games/deep-dive/artwork.webp", status: "Playable" },
  { title: "Dragon Rush", slug: "dragon-rush", image: "/assets/games/dragon-rush/artwork.webp", status: "Playable" },
  { title: "Sweet Wins", slug: "sweet-wins", image: "/assets/games/sweet-wins/artwork.webp", status: "Playable" },
  { title: "Fruit Elixir", slug: "fruit-elixir", image: "/assets/games/fruit-elixir/artwork.webp", status: "Playable" },
  { title: "Cake Bonanza", slug: "cake-bonanza", image: "/assets/games/cake-bonanza/artwork.webp", status: "Portfolio" }
];

export function GameProofRail() {
  return (
    <section className="border-b border-white/10 bg-[#05070a] py-5 sm:py-6" aria-label="Selected OpenGamer game portfolio">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex shrink-0 items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_14px_rgba(46,230,166,0.35)]" />
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-500">Selected OpenGamer titles</p>
              <p className="mt-0.5 text-xs text-slate-400">Real portfolio work · status shown per title</p>
            </div>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:justify-end">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.025] p-2 transition duration-200 hover:border-emerald/25 hover:bg-white/[0.045] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/40">
                  <Image src={game.image} alt="" fill sizes="40px" className="object-cover transition duration-300 group-hover:scale-[1.04]" />
                </div>
                <div className="min-w-0">
                  <strong className="block truncate text-[0.72rem] font-semibold text-slate-200 group-hover:text-white">{game.title}</strong>
                  <span className="mt-0.5 block text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-emerald/80">{game.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { games, getVerifiedDemoUrl } from "@/content/games";

export type StudioGameSignatureVariant = "compact" | "inline" | "footer-strip" | "related-game" | "visual-cameo";

type SignatureContext = "home" | "services" | "liveCasino" | "technology" | "about" | "contact" | "portfolio" | "elementals" | "lcApp";

const pageGameReferences: Record<SignatureContext, { slug: string; label: string; action: string }> = {
  home: { slug: "forest-fortune", label: "From the OpenGamer game portfolio", action: "Explore Forest Fortune" },
  services: { slug: "choco-boom", label: "Original game production", action: "Explore the game" },
  liveCasino: { slug: "dragon-rush", label: "One studio across games and live concepts", action: "View OpenGamer Games" },
  technology: { slug: "deep-dive", label: "Technology around game production", action: "Explore Deep Dive" },
  about: { slug: "sweet-wins", label: "From the OpenGamer game portfolio", action: "Explore the portfolio" },
  contact: { slug: "forest-fortune", label: "OpenGamer game reference", action: "View OpenGamer Games" },
  portfolio: { slug: "deep-dive", label: "OpenGamer game portfolio", action: "View the game" },
  elementals: { slug: "forest-fortune", label: "Part of the broader OpenGamer portfolio", action: "Explore Our Games" },
  lcApp: { slug: "sweet-wins", label: "A separate direction alongside OpenGamer games", action: "Explore Games" }
};

const variantClasses: Record<StudioGameSignatureVariant, string> = {
  compact: "grid-cols-[4.75rem_minmax(0,1fr)] sm:grid-cols-[5.25rem_minmax(0,1fr)_auto]",
  inline: "grid-cols-[5.25rem_minmax(0,1fr)] sm:grid-cols-[5.75rem_minmax(0,1fr)_auto]",
  "footer-strip": "grid-cols-[4.5rem_minmax(0,1fr)] sm:grid-cols-[5rem_minmax(0,1fr)_auto]",
  "related-game": "grid-cols-[5.5rem_minmax(0,1fr)] sm:grid-cols-[6rem_minmax(0,1fr)_auto]",
  "visual-cameo": "grid-cols-[5.75rem_minmax(0,1fr)] sm:grid-cols-[6.5rem_minmax(0,1fr)_auto]"
};

export function StudioGameSignature({
  context,
  variant = "compact",
  className = ""
}: {
  context: SignatureContext;
  variant?: StudioGameSignatureVariant;
  className?: string;
}) {
  const reference = pageGameReferences[context];
  const game = games.find((item) => item.slug === reference.slug);
  const href = context === "elementals" || context === "lcApp" || context === "contact" || context === "about" || !game ? "/games" : `/games/${game.slug}`;
  const demoHref = game ? getVerifiedDemoUrl(game) : null;

  return (
    <aside
      className={`grid items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-3.5 shadow-[0_18px_56px_rgba(0,0,0,0.18)] ${variantClasses[variant]} ${className}`}
      aria-label="OpenGamer game portfolio reference"
    >
      {game ? (
        <Link href={`/games/${game.slug}`} className="group relative aspect-[10/7] overflow-hidden rounded-xl border border-white/[0.08] bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
          <Image
            src={game.image}
            alt={`${game.title} artwork`}
            fill
            sizes="104px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </Link>
      ) : null}

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-emerald">{reference.label}</p>
          {game ? (
            <span className="rounded-full border border-white/10 bg-black/25 px-2 py-0.5 text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
              {demoHref ? "Playable" : "Portfolio title"}
            </span>
          ) : null}
        </div>
        <Link
          href={href}
          className="mt-1.5 block w-fit text-sm font-semibold text-white transition hover:text-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
        >
          {game ? reference.action : "Explore OpenGamer Games"} →
        </Link>
      </div>

      {demoHref ? (
        <Link
          href={demoHref}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 inline-flex min-h-9 items-center justify-center rounded-full border border-emerald/25 bg-emerald/[0.08] px-3 text-xs font-semibold text-emerald transition hover:border-emerald/45 hover:bg-emerald/[0.12] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:col-span-1"
        >
          Play Demo
        </Link>
      ) : null}
    </aside>
  );
}

export { pageGameReferences };

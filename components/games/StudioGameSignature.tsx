import Image from "next/image";
import Link from "next/link";
import { games, getVerifiedDemoUrl } from "@/content/games";
import { getOptimizedGameArtwork } from "@/lib/gameAssets";

export type StudioGameSignatureVariant = "compact" | "inline" | "footer-strip" | "related-game" | "visual-cameo";

type SignatureContext = "home" | "services" | "liveCasino" | "technology" | "about" | "contact" | "portfolio" | "elementals" | "lcApp";

const pageGameReferences: Record<SignatureContext, { slug: string; label: string; action: string }> = {
  home: { slug: "forest-fortune", label: "From the OpenGamer game portfolio", action: "Explore Forest Fortune" },
  services: { slug: "choco-boom", label: "Original game production", action: "Explore the game" },
  liveCasino: { slug: "dragon-rush", label: "One studio across games and live concepts", action: "View OpenGamer Games" },
  technology: { slug: "deep-dive", label: "Technology behind the experience", action: "Explore Deep Dive" },
  about: { slug: "sweet-wins", label: "Games created by the studio", action: "Explore the portfolio" },
  contact: { slug: "forest-fortune", label: "Before starting a project, explore what the studio creates", action: "View OpenGamer Games" },
  portfolio: { slug: "deep-dive", label: "OpenGamer game portfolio", action: "View the game" },
  elementals: { slug: "forest-fortune", label: "ELEMENTALS is part of a broader OpenGamer product portfolio", action: "Explore Our Games" },
  lcApp: { slug: "sweet-wins", label: "LC App is one product direction from the studio behind the OpenGamer game portfolio", action: "Explore Games" }
};

export function StudioGameSignature({ context, variant = "compact", className = "" }: { context: SignatureContext; variant?: StudioGameSignatureVariant; className?: string }) {
  const reference = pageGameReferences[context];
  const game = games.find((item) => item.slug === reference.slug);
  const href = context === "elementals" || context === "lcApp" || context === "contact" || context === "about" || !game ? "/games" : `/games/${game.slug}`;
  const demoHref = game ? getVerifiedDemoUrl(game) : null;

  return (
    <aside className={`studio-game-signature studio-game-signature--${variant} ${className}`} aria-label="OpenGamer game portfolio reference">
      {game ? (
        <div className="studio-game-signature__image">
          <Image src={getOptimizedGameArtwork(game)} alt={`${game.title} artwork`} width={game.imageWidth} height={game.imageHeight} sizes="96px" className="h-full w-full object-contain p-1.5" />
        </div>
      ) : null}
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">{reference.label}</p>
        <Link href={href} className="mt-1 block text-sm font-semibold text-white transition hover:text-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
          {game ? reference.action : "Explore OpenGamer Games"}
        </Link>
      </div>
      {demoHref ? (
        <Link href={demoHref} target="_blank" rel="noopener noreferrer" className="studio-game-signature__demo">
          Play Demo
        </Link>
      ) : null}
    </aside>
  );
}

export { pageGameReferences };
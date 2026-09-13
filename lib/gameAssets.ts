import type { Game } from "@/content/games";

/**
 * Game artwork is owned by the canonical catalogue record.
 * Add or replace artwork in `content/games.ts`; catalogue cards and detail pages
 * consume the same record without maintaining a second slug-to-asset map.
 */
export function getOptimizedGameArtwork(game: Game) {
  return game.artwork?.catalogue || game.image;
}

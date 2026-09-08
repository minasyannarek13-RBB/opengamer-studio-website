import type { Game } from "@/content/games";

const optimizedGameArtwork: Record<string, string> = {
  "choco-boom": "/assets/games/choco-boom/artwork.webp",
  "deep-dive": "/assets/games/deep-dive/artwork.webp",
  "dragon-rush": "/assets/games/dragon-rush/artwork.webp",
  "forest-fortune": "/assets/games/forest-fortune/artwork.webp",
  "fruit-elixir": "/assets/games/fruit-elixir/artwork.webp",
  "passion-paradise": "/assets/games/passion-paradise/artwork.webp",
  "sweet-wins": "/assets/games/sweet-wins/artwork.webp"
};

export function getOptimizedGameArtwork(game: Game) {
  return optimizedGameArtwork[game.slug] || game.artwork?.catalogue || game.image;
}

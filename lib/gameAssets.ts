import type { Game } from "@/content/games";

const optimizedGameArtwork: Record<string, string> = {
  "cake-bonanza": "/assets/games/cake-bonanza/artwork.webp",
  "choco-boom": "/assets/games/choco-boom/artwork.webp",
  "deep-dive": "/assets/games/deep-dive/artwork.webp",
  "dragon-fruits": "/assets/games/dragon-fruits/artwork.webp",
  "dragon-rush": "/assets/games/dragon-rush/artwork.webp",
  "forest-fortune": "/assets/games/forest-fortune/artwork.webp",
  "fruit-elixir": "/assets/games/fruit-elixir/artwork.webp",
  "goblin-gems": "/assets/games/goblin-gems/artwork.webp",
  "passion-paradise": "/assets/games/passion-paradise/artwork.webp",
  "royal-fruits": "/assets/games/royal-fruits/artwork.webp",
  "sweet-wins": "/assets/games/sweet-wins/artwork.webp"
};

export function getOptimizedGameArtwork(game: Game) {
  return optimizedGameArtwork[game.slug] || game.artwork?.catalogue || game.image;
}

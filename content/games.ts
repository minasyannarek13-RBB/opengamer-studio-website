export type GameStatus = "playable" | "portfolio" | "in-development";

export type Game = {
  title: string;
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  shortDescription: string;
  longDescription?: string;
  status: GameStatus;
  demoUrl?: string;
  sourceUrl?: string;
  category?: string[];
  lineCount?: string;
  variants?: string[];
  seriesSlug?: string;
  isVariant?: boolean;
  visualAccent?: string;
  artwork?: {
    catalogue: string;
    hero: string;
    thumbnail: string;
    screenshots: string[];
  };
};

const officialGamesBaseUrl = "https://open-gamer.com/games/view?code=";

export function getVerifiedDemoUrl(game: Game) {
  if (game.status !== "playable" || !game.demoUrl) return null;

  try {
    const url = new URL(game.demoUrl);
    return url.protocol === "https:" && url.hostname === "open-gamer.com" && url.pathname === "/games/view" && url.searchParams.has("code")
      ? game.demoUrl
      : null;
  } catch {
    return null;
  }
}

export function hasVerifiedDemo(game: Game) {
  return Boolean(getVerifiedDemoUrl(game));
}

export function getGameStatus(game: Game): GameStatus {
  if (game.status === "playable" && !hasVerifiedDemo(game)) return "portfolio";
  return game.status;
}

export function getGameStatusLabel(game: Game) {
  switch (getGameStatus(game)) {
    case "playable":
      return "Playable";
    case "in-development":
      return "In Development";
    default:
      return "Portfolio Title";
  }
}

export function getGameCommercialStatusLabel(game: Game) {
  return getGameStatusLabel(game);
}

export function getGameDemoStatusLabel(game: Game) {
  const status = getGameStatus(game);
  if (status === "playable") return "Public Demo Available";
  if (status === "portfolio") return "No Public Demo";
  return "In Development";
}

export function getGamePrimaryActionLabel(game: Game) {
  const status = getGameStatus(game);
  if (status === "playable") return "Play Demo";
  if (status === "portfolio") return "Discuss This Title";
  return "Discuss Development";
}

function artwork(image: string): Game["artwork"] {
  return { catalogue: image, hero: image, thumbnail: image, screenshots: [] };
}

const rawGames: Game[] = [
  {
    title: "Cake Bonanza",
    slug: "cake-bonanza",
    image: "/assets/games/cake-bonanza/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A dessert-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "portfolio"
  },
  {
    title: "Deep Dive",
    slug: "deep-dive",
    image: "/assets/games/deep-dive/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "An underwater-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "playable",
    demoUrl: `${officialGamesBaseUrl}deep-dive`,
    sourceUrl: `${officialGamesBaseUrl}deep-dive`,
    visualAccent: "#5d9cff"
  },
  {
    title: "Dragon Fruits",
    slug: "dragon-fruits",
    image: "/assets/games/dragon-fruits/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A dragon-and-fruit themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "portfolio"
  },
  {
    title: "Dragon Rush",
    slug: "dragon-rush",
    image: "/assets/games/dragon-rush/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A dragon-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "playable",
    demoUrl: `${officialGamesBaseUrl}dragon-rush`,
    sourceUrl: `${officialGamesBaseUrl}dragon-rush`,
    visualAccent: "#dca45f"
  },
  {
    title: "Forest Fortune",
    slug: "forest-fortune",
    image: "/assets/games/forest-fortune/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fantasy forest-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "playable",
    demoUrl: `${officialGamesBaseUrl}forest-fortune`,
    sourceUrl: `${officialGamesBaseUrl}forest-fortune`,
    visualAccent: "#2ee6a6"
  },
  {
    title: "Fruit Elixir 40L",
    slug: "fruit-elixir-40l",
    image: "/assets/games/fruit-elixir-40l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot configuration with 40 paylines.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "40 Lines",
    seriesSlug: "fruit-elixir",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-40`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-40`
  },
  {
    title: "Fruit Elixir 20L",
    slug: "fruit-elixir-20l",
    image: "/assets/games/fruit-elixir-20l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot configuration with 20 paylines.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "20 Lines",
    seriesSlug: "fruit-elixir",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-20`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-20`
  },
  {
    title: "Fruit Elixir 10L",
    slug: "fruit-elixir-10l",
    image: "/assets/games/fruit-elixir-10l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot configuration with 10 paylines.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "10 Lines",
    seriesSlug: "fruit-elixir",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-10`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-10`
  },
  {
    title: "Fruit Elixir",
    slug: "fruit-elixir",
    image: "/assets/games/fruit-elixir/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot family with confirmed 5, 10, 20 and 40-payline configurations.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "5 Lines",
    variants: ["5 paylines", "10 paylines", "20 paylines", "40 paylines"],
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-5`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-5`
  },
  {
    title: "Goblin Gems",
    slug: "goblin-gems",
    image: "/assets/games/goblin-gems/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fantasy gem-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "portfolio"
  },
  {
    title: "Passion Paradise 40L",
    slug: "passion-paradise-40l",
    image: "/assets/games/passion-paradise-40l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot configuration with 40 paylines.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "40 Lines",
    seriesSlug: "passion-paradise",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}passion-paradise-40`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-40`
  },
  {
    title: "Passion Paradise 20L",
    slug: "passion-paradise-20l",
    image: "/assets/games/passion-paradise-20l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot configuration with 20 paylines.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "20 Lines",
    seriesSlug: "passion-paradise",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}passion-paradise-20`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-20`
  },
  {
    title: "Passion Paradise 10L",
    slug: "passion-paradise-10l",
    image: "/assets/games/passion-paradise-10l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot configuration with 10 paylines.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "10 Lines",
    seriesSlug: "passion-paradise",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}passion-paradise-10`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-10`
  },
  {
    title: "Passion Paradise",
    slug: "passion-paradise",
    image: "/assets/games/passion-paradise/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot family with confirmed 5, 10, 20 and 40-payline configurations.",
    category: ["Slot Game"],
    status: "playable",
    lineCount: "5 Lines",
    variants: ["5 paylines", "10 paylines", "20 paylines", "40 paylines"],
    demoUrl: `${officialGamesBaseUrl}passion-paradise-5`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-5`
  },
  {
    title: "Royal Fruits",
    slug: "royal-fruits",
    image: "/assets/games/royal-fruits/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A royal fruit-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "portfolio"
  },
  {
    title: "Sweet Wins",
    slug: "sweet-wins",
    image: "/assets/games/sweet-wins/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A candy-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "playable",
    demoUrl: `${officialGamesBaseUrl}sweet-wins`,
    sourceUrl: `${officialGamesBaseUrl}sweet-wins`,
    visualAccent: "#7567f8"
  },
  {
    title: "The Aztecs",
    slug: "the-aztecs",
    image: "/assets/games/the-aztecs/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "An ancient-temple themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "playable",
    demoUrl: `${officialGamesBaseUrl}aztecs`,
    sourceUrl: `${officialGamesBaseUrl}aztecs`
  },
  {
    title: "Choco Boom",
    slug: "choco-boom",
    image: "/assets/games/choco-boom/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A confectionery-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "playable",
    demoUrl: `${officialGamesBaseUrl}choco-boom`,
    sourceUrl: `${officialGamesBaseUrl}choco-boom`
  },
  {
    title: "Rich or Dead",
    slug: "rich-or-dead",
    image: "/assets/games/rich-or-dead/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A western-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "playable",
    demoUrl: `${officialGamesBaseUrl}rich-or-dead`,
    sourceUrl: `${officialGamesBaseUrl}rich-or-dead`
  }
];

export const games: Game[] = rawGames.map((game) => ({
  ...game,
  artwork: game.artwork || artwork(game.image)
}));

export const catalogueGames = games.filter((game) => !game.isVariant);
export const playableGames = catalogueGames.filter((game) => getGameStatus(game) === "playable");
export const portfolioGames = catalogueGames.filter((game) => getGameStatus(game) === "portfolio");
export const inDevelopmentGames = catalogueGames.filter((game) => getGameStatus(game) === "in-development");

export const featuredGameSlugs = [
  "deep-dive",
  "dragon-rush",
  "forest-fortune",
  "sweet-wins",
  "the-aztecs",
  "choco-boom",
  "rich-or-dead",
  "fruit-elixir"
];

export const featuredGames = featuredGameSlugs.map((slug) => games.find((game) => game.slug === slug)).filter(Boolean) as Game[];

export const heroProductGameSlugs = ["deep-dive", "dragon-rush", "sweet-wins", "choco-boom"];
export const heroProductGames = heroProductGameSlugs.map((slug) => games.find((game) => game.slug === slug)).filter(Boolean) as Game[];

export type Game = {
  title: string;
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  shortDescription: string;
  category?: string[];
  commercialStatus?: "portfolio" | "commercial-discussion" | "in-development" | "concept";
  demoStatus?: "verified" | "unavailable";
  demoUrl?: string;
  sourceUrl?: string;
  format?: string;
  rtp?: string;
  volatility?: string;
  variants?: string[];
  lineCount?: string;
  seriesSlug?: string;
  isVariant?: boolean;
};

const officialGamesBaseUrl = "https://open-gamer.com/games/view?code=";

export function getGameCommercialStatusLabel(game: Game) {
  switch (game.commercialStatus) {
    case "portfolio":
      return "Portfolio Title";
    case "commercial-discussion":
      return "Available for Commercial Discussion";
    case "in-development":
      return "In Development";
    case "concept":
      return "Concept";
    default:
      return null;
  }
}

export function getGameDemoStatusLabel(game: Game) {
  return hasVerifiedDemo(game) ? "Demo Available" : null;
}

export function hasVerifiedDemo(game: Game) {
  return game.demoStatus === "verified" && Boolean(getVerifiedDemoUrl(game));
}

export function getVerifiedDemoUrl(game: Game) {
  if (!game.demoUrl) {
    return null;
  }

  try {
    const url = new URL(game.demoUrl);
    return url.protocol === "https:" && url.hostname === "open-gamer.com" && url.pathname === "/games/view" && url.searchParams.has("code")
      ? game.demoUrl
      : null;
  } catch {
    return null;
  }
}

export const games: Game[] = [
  {
    title: "Cake Bonanza",
    slug: "cake-bonanza",
    image: "/assets/games/cake-bonanza/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A dessert-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "unavailable"
  },
  {
    title: "Deep Dive",
    slug: "deep-dive",
    image: "/assets/games/deep-dive/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Explore the ocean depths in Deep Dive, where sticky wilds and treasure chests unlock big wins.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
    demoUrl: `${officialGamesBaseUrl}deep-dive`,
    sourceUrl: `${officialGamesBaseUrl}deep-dive`
  },
  {
    title: "Dragon Fruits",
    slug: "dragon-fruits",
    image: "/assets/games/dragon-fruits/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A dragon-and-fruit themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "unavailable"
  },
  {
    title: "Dragon Rush",
    slug: "dragon-rush",
    image: "/assets/games/dragon-rush/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A dragon-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
    demoUrl: `${officialGamesBaseUrl}dragon-rush`,
    sourceUrl: `${officialGamesBaseUrl}dragon-rush`
  },
  {
    title: "Forest Fortune",
    slug: "forest-fortune",
    image: "/assets/games/forest-fortune/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Enter a magical realm in Forest Fortune, where mystical scrolls unlock free spins and enchanted wins.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
    demoUrl: `${officialGamesBaseUrl}forest-fortune`,
    sourceUrl: `${officialGamesBaseUrl}forest-fortune`
  },
  {
    title: "Fruit Elixir 40L",
    slug: "fruit-elixir-40l",
    image: "/assets/games/fruit-elixir-40l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Packed with punchy multipliers and buy bonus thrills, this 40-payline fruit slot delivers big.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
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
    shortDescription: "Spin your way to flavorful wins with 20 paylines, buyable bonuses, and juicy multipliers.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
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
    shortDescription: "A vibrant fruit slot with 10 paylines, rewarding multipliers, and instant bonus access.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
    lineCount: "10 Lines",
    seriesSlug: "fruit-elixir",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-10`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-10`
  },
  {
    title: "Fruit Elixir",
    slug: "fruit-elixir",
    image: "/assets/games/fruit-elixir/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Classic fruit visuals meet explosive multipliers and bonus buys on 5 paylines.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
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
    commercialStatus: "portfolio",
    demoStatus: "unavailable"
  },
  {
    title: "Passion Paradise 40L",
    slug: "passion-paradise-40l",
    image: "/assets/games/passion-paradise-40l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Experience a fruit slot frenzy with 40 paylines of juicy, fast-paced spins.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
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
    shortDescription: "Bright fruits and 20 paylines deliver nonstop excitement in this classic slot.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
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
    shortDescription: "Savor the fruity thrills with 10 paylines of retro-style spinning fun and classic charm.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
    lineCount: "10 Lines",
    seriesSlug: "passion-paradise",
    isVariant: true,
    demoUrl: `${officialGamesBaseUrl}passion-paradise-10`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-10`
  },
  {
    title: "Passion Paradise",
    slug: "passion-paradise",
    image: "/assets/games/passion-paradise/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A timeless fruit slot with 5 paylines for quick and classic reel action.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
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
    commercialStatus: "portfolio",
    demoStatus: "unavailable"
  },
  {
    title: "Sweet Wins",
    slug: "sweet-wins",
    image: "/assets/games/sweet-wins/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A candy-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
    demoUrl: `${officialGamesBaseUrl}sweet-wins`,
    sourceUrl: `${officialGamesBaseUrl}sweet-wins`
  },
  {
    title: "The Aztecs",
    slug: "the-aztecs",
    image: "/assets/games/the-aztecs/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "An ancient-temple themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
    demoUrl: `${officialGamesBaseUrl}aztecs`,
    sourceUrl: `${officialGamesBaseUrl}aztecs`
  },
  {
    title: "Choco Boom",
    slug: "choco-boom",
    image: "/assets/games/choco-boom/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A confectionery slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    commercialStatus: "portfolio",
    demoStatus: "verified",
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
    commercialStatus: "portfolio",
    demoStatus: "verified",
    demoUrl: `${officialGamesBaseUrl}rich-or-dead`,
    sourceUrl: `${officialGamesBaseUrl}rich-or-dead`
  }
];

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

export const featuredGames = featuredGameSlugs
  .map((slug) => games.find((game) => game.slug === slug))
  .filter(Boolean) as Game[];

export const heroProductGameSlugs = ["deep-dive", "dragon-rush", "sweet-wins", "choco-boom"];

export const heroProductGames = heroProductGameSlugs
  .map((slug) => games.find((game) => game.slug === slug))
  .filter(Boolean) as Game[];

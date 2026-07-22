export type Game = {
  title: string;
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  shortDescription: string;
  category?: string[];
  status?: "In Development" | "Roadmap" | "Demo Available" | "Available for Commercial Discussion";
  demoUrl?: string;
  sourceUrl?: string;
  format?: string;
  rtp?: string;
  volatility?: string;
  variants?: string[];
  seriesSlug?: string;
  isVariant?: boolean;
};

const officialGamesBaseUrl = "https://open-gamer.com/games/view?code=";

export const games: Game[] = [
  {
    title: "Cake Bonanza",
    slug: "cake-bonanza",
    image: "/assets/games/cake-bonanza/artwork.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    shortDescription: "A dessert-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"]
  },
  {
    title: "Deep Dive",
    slug: "deep-dive",
    image: "/assets/games/deep-dive/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Explore the ocean depths in Deep Dive, where sticky wilds and treasure chests unlock big wins.",
    category: ["Slot Game"],
    status: "Demo Available",
    demoUrl: `${officialGamesBaseUrl}deep-dive`,
    sourceUrl: `${officialGamesBaseUrl}deep-dive`
  },
  {
    title: "Dragon Fruits",
    slug: "dragon-fruits",
    image: "/assets/games/dragon-fruits/artwork.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    shortDescription: "A dragon-and-fruit themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"]
  },
  {
    title: "Dragon Rush",
    slug: "dragon-rush",
    image: "/assets/games/dragon-rush/artwork.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    shortDescription: "A dragon-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "Demo Available",
    demoUrl: `${officialGamesBaseUrl}dragon-rush`,
    sourceUrl: `${officialGamesBaseUrl}dragon-rush`
  },
  {
    title: "Forest Fortune",
    slug: "forest-fortune",
    image: "/assets/games/forest-fortune/artwork.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    shortDescription: "Enter a magical realm in Forest Fortune, where mystical scrolls unlock free spins and enchanted wins.",
    category: ["Slot Game"],
    status: "Demo Available",
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
    status: "Demo Available",
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
    status: "Demo Available",
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
    status: "Demo Available",
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
    status: "Demo Available",
    variants: ["5 paylines", "10 paylines", "20 paylines", "40 paylines"],
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-5`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-5`
  },
  {
    title: "Goblin Gems",
    slug: "goblin-gems",
    image: "/assets/games/goblin-gems/artwork.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    shortDescription: "A fantasy gem-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"]
  },
  {
    title: "Passion Paradise 40L",
    slug: "passion-paradise-40l",
    image: "/assets/games/passion-paradise-40l/artwork.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Experience a fruit slot frenzy with 40 paylines of juicy, fast-paced spins.",
    category: ["Slot Game"],
    status: "Demo Available",
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
    status: "Demo Available",
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
    status: "Demo Available",
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
    status: "Demo Available",
    variants: ["5 paylines", "10 paylines", "20 paylines", "40 paylines"],
    demoUrl: `${officialGamesBaseUrl}passion-paradise-5`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-5`
  },
  {
    title: "Royal Fruits",
    slug: "royal-fruits",
    image: "/assets/games/royal-fruits/artwork.jpg",
    imageWidth: 1920,
    imageHeight: 1080,
    shortDescription: "A royal fruit-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"]
  },
  {
    title: "Sweet Wins",
    slug: "sweet-wins",
    image: "/assets/games/sweet-wins/artwork.jpg",
    imageWidth: 768,
    imageHeight: 431,
    shortDescription: "A candy-themed slot title from the OpenGamer catalogue.",
    category: ["Slot Game"],
    status: "Demo Available",
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
    status: "Demo Available",
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
    status: "Demo Available",
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
    status: "Demo Available",
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

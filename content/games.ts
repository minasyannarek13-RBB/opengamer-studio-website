export type Game = {
  title: string;
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  shortDescription: string;
  category?: string[];
  status?: "In Development" | "Roadmap";
  demoUrl?: string;
  sourceUrl?: string;
  format?: string;
  rtp?: string;
  volatility?: string;
};

const officialGamesBaseUrl = "https://open-gamer.com/games/view?code=";

export const games: Game[] = [
  {
    title: "The Aztecs",
    slug: "the-aztecs",
    image: "/assets/games/the-aztecs/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A confirmed OpenGamer slot title with official artwork and public demo access.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}aztecs`,
    sourceUrl: `${officialGamesBaseUrl}aztecs`
  },
  {
    title: "Sweet Wins",
    slug: "sweet-wins",
    image: "/assets/games/sweet-wins/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A candy-themed slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}sweet-wins`,
    sourceUrl: `${officialGamesBaseUrl}sweet-wins`
  },
  {
    title: "Dragon Rush",
    slug: "dragon-rush",
    image: "/assets/games/dragon-rush/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A dragon-themed slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}dragon-rush`,
    sourceUrl: `${officialGamesBaseUrl}dragon-rush`
  },
  {
    title: "Forest Fortune",
    slug: "forest-fortune",
    image: "/assets/games/forest-fortune/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Enter a magical realm in Forest Fortune, where mystical scrolls unlock free spins and enchanted wins.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}forest-fortune`,
    sourceUrl: `${officialGamesBaseUrl}forest-fortune`
  },
  {
    title: "Rich or Dead",
    slug: "rich-or-dead",
    image: "/assets/games/rich-or-dead/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A confirmed OpenGamer slot title with official artwork and public demo access.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}rich-or-dead`,
    sourceUrl: `${officialGamesBaseUrl}rich-or-dead`
  },
  {
    title: "Choco Boom",
    slug: "choco-boom",
    image: "/assets/games/choco-boom/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A confectionery slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}choco-boom`,
    sourceUrl: `${officialGamesBaseUrl}choco-boom`
  },
  {
    title: "Deep Dive",
    slug: "deep-dive",
    image: "/assets/games/deep-dive/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Explore the ocean depths in Deep Dive, where sticky wilds and treasure chests unlock big wins.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}deep-dive`,
    sourceUrl: `${officialGamesBaseUrl}deep-dive`
  },
  {
    title: "Fruit Elixir 40L",
    slug: "fruit-elixir-40l",
    image: "/assets/games/fruit-elixir-40l/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Packed with punchy multipliers and buy bonus thrills, this 40-payline fruit slot delivers big.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-40`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-40`
  },
  {
    title: "Fruit Elixir 20L",
    slug: "fruit-elixir-20l",
    image: "/assets/games/fruit-elixir-20l/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Spin your way to flavorful wins with 20 paylines, buyable bonuses, and juicy multipliers.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-20`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-20`
  },
  {
    title: "Fruit Elixir 10L",
    slug: "fruit-elixir-10l",
    image: "/assets/games/fruit-elixir-10l/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A vibrant fruit slot with 10 paylines, rewarding multipliers, and instant bonus access.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-10`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-10`
  },
  {
    title: "Fruit Elixir",
    slug: "fruit-elixir",
    image: "/assets/games/fruit-elixir/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Classic fruit visuals meet explosive multipliers and bonus buys on 5 paylines.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}fruit-elixir-5`,
    sourceUrl: `${officialGamesBaseUrl}fruit-elixir-5`
  },
  {
    title: "Passion Paradise 40L",
    slug: "passion-paradise-40l",
    image: "/assets/games/passion-paradise-40l/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Experience a fruit slot frenzy with 40 paylines of juicy, fast-paced spins.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}passion-paradise-40`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-40`
  },
  {
    title: "Passion Paradise 20L",
    slug: "passion-paradise-20l",
    image: "/assets/games/passion-paradise-20l/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Bright fruits and 20 paylines deliver nonstop excitement in this classic slot.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}passion-paradise-20`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-20`
  },
  {
    title: "Passion Paradise 10L",
    slug: "passion-paradise-10l",
    image: "/assets/games/passion-paradise-10l/source.jpg",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "Savor the fruity thrills with 10 paylines of retro-style spinning fun and classic charm.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}passion-paradise-10`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-10`
  },
  {
    title: "Passion Paradise",
    slug: "passion-paradise",
    image: "/assets/games/passion-paradise/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A timeless fruit slot with 5 paylines for quick and classic reel action.",
    category: ["Slot Game"],
    demoUrl: `${officialGamesBaseUrl}passion-paradise-5`,
    sourceUrl: `${officialGamesBaseUrl}passion-paradise-5`
  }
];

export const featuredGameSlugs = [
  "forest-fortune",
  "sweet-wins",
  "dragon-rush",
  "deep-dive",
  "choco-boom",
  "fruit-elixir",
  "passion-paradise",
  "the-aztecs"
];

export const featuredGames = featuredGameSlugs
  .map((slug) => games.find((game) => game.slug === slug))
  .filter(Boolean) as Game[];

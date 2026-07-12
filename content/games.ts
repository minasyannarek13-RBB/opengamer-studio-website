export type Game = {
  title: string;
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  shortDescription: string;
  category?: string[];
  status?: "Live" | "In Development" | "Roadmap";
  demoUrl?: string;
  format?: string;
  rtp?: string;
  volatility?: string;
};

export const games: Game[] = [
  {
    title: "Forest Fortune",
    slug: "forest-fortune",
    image: "/assets/games/forest-fortune/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A nature-themed slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: "https://open-gamer.com/games/view?code=forest-fortune"
  },
  {
    title: "Sweet Wins",
    slug: "sweet-wins",
    image: "/assets/games/sweet-wins/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A candy-themed slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: "https://open-gamer.com/games/view?code=sweet-wins"
  },
  {
    title: "Deep Dive",
    slug: "deep-dive",
    image: "/assets/games/deep-dive/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "An underwater slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: "https://open-gamer.com/games/view?code=deep-dive"
  },
  {
    title: "Choco Boom",
    slug: "choco-boom",
    image: "/assets/games/choco-boom/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A confectionery slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: "https://open-gamer.com/games/view?code=choco-boom"
  },
  {
    title: "Fruit Elixir",
    slug: "fruit-elixir",
    image: "/assets/games/fruit-elixir/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A fruit-themed slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: "https://open-gamer.com/games/view?code=fruit-elixir-5"
  },
  {
    title: "Passion Paradise",
    slug: "passion-paradise",
    image: "/assets/games/passion-paradise/artwork.webp",
    imageWidth: 600,
    imageHeight: 420,
    shortDescription: "A tropical slot title from the confirmed OpenGamer portfolio.",
    category: ["Slot Game"],
    demoUrl: "https://open-gamer.com/games/view?code=passion-paradise-5"
  }
];

export const gameCategories = ["All", "Slot Game"];

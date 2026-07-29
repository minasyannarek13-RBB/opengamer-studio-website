export type Game = {
  title: string;
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  shortDescription: string;
  longDescription?: string;
  gameType?: "Classic Slot" | "Video Slot" | "Branded or Custom" | "Portfolio Slot";
  status?: "demo" | "portfolio" | "coming-soon" | "request-access";
  keyMechanic?: string;
  mechanics?: string[];
  features?: string[];
  supportedDevices?: string[];
  artwork?: {
    catalogue: string;
    hero: string;
    thumbnail: string;
    screenshots: string[];
  };
  category?: string[];
  commercialStatus?: "portfolio" | "commercial-discussion" | "in-development" | "concept";
  demoStatus?: "verified" | "unavailable";
  demoUrl?: string;
  sourceUrl?: string;
  format?: string;
  rtp?: string;
  volatility?: string;
  variants?: string[];
  configurationLabel?: string;
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

const rawGames: Game[] = [
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

const defaultDevices = ["Desktop", "Mobile", "Tablet"];

const gameContentOverrides: Record<string, Partial<Game>> = {
  "cake-bonanza": {
    gameType: "Video Slot",
    keyMechanic: "Dessert bonus features",
    shortDescription: "A bright dessert slot built around sweet-shop symbols, bonus anticipation and accessible session pacing.",
    longDescription: "Cake Bonanza presents a confectionery slot world for portfolio discussions where the theme, visual treatment and bonus feature direction can be evaluated before a custom production scope is agreed.",
    mechanics: ["Bonus-led play", "Confectionery theme", "Mobile-ready slot UX"],
    features: ["Dessert symbols", "Bonus feature presentation", "Portfolio artwork"],
    status: "request-access"
  },
  "deep-dive": {
    gameType: "Video Slot",
    keyMechanic: "Sticky wilds and treasure features",
    longDescription: "Deep Dive is an underwater slot experience where treasure discovery, sticky wild moments and deep-sea visual pacing create a clear theme for demo evaluation.",
    mechanics: ["Sticky wilds", "Treasure feature", "Underwater exploration"],
    features: ["Public demo", "Ocean world", "Bonus-focused presentation"],
    status: "demo"
  },
  "dragon-fruits": {
    gameType: "Video Slot",
    keyMechanic: "Fruit slot with dragon fantasy styling",
    shortDescription: "A dragon-fruit slot concept combining classic fruit readability with fantasy artwork and portfolio-ready visual direction.",
    longDescription: "Dragon Fruits uses familiar fruit-slot clarity with a fantasy dragon wrapper, making it suitable for discussions around reskins, custom variants and portfolio expansion.",
    mechanics: ["Fruit symbols", "Fantasy theme", "Classic reel readability"],
    features: ["Portfolio artwork", "Mobile-ready layout", "Customisation candidate"],
    status: "request-access"
  },
  "dragon-rush": {
    gameType: "Video Slot",
    keyMechanic: "Dragon-led bonus pacing",
    shortDescription: "A dragon-themed slot with high-contrast fantasy artwork, fast demo access and bonus-led commercial positioning.",
    longDescription: "Dragon Rush gives partners a demo-ready fantasy slot reference for evaluating artwork tone, game pacing and potential custom development routes.",
    mechanics: ["Dragon theme", "Bonus-led play", "Fantasy slot pacing"],
    features: ["Public demo", "Portfolio title", "Custom version discussion"],
    status: "demo"
  },
  "forest-fortune": {
    gameType: "Video Slot",
    keyMechanic: "Scroll-triggered free spins",
    longDescription: "Forest Fortune is a fantasy forest slot where mystical symbols, scroll-led feature anticipation and free-spin moments support a clear adventure flow.",
    mechanics: ["Free spins", "Mystical scrolls", "Fantasy exploration"],
    features: ["Public demo", "Forest world", "Feature-led pacing"],
    status: "demo"
  },
  "fruit-elixir": {
    gameType: "Classic Slot",
    keyMechanic: "Selectable payline configurations",
    configurationLabel: "4 Payline Configurations",
    shortDescription: "A classic fruit slot family available in 5, 10, 20 and 40-payline configurations for different portfolio needs.",
    longDescription: "Fruit Elixir is presented as a configurable fruit-slot family. Partners can evaluate the 5-line build and related 10, 20 and 40-payline variants as separate production configurations.",
    mechanics: ["Fruit symbols", "Bonus buy", "Configurable paylines"],
    features: ["Public demo", "5/10/20/40-line variants", "Classic slot readability"],
    status: "demo"
  },
  "goblin-gems": {
    gameType: "Video Slot",
    keyMechanic: "Fantasy gem collection",
    shortDescription: "A fantasy gem slot concept using goblin-world character direction and jewel collection cues for portfolio review.",
    longDescription: "Goblin Gems is positioned for portfolio and custom-scope conversations where character styling, gem symbols and fantasy UX can be adapted around partner needs.",
    mechanics: ["Gem collection cues", "Fantasy theme", "Character-led artwork"],
    features: ["Portfolio artwork", "Request demo state", "Customisation candidate"],
    status: "request-access"
  },
  "passion-paradise": {
    gameType: "Classic Slot",
    keyMechanic: "Selectable payline configurations",
    configurationLabel: "4 Payline Configurations",
    shortDescription: "A classic fruit slot family available in 5, 10, 20 and 40-payline configurations with fast, readable reel action.",
    longDescription: "Passion Paradise is presented as a configurable classic slot family. The 5-line version and related 10, 20 and 40-payline variants support different portfolio and market preferences.",
    mechanics: ["Fruit symbols", "Configurable paylines", "Classic reel pacing"],
    features: ["Public demo", "5/10/20/40-line variants", "Classic slot readability"],
    status: "demo"
  },
  "royal-fruits": {
    gameType: "Classic Slot",
    keyMechanic: "Royal fruit presentation",
    shortDescription: "A royal-themed fruit slot concept designed around familiar symbols, premium framing and portfolio-ready artwork.",
    longDescription: "Royal Fruits brings a more formal visual layer to classic fruit-slot readability, making it suitable for portfolio review and branded adaptation discussions.",
    mechanics: ["Fruit symbols", "Royal theme", "Classic slot structure"],
    features: ["Portfolio artwork", "Request demo state", "Customisation candidate"],
    status: "request-access"
  },
  "sweet-wins": {
    gameType: "Video Slot",
    keyMechanic: "Candy world bonus pacing",
    shortDescription: "A candy-themed slot with bright symbols, playful bonus anticipation and a public demo for quick partner review.",
    longDescription: "Sweet Wins provides a demo-ready confectionery slot reference for partners evaluating casual themes, promotional fit and custom branded game options.",
    mechanics: ["Candy theme", "Bonus-led play", "Casual slot pacing"],
    features: ["Public demo", "Bright symbol set", "Custom version discussion"],
    status: "demo"
  },
  "the-aztecs": {
    gameType: "Video Slot",
    keyMechanic: "Ancient temple adventure",
    shortDescription: "An ancient-temple slot with exploration cues, high-contrast symbols and demo access for portfolio evaluation.",
    longDescription: "The Aztecs gives partners an adventure-themed slot reference with temple visuals, clear symbol hierarchy and a public demo route.",
    mechanics: ["Adventure theme", "Temple symbols", "Bonus-led pacing"],
    features: ["Public demo", "Ancient world", "Portfolio title"],
    status: "demo"
  },
  "choco-boom": {
    gameType: "Video Slot",
    keyMechanic: "Confectionery bonus energy",
    shortDescription: "A chocolate-themed slot with bold confectionery artwork, energetic reel pacing and public demo availability.",
    longDescription: "Choco Boom is a demo-ready candy and chocolate slot reference suitable for evaluating casual themes, feature energy and custom visual adaptation.",
    mechanics: ["Confectionery theme", "Bonus-led play", "Casual slot pacing"],
    features: ["Public demo", "Chocolate symbols", "Custom version discussion"],
    status: "demo"
  },
  "rich-or-dead": {
    gameType: "Video Slot",
    keyMechanic: "Western risk-and-reward theme",
    shortDescription: "A western-themed slot with bold character direction, outlaw atmosphere and public demo access.",
    longDescription: "Rich or Dead gives partners a demo-ready western slot reference for evaluating mature themes, character-led artwork and portfolio fit.",
    mechanics: ["Western theme", "Character-led artwork", "Bonus-led pacing"],
    features: ["Public demo", "Outlaw world", "Portfolio title"],
    status: "demo"
  }
};

function getGameStatus(game: Game): Game["status"] {
  if (gameContentOverrides[game.slug]?.status) {
    return gameContentOverrides[game.slug].status;
  }
  return hasVerifiedDemo(game) ? "demo" : "request-access";
}

function withArtwork(game: Game): Game["artwork"] {
  return {
    catalogue: game.image,
    hero: game.image,
    thumbnail: game.image,
    screenshots: []
  };
}

export const games: Game[] = rawGames.map((game) => {
  const override = gameContentOverrides[game.slug] || {};
  const merged = { ...game, ...override };
  const status = getGameStatus(merged);

  return {
    ...merged,
    gameType: merged.gameType || "Portfolio Slot",
    status,
    keyMechanic: merged.keyMechanic || "Portfolio slot concept",
    mechanics: merged.mechanics || ["Slot gameplay", "Portfolio artwork"],
    features: merged.features || ["Portfolio review", hasVerifiedDemo(merged) ? "Public demo" : "Request demo"],
    supportedDevices: merged.supportedDevices || defaultDevices,
    artwork: merged.artwork || withArtwork(merged)
  };
});

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

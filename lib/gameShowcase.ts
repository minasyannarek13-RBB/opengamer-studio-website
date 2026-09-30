import {
  inDevelopmentGames,
  playableGames,
  portfolioGames,
  type Game
} from "@/content/games";

function take<T>(items: T[], count: number) {
  return items.slice(0, Math.max(0, count));
}

function interleave(groups: Game[][]) {
  const result: Game[] = [];
  const maxLength = Math.max(0, ...groups.map((group) => group.length));

  for (let index = 0; index < maxLength; index += 1) {
    for (const group of groups) {
      const game = group[index];
      if (game) result.push(game);
    }
  }

  return result;
}

export function getBalancedGameShowcase({
  playable = 3,
  portfolio = 3,
  inDevelopment = 0
}: {
  playable?: number;
  portfolio?: number;
  inDevelopment?: number;
} = {}) {
  return interleave([
    take(playableGames, playable),
    take(portfolioGames, portfolio),
    take(inDevelopmentGames, inDevelopment)
  ]);
}

export function getCompactGameProof() {
  return {
    playable: playableGames[0] ?? null,
    portfolio: portfolioGames[0] ?? null,
    inDevelopment: inDevelopmentGames[0] ?? null
  };
}

export function getHomepageGameProof() {
  const primaryPlayable = playableGames.find((game) => game.slug === "forest-fortune") ?? playableGames[0] ?? null;
  const secondaryPlayable = playableGames.find((game) => game.slug !== primaryPlayable?.slug) ?? null;
  const portfolioTitle = portfolioGames[0] ?? null;

  const used = new Set([primaryPlayable?.slug, secondaryPlayable?.slug, portfolioTitle?.slug].filter(Boolean));
  const supporting = interleave([
    portfolioGames.filter((game) => !used.has(game.slug)),
    playableGames.filter((game) => !used.has(game.slug)),
    inDevelopmentGames.filter((game) => !used.has(game.slug))
  ]).slice(0, 3);

  return {
    primaryPlayable,
    secondaryPlayable,
    portfolioTitle,
    supporting
  };
}

"use client";

import { useMemo, useState } from "react";
import { GameCard } from "@/components/sections/GameCard";
import { gameCategories, games } from "@/content/games";

export function GamePortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredGames = useMemo(() => {
    if (activeCategory === "All") {
      return games;
    }
    return games.filter((game) => game.category?.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Game category filters">
        {gameCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald/50 focus:outline-none focus:ring-2 focus:ring-emerald/60 aria-pressed:border-emerald aria-pressed:text-emerald"
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredGames.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-lg border border-line bg-white/[0.04] p-6 text-sm text-slate-300">
          No games match this filter.
        </p>
      )}
    </div>
  );
}


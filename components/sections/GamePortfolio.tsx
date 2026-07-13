"use client";

import { useMemo, useState } from "react";
import { GameCard } from "@/components/sections/GameCard";
import { games } from "@/content/games";

export function GamePortfolio() {
  const [query, setQuery] = useState("");
  const filteredGames = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return games;
    }

    return games.filter((game) => {
      const searchableText = [game.title, game.shortDescription, ...(game.category || [])].join(" ").toLowerCase();
      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <div>
      <h2 className="sr-only">Available games</h2>
      <div className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <label className="block">
          <span className="sr-only">Search games</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the confirmed game catalogue"
            className="min-h-12 w-full rounded-full border border-white/15 bg-black/30 px-5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald/60 focus:ring-2 focus:ring-emerald/25"
          />
        </label>
        <p className="text-sm text-slate-400">
          Showing <span className="font-semibold text-white">{filteredGames.length}</span> of{" "}
          <span className="font-semibold text-white">{games.length}</span> confirmed titles
        </p>
      </div>
      {filteredGames.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-reveal-group="cards">
          {filteredGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-line bg-white/[0.04] p-6">
          <p className="text-sm font-semibold text-white">No matching game found.</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Clear the search field to return to the full confirmed OpenGamer portfolio.
          </p>
        </div>
      )}
    </div>
  );
}

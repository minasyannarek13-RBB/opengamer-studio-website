"use client";

import { useMemo, useState } from "react";
import { GameCard } from "@/components/sections/GameCard";
import { catalogueGames, getGameStatus } from "@/content/games";

const filters = [
  { label: "All", value: "all" },
  { label: "Playable", value: "playable" },
  { label: "Portfolio Titles", value: "portfolio" },
  { label: "In Development", value: "in-development" }
] as const;

export function GamePortfolio() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filteredGames = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return catalogueGames.filter((game) => {
      const matchesFilter = activeFilter === "all" || getGameStatus(game) === activeFilter;
      if (!matchesFilter) return false;
      if (!normalizedQuery) return true;

      const searchableText = [game.title, game.shortDescription, ...(game.category || []), ...(game.variants || [])]
        .join(" ")
        .toLowerCase();
      return searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, query]);

  return (
    <div>
      <h2 className="sr-only">Available games</h2>
      <div className="premium-card grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_56px_rgba(0,0,0,0.18)] sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search games</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search game titles"
              className="min-h-12 w-full rounded-full border border-white/15 bg-black/35 px-5 pr-24 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/25 focus:border-emerald/60 focus:ring-2 focus:ring-emerald/25"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 min-h-9 -translate-y-1/2 rounded-full border border-white/10 px-3.5 text-xs font-semibold text-slate-300 transition hover:border-emerald/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
              >
                Clear
              </button>
            ) : null}
          </label>
          <p className="text-sm text-slate-400" aria-live="polite">
            Showing <span className="font-semibold text-white">{filteredGames.length}</span> of{" "}
            <span className="font-semibold text-white">{catalogueGames.length}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4" role="group" aria-label="Filter games">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="min-h-10 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm font-semibold text-slate-300 transition hover:border-emerald/45 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-pressed:border-emerald/45 aria-pressed:bg-emerald/10 aria-pressed:text-emerald"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {filteredGames.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-reveal-group="cards">
          {filteredGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      ) : (
        <div className="premium-card mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6" role="status">
          <p className="text-sm font-semibold text-white">No matching game found.</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Try another status filter or clear the search field to return to the full OpenGamer catalogue.</p>
        </div>
      )}
    </div>
  );
}

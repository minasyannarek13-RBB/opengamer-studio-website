import { Card } from "@/components/ui/Card";

const placeholders = ["Game 01", "Game 02", "Game 03"];

export function PortfolioPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {placeholders.map((item) => (
        <Card key={item} className="overflow-hidden p-0">
          <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-sm font-semibold text-slate-500">
            {item}
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Portfolio Placeholder</p>
            <p className="mt-3 text-sm text-slate-400">Screenshot, RTP and volatility badges will be added later.</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

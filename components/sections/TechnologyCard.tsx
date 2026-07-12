import { Card } from "@/components/ui/Card";

export function TechnologyCard({
  title,
  body,
  index,
  meta = []
}: {
  title: string;
  body: string;
  index: number;
  meta?: string[];
}) {
  return (
    <Card className="relative h-full overflow-hidden">
      <div className="absolute right-4 top-4 text-5xl font-semibold text-white/[0.04]">{String(index).padStart(2, "0")}</div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Technology</p>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
      {meta.length > 0 ? (
        <div className="mt-5 grid gap-2">
          {meta.map((item) => (
            <span key={item} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

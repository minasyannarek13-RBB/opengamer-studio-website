import { Card } from "@/components/ui/Card";

export function CapabilityCard({
  title,
  body,
  meta = []
}: {
  title: string;
  body: string;
  meta?: string[];
}) {
  return (
    <Card className="h-full">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-xs font-bold text-cyan">
        +
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
      {meta.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {meta.map((item) => (
            <span key={item} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export function TechnologyBlock({ items }: { items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-glow">
      <div className="grid gap-3 md:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs font-semibold text-cyan">0{index + 1}</p>
            <p className="mt-4 text-sm font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

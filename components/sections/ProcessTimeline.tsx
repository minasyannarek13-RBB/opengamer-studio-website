type TimelineItem = {
  title: string;
  description?: string;
};

export function ProcessTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <li key={item.title} className="premium-card rounded-lg border border-line bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
          {item.description ? <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p> : null}
        </li>
      ))}
    </ol>
  );
}

type TimelineItem = {
  title: string;
  description?: string;
};

export function ProcessTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <li key={item.title} className="premium-card surface-hairline rounded-lg border border-line bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:bg-white/[0.06]">
          <p className="w-fit rounded-full border border-emerald/25 bg-emerald/[0.08] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
          {item.description ? <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p> : null}
        </li>
      ))}
    </ol>
  );
}

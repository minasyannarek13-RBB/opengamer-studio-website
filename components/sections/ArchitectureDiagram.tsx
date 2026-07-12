export function ArchitectureDiagram({ items }: { items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-black/25 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
      <ol className="grid gap-3">
        {items.map((item, index) => (
          <li key={item} className="grid gap-3">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald/15 text-xs font-semibold text-emerald">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-slate-100">{item}</span>
            </div>
            {index < items.length - 1 ? <div className="ml-7 h-4 w-px bg-emerald/35" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

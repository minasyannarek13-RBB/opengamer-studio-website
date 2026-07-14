export function ArchitectureDiagram({ items }: { items: string[] }) {
  return (
    <div className="premium-card surface-hairline rounded-lg border border-line bg-black/30 p-5 sm:p-6">
      <ol className="relative grid gap-3">
        <svg className="pointer-events-none absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-3 sm:block" aria-hidden="true">
          <line x1="6" x2="6" y1="0" y2="100%" stroke="rgba(46,230,166,0.3)" strokeWidth="1.5" strokeDasharray="5 8" />
        </svg>
        {items.map((item, index) => (
          <li key={item} className="relative">
            <div className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/35 hover:bg-white/[0.065]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald/35 bg-emerald/[0.12] text-xs font-semibold text-emerald shadow-[0_0_24px_rgba(46,230,166,0.12)]">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-slate-100">{item}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

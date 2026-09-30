const technologyFlow = [
  { number: "01", title: "Game client", text: "Responsive player-facing game experience and launch-state handling." },
  { number: "02", title: "Game services", text: "Session, round, configuration and reporting logic where the scope requires it." },
  { number: "03", title: "Integration layer", text: "API mapping, wallet communication, authentication and error-state handling." },
  { number: "04", title: "Partner environment", text: "Sandbox alignment, acceptance support, monitoring expectations and release handoff." }
];

const supportItems = ["RGS-related engineering", "Wallet flows", "API mapping", "Acceptance support"];

export function ServicesTechnologyFlow() {
  return (
    <div className="relative mb-9 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#06090b] p-5 sm:p-7">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_48%_8%,rgba(46,230,166,0.07),transparent_21rem)]" />
      <ol className="relative grid gap-3 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        {technologyFlow.map((step, flowIndex) => (
          <li
            key={step.number}
            className="relative rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 xl:rounded-none xl:border-y xl:border-r-0 xl:bg-transparent xl:p-5 xl:first:rounded-l-xl xl:first:border-l xl:last:rounded-r-xl xl:last:border-r"
          >
            {flowIndex < technologyFlow.length - 1 ? (
              <span aria-hidden="true" className="absolute -bottom-[1.05rem] left-1/2 z-10 -translate-x-1/2 text-sm text-emerald/70 sm:hidden xl:-right-2.5 xl:bottom-auto xl:left-auto xl:top-1/2 xl:block xl:translate-x-0 xl:-translate-y-1/2">
                →
              </span>
            ) : null}
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-emerald">{step.number}</span>
            <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="relative mt-5 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-2 xl:flex xl:flex-wrap xl:gap-x-5 xl:gap-y-2">
        {supportItems.map((item) => (
          <span key={item} className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

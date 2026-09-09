export function ArchitectureDiagram({ items }: { items: string[] }) {
  const layers = [
    {
      title: items[0] || "Player Environment",
      description: "Player-facing game client, device context and launch flow.",
      label: "Player layer"
    },
    {
      title: items[1] || "Partner Environment",
      description: "Operator, aggregator, wallet, authentication and partner-owned systems.",
      label: "Partner boundary"
    },
    {
      title: items[2] || "Game Technology Layer",
      description: "Game client integration, backend services, game logic and RGS-related engineering.",
      label: "Engineering layer"
    },
    {
      title: items[3] || "Operational Layer",
      description: "Reporting, QA support, release coordination and post-release visibility.",
      label: "Delivery layer"
    }
  ];

  return (
    <div className="relative isolate overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#06090b] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-7">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(46,230,166,0.07),transparent_21rem),radial-gradient(circle_at_90%_86%,rgba(93,156,255,0.045),transparent_20rem)]" />

      <div className="relative">
        <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-emerald">Architecture flow</p>
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl">Separate the layers before connecting them.</h2>
          </div>
          <p className="max-w-sm text-xs leading-5 text-slate-500 sm:text-right">Each boundary stays explicit so scope, ownership and partner dependencies remain visible.</p>
        </div>

        <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 xl:gap-0" aria-label="OpenGamer architecture layers">
          {layers.map((layer, index) => (
            <li
              key={layer.title}
              className="group relative border border-white/[0.08] bg-white/[0.022] p-4 transition duration-300 hover:border-emerald/25 hover:bg-white/[0.035] motion-reduce:transition-none md:rounded-xl xl:rounded-none xl:border-r-0 xl:p-5 xl:first:rounded-l-xl xl:last:rounded-r-xl xl:last:border-r"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.55rem] font-semibold tracking-[0.15em] text-emerald">0{index + 1}</span>
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-slate-600">{layer.label}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-tight text-white sm:text-lg">{layer.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-400">{layer.description}</p>
              {index < layers.length - 1 ? (
                <span aria-hidden="true" className="absolute -bottom-2.5 left-1/2 z-10 -translate-x-1/2 rounded-full border border-emerald/20 bg-[#07100d] px-2 py-0.5 text-[0.6rem] text-emerald md:hidden xl:-right-3 xl:bottom-auto xl:left-auto xl:top-1/2 xl:block xl:-translate-y-1/2 xl:translate-x-0">→</span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-[0.32fr_1fr] sm:items-start">
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-slate-500">Partner-specific boundary</p>
          <p className="text-sm leading-6 text-slate-500">Authentication, wallet behaviour, API contracts, deployment constraints and acceptance criteria depend on the actual partner documentation and target environment.</p>
        </div>
      </div>
    </div>
  );
}

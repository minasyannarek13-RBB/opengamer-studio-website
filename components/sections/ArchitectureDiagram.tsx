export function ArchitectureDiagram({ items }: { items: string[] }) {
  const layers = [
    {
      title: items[0] || "Player Environment",
      description: "Player-facing game client, device context and launch flow."
    },
    {
      title: items[1] || "Partner Environment",
      description: "Operator, aggregator, wallet, authentication and partner-owned systems."
    },
    {
      title: items[2] || "Game Technology Layer",
      description: "Game client integration, backend services, game logic and RGS-related engineering."
    },
    {
      title: items[3] || "Operational Layer",
      description: "Reporting, QA support, release coordination and post-release visibility."
    }
  ];

  return (
    <div className="premium-card surface-hairline rounded-lg border border-line bg-black/30 p-5 sm:p-6">
      <div className="grid gap-3 md:grid-cols-2">
        {layers.map((layer, index) => (
          <div key={layer.title} className="relative rounded-lg border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/35 hover:bg-white/[0.065]">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald/35 bg-emerald/[0.12] text-xs font-semibold text-emerald">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-white">{layer.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{layer.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-500">
        Final architecture depends on partner documentation, wallet flow, deployment context and integration requirements.
      </p>
    </div>
  );
}

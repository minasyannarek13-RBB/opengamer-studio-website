import { Button } from "@/components/ui/Button";
import type { ServiceItem } from "@/content/services";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const href = service.title === "Live Casino Development" ? "/services/live-casino-development" : "/contact";
  const label = service.title === "Live Casino Development" ? "View service details" : "Discuss this service";

  return (
    <article className="premium-card rounded-lg border border-line bg-white/[0.045] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] sm:p-6">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-emerald/25 bg-emerald/10 text-sm font-semibold text-emerald" aria-hidden="true">
        OG
      </div>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {service.capabilities.map((capability) => (
          <li key={capability} className="flex gap-2.5 rounded-md border border-white/[0.06] bg-black/15 px-3 py-2 text-sm text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald shadow-[0_0_14px_rgba(35,196,131,0.45)]" aria-hidden="true" />
            {capability}
          </li>
        ))}
      </ul>
      <Button href={href} variant="link" className="mt-5">
        {label}
      </Button>
    </article>
  );
}

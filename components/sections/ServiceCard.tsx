import { Button } from "@/components/ui/Button";
import type { ServiceItem } from "@/content/services";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const href = service.title === "Live Casino Development" ? "/services/live-casino-development" : "/contact";
  const label = service.title === "Live Casino Development" ? "View service details" : "Discuss this service";

  return (
    <article className="rounded-lg border border-line bg-white/[0.04] p-5 transition-colors hover:border-white/20">
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {service.capabilities.map((capability) => (
          <li key={capability} className="flex gap-2 text-sm text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
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

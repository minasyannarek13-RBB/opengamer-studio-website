import type { Locale } from "@/content/types";
import { Card } from "@/components/ui/Card";
import { getLocalizedPath } from "@/lib/routes";
import Link from "next/link";

const studioRoutes = [
  { title: "Slot Studio", href: "/studios/slot-studio", body: "Slot portfolio and game production." },
  { title: "Live Casino Studio", href: "/studios/live-casino-studio", body: "Live casino concepts and game formats." },
  { title: "Engineering", href: "/studios/engineering", body: "Frontend, backend, RGS, RNG and APIs." }
];

export function StudioCards({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {studioRoutes.map((item) => (
        <Link key={item.href} href={getLocalizedPath(locale, item.href)}>
          <Card className="h-full transition hover:-translate-y-1 hover:border-cyan/40">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Studio</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}

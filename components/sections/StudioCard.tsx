import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function StudioCard({
  title,
  body,
  href,
  meta = []
}: {
  title: string;
  body: string;
  href: string;
  meta?: string[];
}) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="flex h-full flex-col justify-between transition group-hover:-translate-y-1 group-hover:border-cyan/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Studio</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
        </div>
        {meta.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {meta.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </Card>
    </Link>
  );
}

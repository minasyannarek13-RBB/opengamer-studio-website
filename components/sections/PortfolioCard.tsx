import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function PortfolioCard({
  title,
  body,
  href,
  featured = false,
  meta = []
}: {
  title: string;
  body: string;
  href: string;
  featured?: boolean;
  meta?: string[];
}) {
  return (
    <Link href={href} className={`group block h-full ${featured ? "md:col-span-2" : ""}`}>
      <Card className="h-full overflow-hidden p-0 transition group-hover:-translate-y-1 group-hover:border-cyan/40">
        <div
          className={`flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-black text-sm font-semibold text-slate-500 ${
            featured ? "aspect-[16/7]" : "aspect-[16/10]"
          }`}
        >
          Screenshot Placeholder
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {meta.map((item) => (
              <span key={item} className="rounded-full border border-cyan/20 px-3 py-1 text-xs text-cyan">
                {item}
              </span>
            ))}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
        </div>
      </Card>
    </Link>
  );
}

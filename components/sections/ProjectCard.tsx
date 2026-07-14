import Image from "next/image";
import { Button } from "@/components/ui/Button";

type ProjectCardProps = {
  title: string;
  category?: string;
  tagline: string;
  description: string;
  status?: string;
  href: string;
  cta: string;
  image?: string;
  imageAlt: string;
};

export function ProjectCard({ title, category, tagline, description, status, href, cta, image, imageAlt }: ProjectCardProps) {
  return (
    <article className="premium-card group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:bg-white/[0.058] focus-within:border-emerald/50">
      <div className="image-frame relative aspect-[4/3] overflow-hidden bg-black/42">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            width={800}
            height={600}
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.018]"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-8">
            <div className="relative h-full max-h-80 w-40 rounded-[2rem] border border-emerald/35 bg-black/40 p-3 shadow-[0_20px_70px_rgba(46,230,166,0.12)]">
              <div className="mb-4 h-5 rounded-full bg-emerald/20 text-center text-[10px] uppercase tracking-[0.16em] text-emerald">Concept UI</div>
              <div className="grid gap-3">
                <div className="h-12 rounded-lg bg-white/[0.08]" />
                <div className="h-16 rounded-lg bg-white/[0.06]" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-14 rounded-lg bg-emerald/10" />
                  <div className="h-14 rounded-lg bg-white/[0.06]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {category ? <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{category}</span> : null}
          {status ? <span className="premium-status w-fit rounded-full px-3 py-1 text-xs">{status}</span> : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm font-medium text-slate-300">{tagline}</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
        <Button href={href} variant="link" className="mt-auto pt-5">
          {cta}
        </Button>
      </div>
    </article>
  );
}

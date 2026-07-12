import Image from "next/image";
import { Button } from "@/components/ui/Button";

type ProjectCardProps = {
  title: string;
  tagline: string;
  description: string;
  status?: string;
  href: string;
  cta: string;
  image?: string;
  imageAlt: string;
};

export function ProjectCard({ title, tagline, description, status, href, cta, image, imageAlt }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-white/[0.04] transition-colors hover:border-white/20 focus-within:border-emerald/50">
      <div className="relative aspect-[4/3] overflow-hidden bg-black/35">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            width={800}
            height={600}
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
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
      <div className="p-5">
        {status ? <span className="rounded-full border border-emerald/30 px-3 py-1 text-xs text-emerald">{status}</span> : null}
        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm font-medium text-slate-300">{tagline}</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
        <Button href={href} variant="link" className="mt-5">
          {cta}
        </Button>
      </div>
    </article>
  );
}

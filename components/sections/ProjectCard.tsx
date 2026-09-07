import Image from "next/image";
import Link from "next/link";
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
    <article className="premium-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_18px_60px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:bg-white/[0.05] hover:shadow-[0_24px_76px_rgba(0,0,0,0.26)] focus-within:border-emerald/45">
      <Link href={href} className="image-frame relative aspect-[16/10] overflow-hidden bg-black/42 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald/70">
        {image ? <Image src={image} alt={imageAlt} width={1200} height={750} sizes="(min-width:1024px) 44vw,100vw" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] group-focus-within:scale-[1.025]" /> : <div className="flex h-full items-center justify-center text-sm text-slate-500">Project visual</div>}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/8 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-4 sm:p-5">
          {category ? <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">{category}</span> : <span />}
          {status ? <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs text-slate-200 backdrop-blur">{status}</span> : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm font-medium text-slate-300">{tagline}</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
        <Button href={href} variant="link" className="mt-auto pt-6">{cta}</Button>
      </div>
    </article>
  );
}

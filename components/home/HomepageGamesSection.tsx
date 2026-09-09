import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomepageGamesSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_24%_60%,rgba(46,230,166,0.05),transparent_28rem),radial-gradient(circle_at_86%_30%,rgba(93,156,255,0.045),transparent_24rem)]" />
      <Container className="relative">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="premium-kicker text-xs font-semibold uppercase">Selected game work</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl">Playable titles and portfolio work, side by side.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Selected OpenGamer titles across verified public demos and confirmed portfolio entries. Demo availability is explicit; portfolio titles stay visible even when there is no public demo.</p>
          </div>
          <div className="flex flex-wrap gap-3"><Button href="/games" variant="secondary">View All Games</Button><Button href="/contact?interest=portfolio#project-enquiry" variant="secondary">Discuss Portfolio</Button></div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <Link href="/games/forest-fortune" className="group relative min-h-[420px] overflow-hidden rounded-[1.55rem] border border-white/12 bg-black/40 shadow-[0_28px_90px_rgba(0,0,0,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 lg:col-span-6 lg:row-span-2">
            <Image src="/assets/games/forest-fortune/artwork.webp" alt="Forest Fortune slot artwork" fill sizes="(min-width:1024px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,7,0.02)_30%,rgba(3,5,7,0.9)_100%)]" />
            <div className="absolute left-5 top-5 flex items-center gap-2"><span className="rounded-full border border-emerald/25 bg-[#07100d]/80 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-emerald backdrop-blur">Playable</span><span className="rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur">Portfolio title</span></div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald">Fantasy slot</span><h3 className="mt-2 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Forest Fortune</h3><p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Mystical forest visual direction with a verified public demo for direct evaluation.</p><span className="mt-5 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald motion-reduce:transition-none">View game →</span></div>
          </Link>
          <Link href="/games/cake-bonanza" className="group relative min-h-[250px] overflow-hidden rounded-[1.45rem] border border-white/12 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 lg:col-span-6">
            <Image src="/assets/games/cake-bonanza/artwork.webp" alt="Cake Bonanza slot artwork" fill sizes="(min-width:1024px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/5" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-7"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-slate-300">Portfolio title · No public demo</span><h3 className="mt-2 text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">Cake Bonanza</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">A confirmed dessert-themed portfolio title presented for product and commercial review.</p></div></div>
          </Link>
          <Link href="/games/dragon-rush" className="group relative min-h-[250px] overflow-hidden rounded-[1.45rem] border border-white/12 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 lg:col-span-6">
            <Image src="/assets/games/dragon-rush/artwork.webp" alt="Dragon Rush slot artwork" fill sizes="(min-width:1024px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/5" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-7"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-emerald">Playable · Portfolio title</span><h3 className="mt-2 text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">Dragon Rush</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">High-contrast fantasy artwork with a verified public demo for direct evaluation.</p></div></div>
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><div className="flex -space-x-2" aria-hidden="true">{[
            { src: "/assets/games/dragon-fruits/artwork.webp", key: "dragon-fruits" },
            { src: "/assets/games/goblin-gems/artwork.webp", key: "goblin-gems" },
            { src: "/assets/games/royal-fruits/artwork.webp", key: "royal-fruits" }
          ].map((asset) => <span key={asset.key} className="relative h-9 w-9 overflow-hidden rounded-lg border border-[#05070a] bg-black"><Image src={asset.src} alt="" fill sizes="36px" className="object-cover" /></span>)}</div><p className="text-sm text-slate-400">More playable and portfolio-only titles continue in the full games catalogue.</p></div>
          <Button href="/contact?interest=game#project-enquiry" variant="secondary">Discuss Custom Production</Button>
        </div>
      </Container>
    </section>
  );
}

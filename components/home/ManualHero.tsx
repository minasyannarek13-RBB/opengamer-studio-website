import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGameStatus, getVerifiedDemoUrl, type Game } from "@/content/games";
import { getOptimizedGameArtwork } from "@/lib/gameAssets";
import { getBalancedGameShowcase } from "@/lib/gameShowcase";

const capabilities = [
  "Custom game development",
  "Dedicated development teams",
  "Technology & integration",
  "Original IP & branded games"
];

const gameShowcase = getBalancedGameShowcase({ playable: 3, portfolio: 3 }).map((game) => ({
  game,
  image: getOptimizedGameArtwork(game)
}));

function getHomepageStatus(game: Game) {
  const status = getGameStatus(game);
  if (status === "playable") return "Playable";
  if (status === "in-development") return "In development";
  return "Portfolio title · No public demo";
}

export function ManualHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(46,230,166,0.16),transparent_24rem),radial-gradient(circle_at_91%_21%,rgba(74,112,255,0.095),transparent_28rem),radial-gradient(circle_at_70%_86%,rgba(46,230,166,0.075),transparent_32rem),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_34%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div aria-hidden="true" className="absolute right-[-17rem] top-[4%] h-[48rem] w-[48rem] rounded-full border border-emerald/[0.09] shadow-[0_0_150px_rgba(46,230,166,0.065)]" />
      <div aria-hidden="true" className="absolute right-[-5rem] top-[14%] h-[31rem] w-[31rem] rounded-full border border-emerald/[0.08]" />
      <div aria-hidden="true" className="absolute bottom-[-11rem] right-[13%] h-[24rem] w-[52rem] rounded-[50%] bg-emerald/[0.035] blur-3xl" />

      <Container className="grid gap-12 py-12 sm:py-16 xl:min-h-[calc(100svh-5rem)] xl:grid-cols-[0.70fr_1.30fr] xl:items-center xl:gap-12 xl:py-12 2xl:grid-cols-[0.68fr_1.32fr]">
        <div className="relative z-20 max-w-[42rem] xl:pr-1">
          <p className="premium-kicker text-xs font-semibold uppercase">Games · Technology · Product</p>
          <h1 className="mt-5 max-w-[12ch] text-balance text-5xl font-semibold leading-[0.93] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.35rem] xl:text-[4.8rem] 2xl:text-[5.15rem]">We Build Games. We Build <span className="text-emerald">What Comes Next.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">OpenGamer builds casino games, original product concepts and dedicated development capacity for operators, aggregators, brands and providers.</p>
          <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap"><Button href="/contact#project-enquiry" className="w-full min-[460px]:w-auto">Start a Project</Button><Button href="/games" variant="secondary" className="w-full min-[460px]:w-auto">Explore Games</Button></div>
          <div className="mt-9 grid gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2">{capabilities.map((item) => <div key={item} className="flex items-center gap-3 text-sm text-slate-300"><span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald shadow-[0_0_16px_rgba(46,230,166,0.35)]" /><span>{item}</span></div>)}</div>
        </div>

        <div className="relative z-10 xl:min-h-[735px] 2xl:min-h-[780px]" aria-label="Selected OpenGamer games and original product work">
          <div aria-hidden="true" className="absolute inset-x-[10%] top-[6%] hidden h-[68%] rounded-[4rem] bg-emerald/[0.04] blur-3xl xl:block" />
          <div className="grid gap-4 sm:grid-cols-[1fr_0.42fr] sm:items-stretch xl:block">
            <Link href="/portfolio/elementals" className="group relative block aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/45 shadow-[0_30px_100px_rgba(0,0,0,0.44)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 xl:absolute xl:left-0 xl:top-[3%] xl:h-[57%] xl:w-[72%] xl:aspect-auto xl:rounded-[1.75rem] xl:shadow-[0_42px_140px_rgba(0,0,0,0.52)]">
              <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS Nexus studio wheel concept" fill priority sizes="(min-width:1536px) 46vw,(min-width:1280px) 45vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,8,0.10),rgba(4,6,8,0)_48%),linear-gradient(180deg,rgba(4,6,8,0.01)_46%,rgba(4,6,8,0.82)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6 xl:p-7"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald sm:text-[0.66rem]">Original Live Casino IP · In development</span><strong className="mt-1.5 block text-2xl font-semibold text-white sm:text-3xl">ELEMENTALS</strong></div><span className="hidden text-sm font-semibold text-white/80 2xl:block">Explore concept →</span></div>
            </Link>
            <Link href="/portfolio/lc-app" className="group relative mx-auto block aspect-[9/16] w-full max-w-[16rem] overflow-hidden rounded-[1.55rem] border border-white/15 bg-[#030708] shadow-[0_30px_100px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:border-emerald/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transform-none motion-reduce:transition-none sm:max-w-none xl:absolute xl:right-0 xl:top-[7%] xl:h-[68%] xl:w-[26%] xl:aspect-auto xl:rounded-[1.9rem] xl:shadow-[0_42px_130px_rgba(0,0,0,0.62)]">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(46,230,166,0.08),transparent_60%)]" />
              <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App mobile product concept" fill sizes="(min-width:1536px) 17vw,(min-width:1280px) 18vw,(min-width:640px) 28vw,70vw" className="object-contain object-center p-2.5 transition duration-500 group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-3 xl:p-3" />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.055]" /><div className="absolute left-3 top-3 rounded-full border border-emerald/20 bg-black/70 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-emerald backdrop-blur sm:left-4 sm:top-4">B2B product concept</div><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5"><strong className="block text-base font-semibold text-white sm:text-lg">LC App</strong><span className="mt-1 block text-[0.68rem] leading-5 text-slate-300">Product direction · in development</span></div>
            </Link>
          </div>

          <div className="mt-5 xl:absolute xl:bottom-[1%] xl:left-0 xl:right-0 xl:mt-0">
            <div className="mb-2.5 flex items-center justify-between gap-4 px-0.5"><span className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-slate-500">Playable + portfolio game work</span><Link href="/games" className="text-[0.62rem] font-semibold text-emerald/85 transition hover:text-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">View all games →</Link></div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6 xl:gap-2.5" aria-label="Selected playable and portfolio game titles">
              {gameShowcase.map(({ game, image }) => {
                const playable = Boolean(getVerifiedDemoUrl(game));
                return <Link key={game.slug} href={`/games/${game.slug}`} className="group overflow-hidden rounded-xl border border-white/12 bg-[#06080b] shadow-[0_18px_48px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transform-none motion-reduce:transition-none"><div className="relative aspect-[10/7] overflow-hidden"><Image src={image} alt={`${game.title} artwork`} fill sizes="(min-width:1536px) 8vw,(min-width:1280px) 9vw,(min-width:640px) 30vw,48vw" className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" /><div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/12 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 xl:p-3"><span className={`block text-[0.46rem] font-semibold uppercase tracking-[0.13em] sm:text-[0.5rem] ${playable ? "text-emerald/90" : "text-slate-300"}`}>{getHomepageStatus(game)}</span><strong className="mt-0.5 block text-[0.72rem] font-semibold leading-tight text-white sm:text-xs xl:text-xs">{game.title}</strong></div></div></Link>;
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

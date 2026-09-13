import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGameStatus, getVerifiedDemoUrl, type Game } from "@/content/games";
import { getOptimizedGameArtwork } from "@/lib/gameAssets";
import { getBalancedGameShowcase } from "@/lib/gameShowcase";

const engagementSignals = [
  "Custom game production",
  "Dedicated development",
  "Technology & integration"
];

const gameShowcase = getBalancedGameShowcase({ playable: 2, portfolio: 2 }).map((game) => ({
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
      <div aria-hidden="true" className="absolute right-[-17rem] top-[4%] h-[48rem] w-[48rem] rounded-full border border-emerald/[0.09] shadow-[0_0_150px_rgba(46,230,166,0.065)]" />
      <div aria-hidden="true" className="absolute right-[-5rem] top-[14%] h-[31rem] w-[31rem] rounded-full border border-emerald/[0.08]" />
      <div aria-hidden="true" className="absolute bottom-[-11rem] right-[13%] h-[24rem] w-[52rem] rounded-[50%] bg-emerald/[0.035] blur-3xl" />

      <Container className="grid gap-10 py-10 sm:py-16 xl:min-h-[700px] xl:grid-cols-[0.86fr_1.14fr] xl:items-center xl:gap-10 xl:py-10 2xl:min-h-[760px] 2xl:grid-cols-[0.82fr_1.18fr] 2xl:gap-14">
        <div className="relative z-20 max-w-[46rem] xl:pr-2">
          <p className="premium-kicker text-xs font-semibold uppercase">iGaming development studio</p>
          <h1 className="mt-4 max-w-[16.5ch] text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.03em] text-white min-[430px]:text-[2.7rem] sm:mt-5 sm:max-w-[13.5ch] sm:text-[3.55rem] sm:leading-[0.95] lg:text-[3.8rem] xl:text-[3.85rem] 2xl:text-[4.45rem]">
            <span className="block sm:inline">Build casino games.</span>{" "}
            <span className="block sm:inline">Extend delivery.</span>{" "}
            <span className="block text-emerald sm:inline">Solve the product gap.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8 xl:text-[1.05rem]">OpenGamer builds casino games and original iGaming products, and provides specialist development capacity across game, frontend, backend, mathematics and integration-oriented work.</p>
          <div className="mt-7 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap sm:mt-8"><Button href="/contact#project-enquiry" className="w-full min-[460px]:w-auto">Discuss a Project</Button><Button href="/games" variant="secondary" className="w-full min-[460px]:w-auto">Explore Games</Button></div>

          <div className="mt-7 border-t border-white/10 pt-5 sm:mt-8">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-slate-500">Ways to work with OpenGamer</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {engagementSignals.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-slate-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_14px_rgba(46,230,166,0.32)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 xl:min-h-[610px] 2xl:min-h-[675px]" aria-label="Selected OpenGamer games and original product work">
          <div aria-hidden="true" className="absolute inset-x-[10%] top-[6%] hidden h-[68%] rounded-[4rem] bg-emerald/[0.04] blur-3xl xl:block" />
          <div className="grid gap-4 sm:grid-cols-[1fr_0.42fr] sm:items-stretch xl:block">
            <Link href="/portfolio/elementals" className="group relative block aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/45 shadow-[0_30px_100px_rgba(0,0,0,0.44)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 xl:absolute xl:left-0 xl:top-[4%] xl:h-[55%] xl:w-[74%] xl:aspect-auto xl:rounded-[1.75rem] xl:shadow-[0_42px_140px_rgba(0,0,0,0.52)] 2xl:h-[58%]">
              <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS Nexus studio wheel concept" fill priority sizes="(min-width:1536px) 46vw,(min-width:1280px) 45vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,8,0.10),rgba(4,6,8,0)_48%),linear-gradient(180deg,rgba(4,6,8,0.01)_46%,rgba(4,6,8,0.82)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6 xl:p-6 2xl:p-7"><div><span className="text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-emerald sm:text-[0.64rem]">Original Live Casino IP · In development</span><strong className="mt-1.5 block text-2xl font-semibold text-white sm:text-3xl">ELEMENTALS</strong></div><span className="hidden text-sm font-semibold text-white/80 2xl:block">Explore concept →</span></div>
            </Link>

            <Link href="/portfolio/lc-app" className="group relative mx-auto flex aspect-[9/16] w-full max-w-[16rem] flex-col overflow-hidden rounded-[1.55rem] border border-white/15 bg-[#030708] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:border-emerald/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transform-none motion-reduce:transition-none sm:max-w-none sm:p-4 xl:absolute xl:right-0 xl:top-[9%] xl:h-[61%] xl:w-[24%] xl:aspect-auto xl:rounded-[1.9rem] xl:shadow-[0_42px_130px_rgba(0,0,0,0.62)] 2xl:h-[64%]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(46,230,166,0.08),transparent_60%)]" />
              <div className="relative z-10 flex min-h-8 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-black/72 px-2.5 py-2 text-center text-[0.46rem] font-semibold uppercase leading-none tracking-[0.09em] text-emerald backdrop-blur sm:text-[0.5rem]">B2B product direction</div>
              <div className="relative z-0 mt-2 min-h-0 flex-1 overflow-hidden rounded-[1.15rem] bg-black/20">
                <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App mobile product concept" fill sizes="(min-width:1536px) 17vw,(min-width:1280px) 18vw,(min-width:640px) 28vw,70vw" className="object-contain object-center p-1.5 transition duration-500 group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-2" />
              </div>
              <div className="relative z-10 mt-2 shrink-0 border-t border-white/[0.08] pt-3">
                <strong className="block text-base font-semibold leading-tight text-white sm:text-lg">LC App</strong>
                <span className="mt-1 block text-[0.68rem] leading-5 text-slate-300">In development</span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.055]" />
            </Link>
          </div>

          <div className="mt-5 xl:absolute xl:bottom-0 xl:left-0 xl:right-0 xl:mt-0">
            <div className="mb-2.5 flex items-center justify-between gap-4 px-0.5"><span className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-slate-500">Selected game work</span><Link href="/games" className="text-[0.62rem] font-semibold text-emerald/85 transition hover:text-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">View all games →</Link></div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-4 xl:gap-3" aria-label="Selected playable and portfolio game titles">
              {gameShowcase.map(({ game, image }) => {
                const playable = Boolean(getVerifiedDemoUrl(game));
                return <Link key={game.slug} href={`/games/${game.slug}`} className="group overflow-hidden rounded-xl border border-white/12 bg-[#06080b] shadow-[0_18px_48px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transform-none motion-reduce:transition-none"><div className="relative aspect-[10/7] overflow-hidden"><Image src={image} alt={`${game.title} artwork`} fill sizes="(min-width:1536px) 12vw,(min-width:1280px) 13vw,(min-width:640px) 22vw,48vw" className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" /><div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/12 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3"><span className={`block text-[0.48rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.52rem] ${playable ? "text-emerald/90" : "text-slate-300"}`}>{getHomepageStatus(game)}</span><strong className="mt-0.5 block text-[0.74rem] font-semibold leading-tight text-white sm:text-xs">{game.title}</strong></div></div></Link>;
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

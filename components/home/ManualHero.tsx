import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const capabilities = [
  "Custom game development",
  "Dedicated development teams",
  "Technology & integration",
  "Original IP & branded games"
];

const gameShowcase = [
  { title: "Forest Fortune", slug: "forest-fortune", image: "/assets/games/forest-fortune/artwork.webp", status: "Playable" },
  { title: "Deep Dive", slug: "deep-dive", image: "/assets/games/deep-dive/artwork.webp", status: "Playable" },
  { title: "Dragon Rush", slug: "dragon-rush", image: "/assets/games/dragon-rush/artwork.webp", status: "Playable" },
  { title: "Sweet Wins", slug: "sweet-wins", image: "/assets/games/sweet-wins/artwork.webp", status: "Playable" },
  { title: "Fruit Elixir", slug: "fruit-elixir", image: "/assets/games/fruit-elixir/artwork.webp", status: "Playable" },
  { title: "Cake Bonanza", slug: "cake-bonanza", image: "/assets/games/cake-bonanza/artwork.webp", status: "Portfolio" }
];

export function ManualHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(46,230,166,0.15),transparent_24rem),radial-gradient(circle_at_88%_24%,rgba(59,130,246,0.10),transparent_28rem),radial-gradient(circle_at_74%_82%,rgba(46,230,166,0.08),transparent_30rem),linear-gradient(180deg,rgba(255,255,255,0.028),transparent_38%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div aria-hidden="true" className="absolute right-[-12rem] top-[8%] h-[42rem] w-[42rem] rounded-full border border-emerald/10 shadow-[0_0_120px_rgba(46,230,166,0.08)]" />
      <div aria-hidden="true" className="absolute right-[-4rem] top-[16%] h-[29rem] w-[29rem] rounded-full border border-emerald/10" />

      <Container className="grid min-h-[calc(100svh-5rem)] gap-12 py-12 sm:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-10 lg:py-14 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="relative z-20 max-w-3xl lg:pr-2">
          <p className="premium-kicker text-xs font-semibold uppercase">Games · Technology · Product</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.94] tracking-[-0.025em] text-white sm:text-6xl lg:text-[4.6rem] xl:text-[5rem]">
            We Build Games. We Build <span className="text-emerald">What Comes Next.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            OpenGamer is an iGaming product and game studio creating original casino content, custom games and dedicated development capacity for B2B partners.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap">
            <Button href="/contact#project-enquiry" className="w-full min-[460px]:w-auto">
              Start a Project
            </Button>
            <Button href="/games" variant="secondary" className="w-full min-[460px]:w-auto">
              Explore Games
            </Button>
          </div>
          <div className="mt-9 grid gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald shadow-[0_0_16px_rgba(46,230,166,0.35)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-h-[560px] sm:min-h-[660px] lg:min-h-[670px] xl:min-h-[720px]" aria-label="Selected OpenGamer games and original product work">
          <div aria-hidden="true" className="absolute inset-x-[8%] top-[7%] h-[70%] rounded-[3rem] bg-emerald/[0.045] blur-3xl" />

          <Link href="/portfolio/elementals" className="group absolute left-0 top-[3%] h-[58%] w-[76%] overflow-hidden rounded-[1.7rem] border border-white/15 bg-black/45 shadow-[0_40px_130px_rgba(0,0,0,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:left-[1%] lg:w-[74%] xl:w-[76%]">
            <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS Nexus studio wheel concept" fill priority sizes="(min-width: 1280px) 44vw,(min-width:1024px) 42vw,78vw" className="object-cover transition duration-700 group-hover:scale-[1.018]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,8,0.10),rgba(4,6,8,0)_46%),linear-gradient(180deg,rgba(4,6,8,0.03),rgba(4,6,8,0.78))]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-emerald">Original Live Casino IP · In development</span>
                <strong className="mt-2 block text-2xl font-semibold text-white sm:text-3xl">ELEMENTALS</strong>
              </div>
              <span className="hidden text-sm font-semibold text-white/80 sm:block">Explore concept →</span>
            </div>
          </Link>

          <Link href="/portfolio/lc-app" className="group absolute right-0 top-[8%] h-[69%] w-[31%] min-w-[150px] overflow-hidden rounded-[1.9rem] border border-white/15 bg-[#05090b] shadow-[0_38px_120px_rgba(0,0,0,0.58)] transition duration-300 hover:-translate-y-1 hover:border-emerald/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:right-[1%] sm:w-[30%] lg:w-[29%]">
            <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App mobile product concept" fill sizes="(min-width:1280px) 18vw,(min-width:1024px) 17vw,31vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.015]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,9,0.02)_45%,rgba(3,8,9,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-emerald">B2B product concept</span>
              <strong className="mt-1.5 block text-base font-semibold text-white sm:text-lg">LC App</strong>
            </div>
          </Link>

          <div className="absolute bottom-[2%] left-0 right-[4%] grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-2.5" aria-label="Selected playable and portfolio game titles">
            {gameShowcase.map((game) => (
              <Link key={game.slug} href={`/games/${game.slug}`} className="group overflow-hidden rounded-xl border border-white/12 bg-[#06080b] shadow-[0_20px_52px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={game.image} alt={`${game.title} artwork`} fill sizes="(min-width:1024px) 8vw,(min-width:640px) 14vw,30vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                    <span className="block text-[0.48rem] font-semibold uppercase tracking-[0.13em] text-emerald/90 sm:text-[0.52rem]">{game.status}</span>
                    <strong className="mt-1 block text-[0.72rem] font-semibold leading-tight text-white sm:text-xs">{game.title}</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

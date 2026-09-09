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

export function ManualHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(46,230,166,0.10),transparent_28rem),radial-gradient(circle_at_84%_30%,rgba(117,103,248,0.08),transparent_22rem),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <Container className="grid min-h-[calc(100svh-5rem)] gap-12 py-14 sm:py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-14 lg:py-16">
        <div className="relative z-20 max-w-3xl">
          <p className="premium-kicker text-xs font-semibold uppercase">Games · Technology · Product</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.94] tracking-[-0.025em] text-white sm:text-6xl lg:text-[4.7rem]">
            We Build Games. We Build What Comes Next.
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

        <div className="relative z-10 min-h-[440px] sm:min-h-[560px] lg:min-h-[610px]" aria-label="Selected OpenGamer games and original product work">
          <Link href="/portfolio/elementals" className="group absolute inset-x-0 top-0 mx-auto h-[78%] max-w-[760px] overflow-hidden rounded-[1.6rem] border border-white/12 bg-black/45 shadow-[0_36px_120px_rgba(0,0,0,0.46)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
            <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS Nexus studio wheel concept" fill priority sizes="(min-width: 1024px) 52vw, 92vw" className="object-cover transition duration-700 group-hover:scale-[1.018]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,8,0.12),rgba(4,6,8,0)_48%),linear-gradient(180deg,rgba(4,6,8,0.04),rgba(4,6,8,0.78))]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-emerald">Original Live Casino IP · In development</span>
                <strong className="mt-2 block text-2xl font-semibold text-white sm:text-3xl">ELEMENTALS</strong>
              </div>
              <span className="hidden text-sm font-semibold text-white/80 sm:block">Explore concept →</span>
            </div>
          </Link>

          <Link href="/games/forest-fortune" className="group absolute bottom-[2%] left-0 w-[47%] max-w-[300px] overflow-hidden rounded-2xl border border-white/12 bg-[#06080b] shadow-[0_24px_74px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:left-[2%]">
            <div className="relative aspect-[10/7]">
              <Image src="/assets/games/forest-fortune/artwork.webp" alt="Forest Fortune artwork" fill sizes="(min-width: 1024px) 18vw, 44vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-emerald">Playable slot</span>
                <strong className="mt-1 block text-sm font-semibold text-white sm:text-base">Forest Fortune</strong>
              </div>
            </div>
          </Link>

          <Link href="/games/deep-dive" className="group absolute bottom-[1%] left-[39%] w-[43%] max-w-[270px] overflow-hidden rounded-2xl border border-white/12 bg-[#06080b] shadow-[0_24px_74px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:left-[36%]">
            <div className="relative aspect-[10/7]">
              <Image src="/assets/games/deep-dive/artwork.webp" alt="Deep Dive artwork" fill sizes="(min-width: 1024px) 17vw, 42vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-emerald">Playable slot</span>
                <strong className="mt-1 block text-sm font-semibold text-white sm:text-base">Deep Dive</strong>
              </div>
            </div>
          </Link>

          <Link href="/portfolio/lc-app" className="group absolute bottom-[3%] right-0 w-[30%] max-w-[188px] overflow-hidden rounded-2xl border border-white/12 bg-[#06080b] p-2 shadow-[0_24px_74px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:border-emerald/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:right-[2%] sm:p-3">
            <div className="relative aspect-[4/5]">
              <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-community.webp" alt="LC App concept interface" fill sizes="(min-width: 1024px) 12vw, 28vw" className="object-contain transition duration-500 group-hover:scale-[1.02]" />
            </div>
            <div className="px-1 pb-1 pt-2 sm:px-2 sm:pb-2">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-emerald">B2B product concept</span>
              <strong className="mt-1 block text-sm font-semibold text-white">LC App</strong>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}

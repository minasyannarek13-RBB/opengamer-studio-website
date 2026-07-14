import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroGenesisMotionRoot } from "@/components/home/HeroGenesisMotionRoot";
import type { Game } from "@/content/games";

type HeroGenesisProps = {
  featuredGame: Game;
  productGames?: Game[];
  motionMode?: "firstVisit" | "returning";
};

export function HeroGenesis({ featuredGame, productGames = [featuredGame], motionMode = "firstVisit" }: HeroGenesisProps) {
  const productPanels = productGames.slice(0, 4);

  return (
    <HeroGenesisMotionRoot className="relative isolate overflow-hidden border-b border-white/10 py-16 sm:py-20 lg:min-h-[760px] lg:py-28" motionMode={motionMode}>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.026),transparent_34%),radial-gradient(circle_at_69%_41%,rgba(46,230,166,0.105),transparent_27rem),radial-gradient(circle_at_52%_50%,rgba(255,255,255,0.04),transparent_20rem)]" />
      <div aria-hidden="true" data-genesis-part="background-grid" className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(circle_at_67%_44%,black,transparent_72%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="max-w-3xl" data-genesis-part="content">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald" data-genesis-part="eyebrow">Full-Cycle iGaming Studio</p>
          <h1 className="text-balance mt-5 text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl" data-genesis-part="headline">
            We Engineer the Future of iGaming.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300" data-genesis-part="supporting-copy">
            Full-cycle game development, technology and production solutions for operators, aggregators and game providers.
          </p>
          <div className="mt-8 flex flex-col gap-4" data-genesis-part="actions">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/services" className="w-full sm:w-auto">
                Explore Our Capabilities
              </Button>
              <Button href="/games" variant="secondary" className="w-full sm:w-auto">
                View Our Games
              </Button>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-emerald underline-offset-4 transition hover:translate-x-0.5 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[540px] lg:min-h-[560px]" data-genesis-part="visual">
          <div aria-hidden="true" className="absolute left-1/2 top-[42%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045] bg-black/[0.08] blur-0" />
          <div aria-hidden="true" data-genesis-part="visual-grid" className="absolute inset-0 subtle-grid [mask-image:radial-gradient(circle_at_56%_42%,black,transparent_68%)]" />
          <NodeLattice />
          <CoreObject />
          <div aria-hidden="true" data-genesis-part="thread" className="absolute left-[10%] top-[48%] hidden h-px w-[36%] rotate-[-8deg] bg-gradient-to-r from-transparent via-emerald/50 to-transparent sm:block" />
          <div aria-hidden="true" data-genesis-part="thread" className="absolute right-[14%] top-[56%] h-px w-[30%] rotate-[10deg] bg-gradient-to-r from-transparent via-emerald/42 to-transparent" />
          <ProductPanels games={productPanels} />

          <div data-genesis-part="artwork" className="image-frame surface-hairline absolute bottom-7 right-2 w-[52%] max-w-[270px] overflow-hidden rounded-lg border border-white/12 bg-black/45 shadow-[0_22px_70px_rgba(0,0,0,0.36)] sm:right-4 sm:w-[34%] lg:bottom-12 lg:right-2">
            <div className="relative aspect-[10/7]">
              <Image
                src={featuredGame.image}
                alt={`${featuredGame.title} artwork`}
                width={featuredGame.imageWidth}
                height={featuredGame.imageHeight}
                sizes="(min-width: 1024px) 28vw, 70vw"
                priority
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm font-semibold text-white">{featuredGame.title}</p>
                <p className="text-xs text-slate-300">Player-facing product layer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroGenesisMotionRoot>
  );
}

function ProductPanels({ games }: { games: Game[] }) {
  const positions = [
    "left-[7%] top-[10%] w-[34%] max-w-[176px]",
    "right-[4%] top-[8%] w-[31%] max-w-[164px]",
    "left-[2%] bottom-[13%] hidden w-[30%] max-w-[156px] sm:block",
    "right-[31%] bottom-[2%] hidden w-[26%] max-w-[142px] md:block"
  ];

  return (
    <div aria-label="Selected OpenGamer product artwork" data-genesis-part="product-panels">
      {games.map((game, index) => (
        <div
          key={game.slug}
          data-genesis-part="product-panel"
          className={`image-frame absolute overflow-hidden rounded-md border border-white/12 bg-black/50 shadow-[0_14px_48px_rgba(0,0,0,0.34)] transition duration-300 hover:border-emerald/30 ${positions[index]}`}
        >
          <div className="relative aspect-[10/7]">
            <Image
              src={game.image}
              alt={`${game.title} artwork`}
              width={game.imageWidth}
              height={game.imageHeight}
              sizes="(min-width: 1024px) 12vw, 30vw"
              priority={index === 0}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function NodeLattice() {
  const nodes = [
    "left-[7%] top-[18%]",
    "left-[22%] top-[35%]",
    "left-[12%] top-[64%]",
    "right-[30%] top-[16%]",
    "right-[10%] top-[39%]",
    "right-[18%] bottom-[18%]"
  ];

  return (
    <div aria-hidden="true" data-genesis-part="nodes" className="absolute inset-0">
      {nodes.map((position) => (
        <span key={position} className={`absolute h-2.5 w-2.5 rounded-full border border-emerald/50 bg-emerald/20 shadow-[0_0_18px_rgba(46,230,166,0.2)] ${position}`} />
      ))}
      <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 640 460" fill="none">
        <path data-genesis-part="thread-path" d="M70 92 L175 162 L116 286 L320 215 L492 108 L562 188 L512 365 L320 215" stroke="rgba(46,230,166,0.22)" strokeWidth="1" />
        <path data-genesis-part="thread-path" d="M175 162 L492 108 M116 286 L512 365" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function CoreObject() {
  return (
    <div aria-hidden="true" data-genesis-part="core" className="absolute left-1/2 top-[42%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 sm:h-80 sm:w-80 lg:left-[54%] lg:h-[23rem] lg:w-[23rem]">
      <div data-genesis-part="core-shell" className="h-full w-full">
        <svg viewBox="0 0 260 260" className="h-full w-full drop-shadow-[0_34px_90px_rgba(0,0,0,0.62)]">
          <defs>
            <linearGradient id="coreShell" x1="20" y1="20" x2="240" y2="240">
              <stop stopColor="#1b2b24" />
              <stop offset="0.52" stopColor="#102019" />
              <stop offset="1" stopColor="#07110d" />
            </linearGradient>
            <linearGradient id="coreGlass" x1="75" y1="60" x2="190" y2="205">
              <stop stopColor="rgba(255,255,255,0.25)" />
              <stop offset="0.55" stopColor="rgba(46,230,166,0.13)" />
              <stop offset="1" stopColor="rgba(5,16,11,0.4)" />
            </linearGradient>
            <radialGradient id="coreSignal" cx="50%" cy="50%" r="54%">
              <stop stopColor="rgba(46,230,166,0.62)" />
              <stop offset="0.6" stopColor="rgba(46,230,166,0.14)" />
              <stop offset="1" stopColor="rgba(46,230,166,0)" />
            </radialGradient>
          </defs>
          <g data-genesis-part="core-modules">
            <path d="M107 20h46c9 0 16 7 16 16v47c0 5-3 10-7 13l-32 22-32-22c-4-3-7-8-7-13V36c0-9 7-16 16-16Z" fill="url(#coreShell)" stroke="rgba(255,255,255,0.15)" />
            <path d="M240 107v46c0 9-7 16-16 16h-47c-5 0-10-3-13-7l-22-32 22-32c3-4 8-7 13-7h47c9 0 16 7 16 16Z" fill="url(#coreShell)" stroke="rgba(255,255,255,0.15)" />
            <path d="M153 240h-46c-9 0-16-7-16-16v-47c0-5 3-10 7-13l32-22 32 22c4 3 7 8 7 13v47c0 9-7 16-16 16Z" fill="url(#coreShell)" stroke="rgba(255,255,255,0.15)" />
            <path d="M20 153v-46c0-9 7-16 16-16h47c5 0 10 3 13 7l22 32-22 32c-3 4-8 7-13 7H36c-9 0-16-7-16-16Z" fill="url(#coreShell)" stroke="rgba(255,255,255,0.15)" />
          </g>
          <g data-genesis-part="core-glass">
            <rect x="78" y="78" width="104" height="104" rx="28" fill="url(#coreGlass)" stroke="rgba(46,230,166,0.34)" />
            <rect x="91" y="91" width="78" height="78" rx="20" fill="rgba(3,12,8,0.42)" stroke="rgba(255,255,255,0.12)" />
          </g>
          <g data-genesis-part="core-engineering">
            <path d="M103 108h54M103 130h54M103 152h54M130 99v62" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
            <path d="M109 116l21 14 26-17M109 144l21-14 26 17" stroke="rgba(46,230,166,0.24)" strokeWidth="1" />
            <circle cx="109" cy="116" r="2.8" fill="rgba(46,230,166,0.7)" />
            <circle cx="130" cy="130" r="3.2" fill="rgba(46,230,166,0.82)" />
            <circle cx="156" cy="113" r="2.8" fill="rgba(46,230,166,0.7)" />
            <circle cx="109" cy="144" r="2.8" fill="rgba(46,230,166,0.64)" />
            <circle cx="156" cy="147" r="2.8" fill="rgba(46,230,166,0.64)" />
          </g>
          <circle cx="130" cy="130" r="42" fill="url(#coreSignal)" />
          <circle cx="130" cy="130" r="22" fill="rgba(46,230,166,0.14)" stroke="rgba(46,230,166,0.55)" />
          <circle cx="153" cy="151" r="7" fill="rgba(246,200,95,0.42)" />
          <g data-genesis-part="core-mark">
            <rect x="111" y="115" width="38" height="30" rx="7" fill="rgba(2,9,7,0.72)" stroke="rgba(46,230,166,0.68)" />
            <rect x="118" y="122" width="6" height="16" rx="2" fill="rgba(46,230,166,0.86)" />
            <rect x="127" y="122" width="6" height="16" rx="2" fill="rgba(46,230,166,0.86)" />
            <rect x="136" y="122" width="6" height="16" rx="2" fill="rgba(46,230,166,0.86)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

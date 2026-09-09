import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    number: "01",
    kicker: "Build a Game",
    title: "From brief to playable production.",
    text: "Bring one game from concept through the disciplines the scope actually needs: mathematics, art, frontend, backend and QA.",
    href: "/services#game-production",
    tags: ["Game production", "Math & logic", "Frontend / backend"],
    proof: [
      { src: "/assets/games/forest-fortune/artwork.webp", alt: "Forest Fortune artwork" },
      { src: "/assets/games/deep-dive/artwork.webp", alt: "Deep Dive artwork" },
      { src: "/assets/games/dragon-rush/artwork.webp", alt: "Dragon Rush artwork" }
    ]
  },
  {
    number: "02",
    kicker: "Extend Your Team",
    title: "Add focused development capacity.",
    text: "Plug specialist game and engineering capacity into an existing roadmap without rebuilding the internal delivery structure around it.",
    href: "/services#delivery-and-support",
    tags: ["Dedicated development", "Specialist disciplines", "Roadmap support"]
  },
  {
    number: "03",
    kicker: "Build or Integrate Technology",
    title: "Close the engineering gap around the game.",
    text: "Use OpenGamer for frontend, backend, RGS-related engineering and integration support inside an existing iGaming environment.",
    href: "/technology",
    tags: ["Technology & integration", "RGS-related engineering", "Integration support"]
  },
  {
    number: "04",
    kicker: "Create Original IP",
    title: "Develop something that is yours from the start.",
    text: "Shape original game concepts, branded content and broader product directions with product thinking carried through into delivery.",
    href: "/portfolio",
    tags: ["Original IP", "Branded games", "Product direction"],
    proof: [
      { src: "/assets/projects/elementals/expositions/nexus-stage.webp", alt: "ELEMENTALS original Live Casino IP concept" }
    ]
  }
];

const process = [
  { number: "01", title: "Define", text: "Align the product goal, audience, scope and technical constraints before production starts.", output: "Clear scope" },
  { number: "02", title: "Design", text: "Shape mechanics, mathematics, UX, art direction and the architecture the build actually requires.", output: "Build direction" },
  { number: "03", title: "Build", text: "Coordinate production across the required disciplines, from game client and art through backend engineering.", output: "Implemented scope" },
  { number: "04", title: "Deliver", text: "Close QA, support integration and hand the product into the target environment with a defined next step.", output: "Handoff & integration" }
];

export function ManualHomepageBody() {
  return (
    <main className="bg-[#05070a] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(46,230,166,0.055),transparent_23rem),radial-gradient(circle_at_88%_78%,rgba(117,103,248,0.04),transparent_25rem)]" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/25 to-transparent" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16 xl:gap-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="premium-kicker text-xs font-semibold uppercase">How we plug in</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl xl:text-[3.5rem]">Choose the way OpenGamer fits your roadmap.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">Start with a complete game, extend an existing team, solve a technical integration gap or develop original IP. The commercial conversation begins from the scope you actually need.</p>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="OpenGamer engagement models">
                {["Full game", "Specialist scope", "Dedicated capacity", "Original IP"].map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
                ))}
              </div>
              <div className="mt-8"><Button href="/services" variant="secondary">Explore All Services</Button></div>
            </div>

            <div className="border-t border-white/10">
              {capabilities.map((item) => (
                <Link key={item.number} href={item.href} className="group relative grid gap-5 border-b border-white/10 py-8 transition duration-300 hover:border-emerald/30 sm:grid-cols-[3.2rem_1fr_auto] sm:gap-6 sm:py-10 lg:grid-cols-[3.5rem_1fr_auto]">
                  <div className="flex items-start justify-between sm:block">
                    <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-emerald/90">{item.number}</span>
                    <span aria-hidden="true" className="text-lg text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald sm:hidden">→</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-500 transition group-hover:text-emerald/80">{item.kicker}</p>
                    <h3 className="mt-2 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.015em] text-white sm:text-[1.7rem]">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{item.text}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[0.62rem] font-medium tracking-[0.04em] text-slate-500">{tag}</span>)}
                      {item.proof && (
                        <div className="ml-1 flex items-center -space-x-2" aria-label="Related OpenGamer work">
                          {item.proof.map((asset) => <span key={asset.src} className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#05070a] bg-black shadow-[0_6px_18px_rgba(0,0,0,0.35)]"><Image src={asset.src} alt={asset.alt} fill sizes="32px" className="object-cover" /></span>)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden items-center sm:flex"><span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:border-emerald/30 group-hover:bg-emerald/[0.06] group-hover:text-emerald">→</span></div>
                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gradient-to-b from-emerald/0 via-emerald/45 to-emerald/0 transition-transform duration-500 group-hover:scale-y-100" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

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
              <Image src="/assets/games/forest-fortune/artwork.webp" alt="Forest Fortune slot artwork" fill sizes="(min-width:1024px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,7,0.02)_30%,rgba(3,5,7,0.9)_100%)]" />
              <div className="absolute left-5 top-5 flex items-center gap-2"><span className="rounded-full border border-emerald/25 bg-[#07100d]/80 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-emerald backdrop-blur">Playable</span><span className="rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur">Portfolio title</span></div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald">Fantasy slot</span><h3 className="mt-2 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Forest Fortune</h3><p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Mystical forest visual direction with a verified public demo for direct evaluation.</p><span className="mt-5 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald">View game →</span></div>
            </Link>
            <Link href="/games/cake-bonanza" className="group relative min-h-[250px] overflow-hidden rounded-[1.45rem] border border-white/12 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 lg:col-span-6">
              <Image src="/assets/games/cake-bonanza/artwork.webp" alt="Cake Bonanza slot artwork" fill sizes="(min-width:1024px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/5" />
              <div className="absolute inset-0 flex items-end p-6 sm:p-7"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-slate-300">Portfolio title · No public demo</span><h3 className="mt-2 text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">Cake Bonanza</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">A confirmed dessert-themed portfolio title presented for product and commercial review.</p></div></div>
            </Link>
            <Link href="/games/dragon-rush" className="group relative min-h-[250px] overflow-hidden rounded-[1.45rem] border border-white/12 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 lg:col-span-6">
              <Image src="/assets/games/dragon-rush/artwork.webp" alt="Dragon Rush slot artwork" fill sizes="(min-width:1024px) 48vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
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

      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_16%_34%,rgba(190,88,255,0.045),transparent_28rem),radial-gradient(circle_at_76%_46%,rgba(46,230,166,0.07),transparent_30rem)]" />
        <div aria-hidden="true" className="absolute left-[-11rem] top-[16%] h-[30rem] w-[30rem] rounded-full border border-white/[0.035]" />
        <Container className="relative">
          <div className="max-w-3xl"><p className="premium-kicker text-xs font-semibold uppercase">Beyond the slot catalogue</p><h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl xl:text-[3.5rem]">Original IP and product thinking, built as separate directions.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">OpenGamer also works beyond playable slot titles. ELEMENTALS is an original Live Casino show-game concept in development. LC App is a separate in-development B2B product direction exploring social Live Casino engagement.</p></div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.55fr_0.65fr] lg:items-stretch">
            <Link href="/portfolio/elementals" className="group relative min-h-[430px] overflow-hidden rounded-[1.65rem] border border-white/12 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[520px] lg:min-h-[570px]">
              <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS original Live Casino IP studio concept" fill sizes="(min-width:1024px) 68vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.018]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.04)_24%,rgba(5,7,10,0.88)_100%)]" />
              <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-7 sm:top-7"><span className="rounded-full border border-emerald/25 bg-[#07100d]/75 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-emerald backdrop-blur">Original Live Casino IP</span><span className="rounded-full border border-white/12 bg-black/40 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur">In development</span></div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9"><p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-emerald">Original concept · Mechanics · Experience</p><h3 className="mt-3 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">ELEMENTALS</h3><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">A cinematic Live Casino show-game direction built around a central wheel, four elemental realms and a distinct host-led experience.</p><span className="mt-6 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald">Explore ELEMENTALS →</span></div>
            </Link>
            <Link href="/portfolio/lc-app" className="group relative overflow-hidden rounded-[1.65rem] border border-white/12 bg-[#06090b] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:p-7 lg:flex lg:min-h-[570px] lg:flex-col">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_55%_34%,rgba(46,230,166,0.09),transparent_18rem),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_38%)]" />
              <div className="relative flex items-center justify-between gap-3"><span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald">B2B product direction</span><span className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.13em] text-slate-400">In development</span></div>
              <div className="relative mt-6 flex min-h-[360px] flex-1 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-black/25 sm:min-h-[430px] lg:min-h-0"><div aria-hidden="true" className="absolute inset-x-[18%] top-[10%] h-[75%] rounded-full bg-emerald/[0.05] blur-3xl" /><Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App mobile product concept" fill sizes="(min-width:1024px) 27vw,70vw" className="object-contain object-center p-3 transition duration-700 group-hover:scale-[1.018] sm:p-4" /></div>
              <div className="relative mt-6"><h3 className="text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">LC App</h3><p className="mt-3 text-sm leading-6 text-slate-400">A separate product concept exploring social Live Casino engagement and creator-led product mechanics.</p><span className="mt-5 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald">Explore product direction →</span></div>
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-sm leading-6 text-slate-500">Different product directions, deliberately kept separate: playable games, original Live Casino IP and an in-development B2B application concept.</p><div className="flex flex-wrap gap-3"><Button href="/portfolio" variant="secondary">Explore Portfolio</Button><Button href="/technology" variant="secondary">Technology</Button></div></div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_48%_8%,rgba(46,230,166,0.055),transparent_25rem)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
            <div><p className="premium-kicker text-xs font-semibold uppercase">From brief to delivery</p><h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl">A production path with a clear output at every stage.</h2><p className="mt-5 max-w-lg text-base leading-7 text-slate-400">The shape changes with the project, but the discipline does not: define what matters, design what needs to exist, build the required scope and close with QA plus integration support.</p><div className="mt-8"><Button href="/services" variant="secondary">See Delivery Scope</Button></div></div>
            <div className="relative">
              <div aria-hidden="true" className="absolute bottom-0 left-[1.3rem] top-0 w-px bg-gradient-to-b from-emerald/50 via-white/10 to-transparent sm:left-[1.55rem]" />
              <div className="space-y-0">{process.map((step) => (
                <div key={step.number} className="relative grid gap-5 border-b border-white/10 py-8 pl-14 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:py-10 sm:pl-20">
                  <span className="absolute left-0 top-8 flex h-11 w-11 items-center justify-center rounded-full border border-emerald/25 bg-[#07100d] text-[0.64rem] font-semibold tracking-[0.16em] text-emerald shadow-[0_0_34px_rgba(46,230,166,0.08)] sm:top-10 sm:h-12 sm:w-12">{step.number}</span>
                  <div><h3 className="text-2xl font-semibold tracking-[-0.015em] sm:text-[1.8rem]">{step.title}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{step.text}</p></div>
                  <span className="w-fit rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-slate-400">{step.output}</span>
                </div>
              ))}</div>
            </div>
          </div>
          <div className="mt-10 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">{["Scope before theatre", "Disciplines matched to the project", "Handoff into the target environment"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-slate-400"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald" /><span>{item}</span></div>)}</div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(46,230,166,0.12),transparent_28rem),radial-gradient(circle_at_18%_85%,rgba(93,156,255,0.045),transparent_24rem)]" />
        <div aria-hidden="true" className="absolute right-[-9rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full border border-emerald/10" />
        <div aria-hidden="true" className="absolute right-[-2rem] top-[-1rem] h-[19rem] w-[19rem] rounded-full border border-white/[0.04]" />
        <Container className="relative">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-[2px] sm:px-9 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-16">
              <div>
                <p className="premium-kicker text-xs font-semibold uppercase">Start a conversation</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.01] tracking-[-0.025em] sm:text-6xl">Bring the brief. We’ll define the right scope.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Tell us what you are building, where the project stands and what your team needs next. The first conversation stays focused on the commercial and technical gap worth solving.</p>
                <div className="mt-7 flex flex-wrap gap-2" aria-label="Typical OpenGamer project conversations">
                  {["Game production", "Dedicated development", "Technology & integration", "Original IP"].map((item) => <span key={item} className="rounded-full border border-white/[0.09] bg-black/20 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>)}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:items-stretch">
                <Button href="/contact#project-enquiry" className="w-full">Discuss a Project</Button>
                <Button href="/games" variant="secondary" className="w-full">Explore Games</Button>
                <p className="mt-1 text-xs leading-5 text-slate-500">No generic intake funnel. Start from the scope that matters.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

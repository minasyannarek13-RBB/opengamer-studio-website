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
  ["01", "Define", "Product goal, audience, scope and technical constraints."],
  ["02", "Design", "Mechanics, mathematics, UX, art direction and architecture."],
  ["03", "Build", "Production across the disciplines the project actually needs."],
  ["04", "Deliver", "QA, integration support and a clear handoff into the target environment."]
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
                <Link
                  key={item.number}
                  href={item.href}
                  className="group relative grid gap-5 border-b border-white/10 py-8 transition duration-300 hover:border-emerald/30 sm:grid-cols-[3.2rem_1fr_auto] sm:gap-6 sm:py-10 lg:grid-cols-[3.5rem_1fr_auto]"
                >
                  <div className="flex items-start justify-between sm:block">
                    <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-emerald/90">{item.number}</span>
                    <span aria-hidden="true" className="text-lg text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald sm:hidden">→</span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-500 transition group-hover:text-emerald/80">{item.kicker}</p>
                    <h3 className="mt-2 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.015em] text-white sm:text-[1.7rem]">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{item.text}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[0.62rem] font-medium tracking-[0.04em] text-slate-500">{tag}</span>
                      ))}

                      {item.proof && (
                        <div className="ml-1 flex items-center -space-x-2" aria-label="Related OpenGamer work">
                          {item.proof.map((asset) => (
                            <span key={asset.src} className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#05070a] bg-black shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                              <Image src={asset.src} alt={asset.alt} fill sizes="32px" className="object-cover" />
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden items-center sm:flex">
                    <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:border-emerald/30 group-hover:bg-emerald/[0.06] group-hover:text-emerald">→</span>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gradient-to-b from-emerald/0 via-emerald/45 to-emerald/0 transition-transform duration-500 group-hover:scale-y-100" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="premium-kicker text-xs font-semibold uppercase">Selected work</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl">Start with what we actually build.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Playable slot titles, original Live Casino IP and product work show different sides of the studio without pretending they are the same thing.</p>
            </div>
            <Button href="/games" variant="secondary">View All Games</Button>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
            <Link href="/games/forest-fortune" className="group relative min-h-[430px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/40 lg:col-span-7 lg:row-span-2">
              <Image src="/assets/games/forest-fortune/artwork.webp" alt="Forest Fortune slot artwork" fill sizes="(min-width:1024px) 58vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Playable slot</span><h3 className="mt-2 text-3xl font-semibold sm:text-4xl">Forest Fortune</h3><p className="mt-2 max-w-lg text-sm text-slate-300">Explore a selected OpenGamer title and open the public demo where available.</p></div>
            </Link>
            <Link href="/games/deep-dive" className="group relative min-h-[250px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/40 lg:col-span-5">
              <Image src="/assets/games/deep-dive/artwork.webp" alt="Deep Dive slot artwork" fill sizes="(min-width:1024px) 40vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Playable slot</span><h3 className="mt-2 text-2xl font-semibold">Deep Dive</h3></div>
            </Link>
            <Link href="/portfolio/elementals" className="group relative min-h-[250px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/40 lg:col-span-5">
              <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS original Live Casino IP concept" fill sizes="(min-width:1024px) 40vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Original Live Casino IP · In development</span><h3 className="mt-2 text-2xl font-semibold">ELEMENTALS</h3></div>
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-3"><Button href="/contact?interest=portfolio#project-enquiry" variant="secondary">Request Portfolio</Button><Button href="/contact?interest=game#project-enquiry" variant="secondary">Discuss Custom Production</Button></div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="premium-kicker text-xs font-semibold uppercase">Product beyond slots</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl">Game studio thinking, applied to bigger product ideas.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">OpenGamer also develops original concepts beyond the slot catalogue. ELEMENTALS explores original Live Casino IP, while LC App represents an in-development B2B product direction. They remain separate products with separate status.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Button href="/portfolio" variant="secondary">Explore Portfolio</Button><Button href="/technology" variant="secondary">Technology</Button></div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Link href="/portfolio/elementals" className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.035]"><div className="relative aspect-[4/3]"><Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS studio concept" fill sizes="(min-width:1024px) 28vw,50vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" /></div><div className="p-5"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">Original IP</span><h3 className="mt-2 text-xl font-semibold">ELEMENTALS</h3><p className="mt-2 text-sm leading-6 text-slate-400">Original Live Casino show-game concept in development.</p></div></Link>
              <Link href="/portfolio/lc-app" className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.035]"><div className="relative aspect-[4/3] bg-black/30 p-5"><Image src="/assets/projects/lc-app/optimized/lc-app-mobile-community.webp" alt="LC App concept interface" fill sizes="(min-width:1024px) 28vw,50vw" className="object-contain p-5 transition duration-700 group-hover:scale-[1.025]" /></div><div className="p-5"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">B2B product direction</span><h3 className="mt-2 text-xl font-semibold">LC App</h3><p className="mt-2 text-sm leading-6 text-slate-400">In-development product concept exploring social Live Casino engagement.</p></div></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl"><p className="premium-kicker text-xs font-semibold uppercase">From brief to delivery</p><h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl">A clear production path, without theatre.</h2></div>
          <div className="mt-12 grid border-t border-white/10 md:grid-cols-4">
            {process.map(([number,title,text], index) => <div key={number} className={`relative border-b border-white/10 py-7 md:border-b-0 md:px-6 md:py-9 ${index > 0 ? "md:border-l" : ""}`}><span className="text-xs font-semibold tracking-[0.18em] text-emerald">{number}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(46,230,166,0.09),transparent_30rem)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="premium-kicker text-xs font-semibold uppercase">Start a conversation</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">Have a game to build or a technical gap to close?</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Send the brief, current stage and what your team needs. The first conversation stays focused on the relevant scope.</p></div>
            <Button href="/contact#project-enquiry">Discuss a Project</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

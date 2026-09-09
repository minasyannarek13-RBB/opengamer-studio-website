import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const technologyFlow = [
  ["01", "Game client", "Player-facing experience"],
  ["02", "Game services", "Session & round logic"],
  ["03", "Integration", "Wallet & API mapping"],
  ["04", "Partner environment", "Acceptance & release"]
];

export function TechnologyHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 xl:py-20">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(46,230,166,0.10),transparent_27rem),radial-gradient(circle_at_62%_82%,rgba(117,103,248,0.06),transparent_25rem),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_44%)]" />
      <div aria-hidden="true" className="absolute right-[-12rem] top-[6%] h-[36rem] w-[36rem] rounded-full border border-emerald/[0.06]" />

      <Container className="relative z-10">
        <div className="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:items-center xl:gap-20">
          <div>
            <SectionHeader
              eyebrow="Technology"
              title="Engineering the Product Layer Behind Casino Games"
              description="OpenGamer supports casino game production with front-end engineering, backend services, RGS-related development, integration workflows and delivery support."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Button href="/contact?interest=technology#project-enquiry" className="w-full min-[480px]:w-auto">Discuss Integration</Button>
              <Button href="/services#technology-and-integration" variant="secondary" className="w-full min-[480px]:w-auto">View Technical Scope</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="OpenGamer technology scope">
              {["Game clients", "Backend services", "RGS-related engineering", "Integration support"].map((item) => (
                <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>
              ))}
            </div>
          </div>

          <div className="relative" aria-label="OpenGamer technology connected to playable game work">
            <div aria-hidden="true" className="absolute inset-[8%] rounded-[3rem] bg-emerald/[0.04] blur-3xl" />

            <div className="relative grid gap-4 lg:grid-cols-[1.18fr_0.82fr] xl:block xl:min-h-[610px]">
              <Link href="/games/deep-dive" className="group relative min-h-[360px] overflow-hidden rounded-[1.65rem] border border-white/12 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[440px] xl:absolute xl:inset-x-0 xl:top-0 xl:h-[67%] xl:min-h-0">
                <Image src="/assets/games/deep-dive/artwork.webp" alt="Deep Dive playable OpenGamer game" fill priority sizes="(min-width:1280px) 50vw,(min-width:1024px) 60vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.018] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.03)_24%,rgba(4,6,8,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-emerald">Playable game · Technology around real product work</span>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Deep Dive</h2>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">A player-facing product reference connected to the client, services, integration and release layers described below.</p>
                </div>
              </Link>

              <div className="relative rounded-[1.4rem] border border-white/12 bg-[#06090b]/95 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur sm:p-5 xl:absolute xl:inset-x-[4%] xl:bottom-0">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-emerald">Engineering path</p>
                <ol className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                  {technologyFlow.map(([number, title, text], index) => (
                    <li key={title} className="relative rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5 sm:p-4">
                      <span className="text-[0.52rem] font-semibold tracking-[0.15em] text-emerald/90">{number}</span>
                      <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-slate-500">{text}</p>
                      {index < technologyFlow.length - 1 ? <span aria-hidden="true" className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-xs text-emerald/60 xl:block">→</span> : null}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

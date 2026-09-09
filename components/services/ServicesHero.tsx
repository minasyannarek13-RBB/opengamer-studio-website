import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGameStatusLabel } from "@/content/games";
import { getOptimizedGameArtwork } from "@/lib/gameAssets";
import { getCompactGameProof } from "@/lib/gameShowcase";

const scopeItems = ["Game production", "Dedicated development", "Technology & integration", "Portfolio adaptation"];
const supportItems = ["Custom game development", "Dedicated capacity", "RGS-related engineering", "Integration support"];
const primaryGameProof = getCompactGameProof().playable;

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-16 sm:py-24 xl:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_77%_28%,rgba(46,230,166,0.10),transparent_26rem),radial-gradient(circle_at_92%_72%,rgba(93,156,255,0.055),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />
      <div aria-hidden="true" className="absolute right-[-10rem] top-[8%] h-[34rem] w-[34rem] rounded-full border border-emerald/[0.07]" />

      <Container className="relative">
        <div className="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:items-center xl:gap-20">
          <div className="relative z-10 max-w-3xl">
            <SectionHeader
              eyebrow="Solutions"
              title="Bring the Problem. Build the Right Scope."
              description="OpenGamer works across game production, dedicated development, technical integration and portfolio adaptation. Start with the business need, then define only the delivery scope you actually need."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Button href="/contact#project-enquiry" className="w-full min-[480px]:w-auto">Discuss a Project</Button>
              <Button href="/games" variant="secondary" className="w-full min-[480px]:w-auto">Explore Games</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="OpenGamer solution scope">
              {scopeItems.map((item) => (
                <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-[1fr_0.44fr] xl:block xl:min-h-[600px]" aria-label="Selected OpenGamer work supporting the service offering">
            <div aria-hidden="true" className="absolute inset-[8%] hidden rounded-[3rem] bg-emerald/[0.045] blur-3xl xl:block" />

            {primaryGameProof ? (
              <Link
                href={`/games/${primaryGameProof.slug}`}
                className="group relative min-h-[310px] overflow-hidden rounded-[1.6rem] border border-white/15 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:row-span-2 sm:min-h-[540px] xl:absolute xl:left-0 xl:top-[3%] xl:h-[62%] xl:w-[72%] xl:min-h-0"
              >
                <Image src={getOptimizedGameArtwork(primaryGameProof)} alt={`${primaryGameProof.title} playable OpenGamer game`} fill priority sizes="(min-width:1280px) 43vw,(min-width:640px) 66vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.02)_30%,rgba(4,6,8,0.84)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-emerald">{getGameStatusLabel(primaryGameProof)} · Game production proof</span>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{primaryGameProof.title}</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">A public game reference behind the production offer.</p>
                </div>
              </Link>
            ) : null}

            <Link
              href="/portfolio/elementals"
              className="group relative min-h-[250px] overflow-hidden rounded-[1.45rem] border border-white/15 bg-black/45 shadow-[0_28px_90px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 xl:absolute xl:right-0 xl:top-[10%] xl:h-[45%] xl:w-[35%] xl:min-h-0"
            >
              <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS original Live Casino IP" fill sizes="(min-width:1280px) 20vw,(min-width:640px) 30vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-emerald">Original IP · In development</span>
                <strong className="mt-1.5 block text-base text-white sm:text-lg">ELEMENTALS</strong>
              </div>
            </Link>

            <Link
              href="/portfolio/lc-app"
              className="group relative min-h-[290px] overflow-hidden rounded-[1.55rem] border border-white/15 bg-[#06090b] shadow-[0_30px_95px_rgba(0,0,0,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[250px] xl:absolute xl:bottom-[3%] xl:right-[4%] xl:h-[46%] xl:w-[30%] xl:min-h-0"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(46,230,166,0.08),transparent_15rem)]" />
              <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App B2B product concept" fill sizes="(min-width:1280px) 17vw,(min-width:640px) 30vw,100vw" className="object-contain object-center p-3 transition duration-700 group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-4" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.13em] text-emerald">B2B product concept · In development</span>
                <strong className="mt-1 block text-base text-white">LC App</strong>
              </div>
            </Link>

            <div className="border-t border-white/10 pt-5 sm:col-span-2 xl:absolute xl:bottom-[4%] xl:left-0 xl:w-[58%]">
              <p className="text-[0.61rem] font-semibold uppercase tracking-[0.17em] text-slate-500">Scope around real work</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {supportItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

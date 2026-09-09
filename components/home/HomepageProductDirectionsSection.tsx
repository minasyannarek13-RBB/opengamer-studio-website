import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomepageProductDirectionsSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_16%_34%,rgba(190,88,255,0.045),transparent_28rem),radial-gradient(circle_at_76%_46%,rgba(46,230,166,0.07),transparent_30rem)]" />
      <div aria-hidden="true" className="absolute left-[-11rem] top-[16%] h-[30rem] w-[30rem] rounded-full border border-white/[0.035]" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="premium-kicker text-xs font-semibold uppercase">Beyond the slot catalogue</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl xl:text-[3.5rem]">Original IP and product thinking, built as separate directions.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">OpenGamer also works beyond playable slot titles. ELEMENTALS is an original Live Casino show-game concept in development. LC App is a separate in-development B2B product direction exploring social Live Casino engagement.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.55fr_0.65fr] lg:items-stretch">
          <Link href="/portfolio/elementals" className="group relative min-h-[430px] overflow-hidden rounded-[1.65rem] border border-white/12 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[520px] lg:min-h-[570px]">
            <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS original Live Casino IP studio concept" fill sizes="(min-width:1024px) 68vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.018] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.04)_24%,rgba(5,7,10,0.88)_100%)]" />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-7 sm:top-7"><span className="rounded-full border border-emerald/25 bg-[#07100d]/75 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-emerald backdrop-blur">Original Live Casino IP</span><span className="rounded-full border border-white/12 bg-black/40 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur">In development</span></div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9"><p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-emerald">Original concept · Mechanics · Experience</p><h3 className="mt-3 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">ELEMENTALS</h3><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">A cinematic Live Casino show-game direction built around a central wheel, four elemental realms and a distinct host-led experience.</p><span className="mt-6 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald motion-reduce:transition-none">Explore ELEMENTALS →</span></div>
          </Link>

          <Link href="/portfolio/lc-app" className="group relative overflow-hidden rounded-[1.65rem] border border-white/12 bg-[#06090b] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:p-7 lg:flex lg:min-h-[570px] lg:flex-col">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_55%_34%,rgba(46,230,166,0.09),transparent_18rem),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_38%)]" />
            <div className="relative flex items-center justify-between gap-3"><span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald">B2B product direction</span><span className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.13em] text-slate-400">In development</span></div>
            <div className="relative mt-6 flex min-h-[360px] flex-1 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-black/25 sm:min-h-[430px] lg:min-h-0"><div aria-hidden="true" className="absolute inset-x-[18%] top-[10%] h-[75%] rounded-full bg-emerald/[0.05] blur-3xl" /><Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App mobile product concept" fill sizes="(min-width:1024px) 27vw,70vw" className="object-contain object-center p-3 transition duration-700 group-hover:scale-[1.018] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-4" /></div>
            <div className="relative mt-6"><h3 className="text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">LC App</h3><p className="mt-3 text-sm leading-6 text-slate-400">A separate product concept exploring social Live Casino engagement, creator profiles and community-oriented product flows.</p><span className="mt-5 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald motion-reduce:transition-none">Explore product direction →</span></div>
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-sm leading-6 text-slate-500">Different product directions, deliberately kept separate: playable games, original Live Casino IP and an in-development B2B application concept.</p><div className="flex flex-wrap gap-3"><Button href="/portfolio" variant="secondary">Explore Portfolio</Button><Button href="/technology" variant="secondary">Technology</Button></div></div>
      </Container>
    </section>
  );
}

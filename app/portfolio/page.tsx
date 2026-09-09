import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { GameCard } from "@/components/sections/GameCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { games } from "@/content/games";

export const metadata: Metadata = {
  title: "Portfolio | OpenGamer Studio",
  description: "Explore selected OpenGamer casino games, original concepts and product work across slots, Live Casino and B2B gaming technology.",
  alternates: { canonical: "/portfolio" }
};

const proofModes = [
  ["01", "Playable games", "Public game pages and demos where available.", "Production proof"],
  ["02", "Original IP", "Distinct product concepts with development status kept explicit.", "Product proof"],
  ["03", "Product interfaces", "B2B product and UX direction beyond conventional slot production.", "Interface proof"],
  ["04", "Commercial scope", "Work that can frame licensing, custom production and development discussions.", "Commercial proof"]
];

const gameProof = [
  { title: "Forest Fortune", slug: "forest-fortune", image: "/assets/games/forest-fortune/artwork.webp", status: "Playable" },
  { title: "Deep Dive", slug: "deep-dive", image: "/assets/games/deep-dive/artwork.webp", status: "Playable" },
  { title: "Dragon Rush", slug: "dragon-rush", image: "/assets/games/dragon-rush/artwork.webp", status: "Playable" },
  { title: "Cake Bonanza", slug: "cake-bonanza", image: "/assets/games/cake-bonanza/artwork.webp", status: "Portfolio title" }
];

const selectedGameSlugs = ["forest-fortune", "deep-dive", "dragon-rush", "cake-bonanza", "dragon-fruits", "goblin-gems"];
const selectedGames = selectedGameSlugs.map((slug) => games.find((game) => game.slug === slug)).filter(Boolean) as typeof games;

export default function PortfolioPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-14 sm:py-20 lg:py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(46,230,166,0.10),transparent_28rem),radial-gradient(circle_at_92%_76%,rgba(93,156,255,0.045),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_46%)]" />
        <div aria-hidden="true" className="absolute right-[-12rem] top-[8%] h-[34rem] w-[34rem] rounded-full border border-emerald/[0.06]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-center lg:gap-16 xl:gap-20">
            <div>
              <SectionHeader eyebrow="OpenGamer portfolio" title="Games, Original IP and Product Work You Can Inspect" description="A portfolio across playable slot production, original Live Casino IP and B2B product-interface work, with status kept deliberately clear." headingLevel="h1" />
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="/games" className="w-full min-[480px]:w-auto">Explore Games</Button>
                <Button href="/contact?interest=portfolio#project-enquiry" variant="secondary" className="w-full min-[480px]:w-auto">Discuss Portfolio</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Portfolio proof types">
                {["Playable games", "Portfolio titles", "Original IP", "Product interfaces"].map((item) => <span key={item} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-slate-400">{item}</span>)}
              </div>
            </div>

            <div className="relative min-h-[620px] sm:min-h-[690px] lg:min-h-[670px]" aria-label="Selected OpenGamer portfolio work">
              <div aria-hidden="true" className="absolute inset-[8%] rounded-[3rem] bg-emerald/[0.04] blur-3xl" />
              <Link href="/portfolio/elementals" className="group absolute left-0 top-0 h-[60%] w-[72%] overflow-hidden rounded-[1.6rem] border border-white/15 bg-black/45 shadow-[0_34px_110px_rgba(0,0,0,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <Image src="/assets/projects/elementals/expositions/nexus-studio-wheel.webp" alt="ELEMENTALS original Live Casino IP" fill priority sizes="(min-width:1280px) 47vw,(min-width:1024px) 45vw,75vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.03)_22%,rgba(4,6,8,0.90)_100%)]" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-6 sm:top-6"><span className="rounded-full border border-emerald/25 bg-[#07100d]/80 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-emerald backdrop-blur">Original Live Casino IP</span><span className="rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur">In development</span></div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7"><h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">ELEMENTALS</h2><p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">Original show-game product thinking built around a cinematic wheel, four elemental realms and a host-led experience.</p></div>
              </Link>

              <Link href="/portfolio/lc-app" className="group absolute right-0 top-[7%] h-[53%] w-[31%] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#06090b] shadow-[0_30px_95px_rgba(0,0,0,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(46,230,166,0.09),transparent_16rem)]" />
                <Image src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App B2B product concept interface" fill sizes="(min-width:1280px) 19vw,(min-width:1024px) 18vw,36vw" className="object-contain object-center p-3 transition duration-700 group-hover:scale-[1.015] sm:p-4" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/92 via-black/65 to-transparent p-4 sm:p-5"><span className="text-[0.53rem] font-semibold uppercase tracking-[0.14em] text-emerald">B2B product concept · In development</span><strong className="mt-1.5 block text-lg text-white">LC App</strong></div>
              </Link>

              <div className="absolute inset-x-0 bottom-0">
                <div className="mb-3 flex items-end justify-between gap-4"><div><p className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-slate-500">Game production proof</p><p className="mt-1 text-sm text-slate-400">Playable and portfolio titles from the OpenGamer catalogue.</p></div><Link href="/games" className="hidden text-sm font-semibold text-white/75 transition hover:text-emerald sm:inline-flex">View all games →</Link></div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {gameProof.map((game) => <Link key={game.slug} href={`/games/${game.slug}`} className="group/game relative overflow-hidden rounded-xl border border-white/10 bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"><div className="relative aspect-[10/7] overflow-hidden"><Image src={game.image} alt={`${game.title} artwork`} fill sizes="(min-width:1024px) 14vw,(min-width:640px) 23vw,48vw" className="object-cover transition duration-500 group-hover/game:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/88 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-3"><span className="text-[0.48rem] font-semibold uppercase tracking-[0.12em] text-emerald">{game.status}</span><strong className="mt-0.5 block text-xs text-white sm:text-sm">{game.title}</strong></div></div></Link>)}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(46,230,166,0.04),transparent_24rem)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeader eyebrow="What the portfolio proves" title="Different Proof for Different Buyer Questions" description="A playable game, an original IP and a B2B product concept prove different things. The portfolio keeps those proof types separate instead of pretending they are interchangeable." /></div>
          <div className="border-t border-white/10">{proofModes.map(([number, title, description, mode]) => <div key={title} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[3.5rem_0.8fr_1.2fr_auto] sm:items-start sm:gap-6 sm:py-8"><span className="text-[0.68rem] font-semibold tracking-[0.18em] text-emerald">{number}</span><div><span className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-slate-500">{mode}</span><h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{title}</h3></div><p className="text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{description}</p><span aria-hidden="true" className="hidden text-lg text-white/25 sm:block">→</span></div>)}</div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black/20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(220,164,95,0.045),transparent_23rem),radial-gradient(circle_at_88%_76%,rgba(108,207,222,0.04),transparent_22rem)]" />
        <div className="relative">
          <SectionHeader eyebrow="Original product work" title="Two Directions Beyond Conventional Slot Production" description="ELEMENTALS and LC App are deliberately shown differently because they represent different kinds of product work." />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.28fr_0.72fr] lg:items-stretch">
            <Link href="/portfolio/elementals" className="group relative min-h-[430px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 shadow-[0_28px_90px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[520px]"><Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS Nexus stage" fill sizes="(min-width:1024px) 62vw,100vw" className="object-cover transition duration-700 group-hover:scale-[1.018]" /><div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/14 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-emerald">Original Live Casino IP · In development</span><h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">ELEMENTALS</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">A premium show-game concept built around a Great Wheel, four elemental bonus realms and a dealer-host presentation.</p><span className="mt-5 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald">Explore the concept →</span></div></Link>
            <Link href="/portfolio/lc-app" className="group relative min-h-[430px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#06090b] shadow-[0_28px_90px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:min-h-[520px]"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(108,207,222,0.08),transparent_18rem)]" /><Image src="/assets/projects/lc-app/optimized/lc-app-mobile-creator-profile.webp" alt="LC App creator profile concept interface" fill sizes="(min-width:1024px) 35vw,100vw" className="object-contain object-center p-5 transition duration-700 group-hover:scale-[1.015] sm:p-7" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-6 sm:p-7"><span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-emerald">B2B product concept · In development</span><h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">LC App</h2><p className="mt-3 text-sm leading-6 text-slate-300">A social and creator-led product direction for existing Live Casino ecosystems.</p><span className="mt-5 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-emerald">Explore product direction →</span></div></Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Casino games" title="Playable and Portfolio Titles" description="A mixed sample of OpenGamer game work. Verified public demos are marked Playable; confirmed catalogue titles without a public demo remain visible as portfolio work." />
          <Link href="/games" className="text-sm font-semibold text-emerald transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">View full game catalogue →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-3" data-reveal-group="cards">
          {selectedGames.map((game) => <GameCard key={game.slug} game={game} />)}
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-slate-500">Portfolio titles without a public demo are not hidden or downgraded. Their status and available commercial action are shown explicitly.</p>
          <Button href="/contact?interest=portfolio#project-enquiry" variant="secondary">Discuss a Portfolio Title</Button>
        </div>
      </Section>

      <CTASection title="Use the Portfolio as a Starting Point" description="Discuss a playable title, portfolio-only game, original concept or new production brief with OpenGamer." ctaLabel="Discuss a Project" ctaHref="/contact?interest=portfolio#project-enquiry" secondaryLabel="View Services" secondaryHref="/services" />
    </SiteShell>
  );
}

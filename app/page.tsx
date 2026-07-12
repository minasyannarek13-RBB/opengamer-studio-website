import type { Metadata } from "next";
import Image from "next/image";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { GameCard } from "@/components/sections/GameCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { architectureFlow, coreCapabilities, developmentProcess, partnershipModels, whyOpenGamer } from "@/content/services";
import { games } from "@/content/games";

const studioSignals = ["Game production", "RGS technology", "Integration support", "QA and launch support"];

export const metadata: Metadata = {
  title: "OpenGamer Studio | iGaming Development Studio",
  description:
    "OpenGamer designs, develops and delivers casino games and gaming technology for operators, aggregators, platforms and game providers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OpenGamer Studio | Game Development, Engineered for Scale",
    description: "Full-cycle iGaming development studio for custom slot game development, RGS technology and casino game integration.",
    url: "/",
    siteName: "OpenGamer Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenGamer Studio",
    description: "Casino game development, RGS technology and integration support."
  }
};

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 py-14 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">Full-Cycle iGaming Development Studio</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
              Casino Game Development and RGS Technology
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              OpenGamer designs, develops and delivers casino games and gaming technology for operators, aggregators,
              platforms and game providers.
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {studioSignals.map((signal) => (
                <div key={signal} className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-slate-200">
                  {signal}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Discuss a Project</Button>
              <Button href="/games" variant="secondary">
                Explore Games
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {games.slice(0, 4).map((game, index) => (
              <div
                key={game.slug}
                className={
                  index % 2
                    ? "relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:translate-y-8"
                    : "relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                }
              >
                <div className="aspect-[10/7] overflow-hidden">
                  <Image
                    src={game.image}
                    alt={`${game.title} artwork`}
                    width={game.imageWidth}
                    height={game.imageHeight}
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="h-full w-full object-cover"
                    priority={index < 2}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-white">{game.title}</p>
                  <p className="mt-1 text-xs text-slate-500">Confirmed OpenGamer title</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeader title="One Studio. Full Production Capability." description="A single delivery structure across game production, mathematics, engineering, integration and support." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreCapabilities.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Featured Games" title="Game Portfolio" description="Confirmed OpenGamer titles using official public artwork and local optimized assets." />
          <Button href="/games" variant="secondary">
            Explore Our Games
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Technology"
              title="Technology Behind Every Title"
              description="OpenGamer supports the technical layer behind casino games, from player client and API connectivity to RGS, game logic, wallet communication, reporting and monitoring."
            />
            <Button href="/technology" variant="secondary" className="mt-6">
              Explore Our Technology
            </Button>
          </div>
          <ArchitectureDiagram items={architectureFlow} />
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Process" title="Development Process" description="A repeatable delivery pipeline from first discovery through launch and support." />
        <div className="mt-8">
          <ProcessTimeline items={developmentProcess} />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Partnership Models" title="Ways to Work Together" description="Engagements are structured around the business outcome, not a fixed package." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partnershipModels.map((model) => (
            <Card key={model}>
              <h3 className="text-lg font-semibold text-white">{model}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Why OpenGamer" title="Built for Long-Term B2B Delivery" />
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {whyOpenGamer.map((item) => (
            <div key={item} className="rounded-lg border border-line bg-white/[0.04] p-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Let's Build the Right Product Together"
        description="Tell us what you want to build, integrate, modernize or scale. Our team will review the requirements and propose the appropriate engagement model."
      />
    </SiteShell>
  );
}

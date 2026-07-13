import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { GameCard } from "@/components/sections/GameCard";
import { HeroGenesis } from "@/components/home/HeroGenesis";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { architectureFlow, developmentProcess, partnershipModels, whyOpenGamer } from "@/content/services";
import { games } from "@/content/games";
import { portfolioProjects } from "@/content/portfolio";
import { capabilitiesUniverse, futureProducts, integrationItems, lifecycleStages, technologyCoreItems } from "@/content/home";

export const metadata: Metadata = {
  title: "OpenGamer Studio | Game Development, Engineered for Scale",
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
  const featuredGames = games.slice(0, 6);
  const heroGame = games[0];

  return (
    <SiteShell>
      <HeroGenesis featuredGame={heroGame} />

      <Section>
        <SectionHeader
          eyebrow="OpenGamer Positioning"
          title="One Accountable Product, Creative and Engineering Team"
          description="OpenGamer brings casino game development, art, mathematics, RGS-related engineering, integration and support into one delivery structure."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {["Development studio", "Technology partner", "Game product company"].map((item) => (
            <Card key={item} tone="strong">
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Built for operators, aggregators, platforms, game providers and strategic partners that need credible B2B delivery.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader
          eyebrow="Full Game Lifecycle"
          title="From Product Direction to Launch Support"
          description="The delivery model connects product thinking, production craft and technical execution without splitting accountability across unrelated vendors."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {lifecycleStages.map((stage) => (
            <Card key={stage.title}>
              <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{stage.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Capabilities Universe"
          title="Full-Cycle Capabilities. One Studio."
          description="The website shows each commercial capability clearly without turning OpenGamer into a generic outsourcing catalogue."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilitiesUniverse.map((item) => (
            <div key={item} className="rounded-lg border border-line bg-white/[0.045] p-4 text-sm font-medium text-slate-200">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Featured Games" title="Confirmed Game Portfolio" description="Official OpenGamer titles using local optimized artwork and public demo links where available." />
          <Button href="/games" variant="secondary">
            Explore Our Games
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Technology Core"
          title="Built Around the Game and the Operating Layer"
          description="OpenGamer combines player-facing production with the technical layers needed to integrate, operate and support casino content."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologyCoreItems.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="RGS and Integration"
              title="Connectivity Without Unsupported Promises"
              description="OpenGamer supports RGS-related development, API connectivity, wallet flows, reporting and monitoring while avoiding fixed timeline or certification guarantees before technical discovery."
            />
            <Button href="/technology" variant="secondary" className="mt-6">
              Explore Our Technology
            </Button>
          </div>
          <div className="grid gap-6">
            <ArchitectureDiagram items={architectureFlow} />
            <div className="grid gap-3 sm:grid-cols-2">
              {integrationItems.map((item) => (
                <div key={item} className="rounded-lg border border-line bg-white/[0.045] px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Partnership Models" title="Ways to Work Together" description="Engagements are structured around the business outcome, not a fixed package." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partnershipModels.map((model) => (
            <Card key={model}>
              <h3 className="text-lg font-semibold text-white">{model}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader
          eyebrow="Live Casino and Future Products"
          title="Product Concepts Beyond Standard Slot Delivery"
          description="OpenGamer is building a broader portfolio around live casino concepts, social engagement layers and original product IP."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {futureProducts.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              <Button href={item.href} variant="link" className="mt-5">
                View details
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Production Process" title="A Controlled Path from Discovery to Support" description="The public process follows the approved eight-stage structure without fixed certification or integration timing claims." />
        <div className="mt-10">
          <ProcessTimeline items={developmentProcess} />
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Why OpenGamer" title="Built for Long-Term B2B Delivery" />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {whyOpenGamer.map((item) => (
            <div key={item} className="premium-card rounded-lg border border-line bg-white/[0.045] p-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20">
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

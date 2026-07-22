import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { serviceGroups } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | OpenGamer Studio",
  description: "Casino game production, backend and RGS-related development, integrations, live casino product design and dedicated iGaming development teams.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="OpenGamer Services"
            title="iGaming Game Development and Product Engineering"
            description="OpenGamer supports casino game production, front-end and backend development, integrations, product design and dedicated technical delivery."
            headingLevel="h1"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss a Project</Button>
            <Button href="/portfolio" variant="secondary">
              Explore the Portfolio
            </Button>
          </div>
          <nav className="mt-10 flex gap-2 overflow-x-auto pb-1" aria-label="Service areas">
            {serviceGroups.map((group) => (
              <a
                key={group.title}
                href={`#${toServiceId(group.title)}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-300 transition hover:border-emerald/45 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>
      {serviceGroups.map((group, index) => (
        <Section key={group.title} id={toServiceId(group.title)} className={index % 2 ? "bg-black/20" : ""}>
          <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">
            <SectionHeader eyebrow={group.eyebrow} title={group.title} description={group.description} />
            <div className="grid gap-5">
              {group.items.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </Section>
      ))}
      <CTASection
        title="Need a Defined Scope or an Embedded Team?"
        description="Share the project type, target platform, integration requirements and launch stage. OpenGamer will suggest the right engagement model."
      />
    </SiteShell>
  );
}

function toServiceId(title: string) {
  return title.toLowerCase().replaceAll(" and ", "-").replaceAll(" ", "-");
}

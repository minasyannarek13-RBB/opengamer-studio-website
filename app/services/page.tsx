import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { serviceGroups } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | OpenGamer Studio",
  description: "Custom slot game development, RGS development, casino game integration, art production and dedicated iGaming development teams.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Full-Cycle iGaming Development Services"
            description="OpenGamer combines game production, RGS technology, integration, QA, live operations and dedicated teams in one delivery structure."
            headingLevel="h1"
          />
        </Container>
      </section>
      {serviceGroups.map((group, index) => (
        <Section key={group.title} className={index % 2 ? "bg-black/20" : ""}>
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

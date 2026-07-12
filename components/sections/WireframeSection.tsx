import type { Locale } from "@/content/types";
import type { WireframeSection as WireframeSectionData } from "@/lib/wireframe";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { StudioCard } from "@/components/sections/StudioCard";
import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { TechnologyCard } from "@/components/sections/TechnologyCard";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { CTASection } from "@/components/sections/CTASection";
import { getLocalizedPath } from "@/lib/routes";

function localizedHref(locale: Locale, href = "/contact") {
  return getLocalizedPath(locale, href);
}

function SectionHeading({ section }: { section: WireframeSectionData }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{section.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{section.title}</h2>
      </div>
      <p className="max-w-xl text-sm leading-6 text-slate-400">{section.body}</p>
    </div>
  );
}

function ProjectTypeForm() {
  const fields = ["Company", "Project type", "Timeline", "Message"];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-glow">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field} className={field === "Message" ? "md:col-span-2" : ""}>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {field}
            </label>
            <div className={`rounded-2xl border border-white/10 bg-black/20 ${field === "Message" ? "h-32" : "h-12"}`} />
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button>Send Inquiry</Button>
        <Button variant="secondary">View Portfolio</Button>
      </div>
    </div>
  );
}

export function WireframeSection({ section, locale }: { section: WireframeSectionData; locale: Locale }) {
  const items = section.items ?? [];

  if (section.component === "CTASection") {
    return (
      <Section className="pt-0">
        <CTASection
          title={section.title}
          body={section.body}
          primaryHref={localizedHref(locale, section.primaryHref ?? "/portfolio")}
          secondaryHref={localizedHref(locale, section.secondaryHref ?? "/contact")}
          primaryLabel="View Portfolio"
          secondaryLabel="Contact Us"
        />
      </Section>
    );
  }

  return (
    <Section className="pt-0">
      <SectionHeading section={section} />

      {section.component === "StudioCard" ? (
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <StudioCard
              key={item.title}
              title={item.title}
              body={item.body}
              href={localizedHref(locale, item.href)}
              meta={item.meta}
            />
          ))}
        </div>
      ) : null}

      {section.component === "CapabilityCard" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <CapabilityCard key={item.title} title={item.title} body={item.body} meta={item.meta} />
          ))}
        </div>
      ) : null}

      {section.component === "PortfolioCard" ? (
        <div className={`grid gap-4 ${section.strong ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"}`}>
          {items.map((item, index) => (
            <PortfolioCard
              key={item.title}
              title={item.title}
              body={item.body}
              href={localizedHref(locale, item.href)}
              meta={item.meta}
              featured={section.strong && index === 0}
            />
          ))}
        </div>
      ) : null}

      {section.component === "TechnologyCard" ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <TechnologyCard key={item.title} title={item.title} body={item.body} meta={item.meta} index={index + 1} />
          ))}
        </div>
      ) : null}

      {section.component === "ContactBlock" ? (
        <ContactBlock items={items.map((item) => ({ ...item, href: localizedHref(locale, item.href) }))} />
      ) : null}

      {section.component === "ProjectTypeForm" ? <ProjectTypeForm /> : null}

      {section.component !== "ContactBlock" && section.component !== "ProjectTypeForm" ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={localizedHref(locale, section.primaryHref ?? "/portfolio")}>View Portfolio</Button>
          <Button href={localizedHref(locale, section.secondaryHref ?? "/contact")} variant="secondary">
            Contact Us
          </Button>
        </div>
      ) : null}
    </Section>
  );
}

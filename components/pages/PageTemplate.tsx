import type { Locale, PageContent } from "@/content/types";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { WireframeSection } from "@/components/sections/WireframeSection";
import { getWireframePage } from "@/lib/wireframe";
import { getLocalizedPath } from "@/lib/routes";

export function PageTemplate({ locale, content }: { locale: Locale; content: PageContent }) {
  const portfolioHref = getLocalizedPath(locale, "/portfolio");
  const contactHref = getLocalizedPath(locale, "/contact");
  const wireframe = getWireframePage(content.key);

  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero content={content} primaryHref={portfolioHref} secondaryHref={contactHref} />
        {wireframe.sections.map((section) => (
          <WireframeSection key={section.title} section={section} locale={locale} />
        ))}
      </main>
      <Footer />
    </>
  );
}

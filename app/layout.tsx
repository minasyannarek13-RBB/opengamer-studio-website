import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { company, logoAsset } from "@/content/company";
import { robotsConfig, siteUrl } from "@/lib/site";
import { ScrollRevealController } from "@/components/motion/ScrollRevealController";

const localeBootstrapScript = `(() => {
  const locale = location.pathname.split('/')[1];
  if (['en', 'ru', 'hy', 'es', 'pt'].includes(locale)) {
    document.documentElement.lang = locale;
  }
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpenGamer Studio | iGaming Development Studio",
    template: "%s"
  },
  description: "An iGaming development studio focused on casino games, technology, integrations and product delivery.",
  robots: robotsConfig,
  icons: {
    apple: "/assets/brand/apple-touch-icon.png",
    icon: [
      { url: "/assets/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/brand/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ]
  },
  openGraph: {
    siteName: "OpenGamer Studio",
    type: "website",
    images: [{ url: "/assets/brand/opengamer-og.png", width: 1200, height: 630, alt: "OpenGamer brand image" }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/brand/opengamer-og.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.website,
  logo: `${siteUrl}${logoAsset.src}`,
  ...(company.email ? { email: company.email } : {}),
  ...(company.social.length ? { sameAs: company.social.map((item) => item.href) } : {})
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OpenGamer Studio",
  url: siteUrl
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBootstrapScript }} />
      </head>
      <body>
        <ScrollRevealController />
        <div id="site-status" className="sr-only" role="status" aria-live="polite" aria-atomic="true" />
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </body>
    </html>
  );
}

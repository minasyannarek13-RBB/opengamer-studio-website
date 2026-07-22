import type { Metadata } from "next";
import "@/styles/globals.css";
import { company } from "@/content/company";
import { siteUrl } from "@/lib/site";
import { ScrollRevealController } from "@/components/motion/ScrollRevealController";

const isPreviewEnvironment =
  process.env.VERCEL_ENV === "preview" ||
  (Boolean(process.env.VERCEL_URL) && process.env.VERCEL_ENV !== "production") ||
  (Boolean(process.env.NEXT_PUBLIC_SITE_URL) && process.env.NEXT_PUBLIC_SITE_URL !== "https://open-gamer.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpenGamer Studio | iGaming Development Studio",
    template: "%s"
  },
  description: "An iGaming development studio focused on casino games, technology, integrations and product delivery.",
  robots: isPreviewEnvironment
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false
        }
      }
    : {
        index: true,
        follow: true
      },
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.website,
  logo: `${siteUrl}/assets/brand/opengamer-logo.png`,
  email: company.email,
  telephone: company.phone,
  address: company.address,
  sameAs: company.social.map((item) => item.href)
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollRevealController />
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}

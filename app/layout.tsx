import type { Metadata } from "next";
import "@/styles/globals.css";
import { company } from "@/content/company";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpenGamer Studio | iGaming Development Studio",
    template: "%s"
  },
  description: "Full-cycle iGaming development studio for casino game development, RGS technology and integration.",
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

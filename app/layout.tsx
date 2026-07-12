import type { Metadata } from "next";
import "@/styles/globals.css";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

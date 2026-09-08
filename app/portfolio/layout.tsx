import type { Metadata } from "next";

const title = "Portfolio | OpenGamer Studio";
const description = "Explore selected OpenGamer casino games, original concepts and product work across slots, Live Casino and B2B gaming technology.";
const image = "/assets/brand/opengamer-og.png";

export const metadata: Metadata = {
  openGraph: {
    title,
    description,
    url: "/portfolio",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "OpenGamer portfolio" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

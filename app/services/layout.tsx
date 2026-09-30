import type { Metadata } from "next";

const title = "Solutions | OpenGamer Studio";
const description = "iGaming development for casino games, Live Casino products, frontend and backend engineering, integrations, portfolio work and dedicated teams.";
const image = "/assets/brand/opengamer-og.png";

export const metadata: Metadata = {
  openGraph: {
    title,
    description,
    url: "/services",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "OpenGamer Studio solutions" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

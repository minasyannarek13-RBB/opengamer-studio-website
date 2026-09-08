import type { Metadata } from "next";

const title = "Live Casino Development | OpenGamer Studio";
const description = "Live Casino game and show-format development across concept, mathematics, player UX, presenter flows and technical product design.";
const image = "/assets/projects/elementals/expositions/nexus-stage.webp";

export const metadata: Metadata = {
  openGraph: {
    title,
    description,
    url: "/services/live-casino-development",
    type: "website",
    images: [{ url: image, width: 1200, height: 676, alt: "ELEMENTALS Nexus stage concept by OpenGamer" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function LiveCasinoDevelopmentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

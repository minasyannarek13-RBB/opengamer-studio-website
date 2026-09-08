import type { Metadata } from "next";

const title = "ELEMENTALS | Live Casino Show Game Concept — OpenGamer";
const description = "ELEMENTALS is an original cinematic Live Casino show-game concept in development, built around the Great Wheel and four elemental realms.";
const image = "/assets/projects/elementals/expositions/nexus-stage.webp";

export const metadata: Metadata = {
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function ElementalsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

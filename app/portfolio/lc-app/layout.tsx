import type { Metadata } from "next";

const title = "LC App | Social Product Concept for Live Casino — OpenGamer";
const description = "LC App is an OpenGamer product concept exploring a social discovery and engagement layer for existing Live Casino ecosystems.";
const image = "/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp";

export const metadata: Metadata = {
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function LcAppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

const title = "Technology | OpenGamer Studio";
const description = "Frontend, backend, RGS-related engineering and integration support for casino games and iGaming products.";
const image = "/assets/brand/opengamer-og.png";

export const metadata: Metadata = {
  openGraph: {
    title,
    description,
    url: "/technology",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "OpenGamer technology and engineering" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function TechnologyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

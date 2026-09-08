import type { Metadata } from "next";

const title = "About | OpenGamer Studio";
const description = "OpenGamer is an iGaming development studio combining casino game production, product thinking and engineering for B2B partners.";
const image = "/assets/brand/opengamer-og.png";

export const metadata: Metadata = {
  openGraph: {
    title,
    description,
    url: "/about",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "OpenGamer Studio" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

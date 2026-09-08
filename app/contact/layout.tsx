import type { Metadata } from "next";

const title = "Contact | OpenGamer Studio";
const description = "Discuss casino game production, product engineering, integrations, portfolio opportunities or dedicated iGaming development support with OpenGamer.";
const image = "/assets/brand/opengamer-og.png";

export const metadata: Metadata = {
  openGraph: {
    title,
    description,
    url: "/contact",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "OpenGamer Studio" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [image] }
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

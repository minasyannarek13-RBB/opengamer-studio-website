import Image from "next/image";
import type { HomeSlide } from "@/content/studioHomepage";

export function HeroVisual({ slide, priority }: { slide: HomeSlide; priority?: boolean }) {
  switch (slide.visualType) {
    case "studio-ecosystem":
      return <StudioEcosystemVisual priority={priority} />;
    case "game-stack":
      return <GamePortfolioVisual priority={priority} />;
    case "elementals":
      return <ElementalsVisual slide={slide} priority={priority} />;
    case "device-ecosystem":
      return <LcAppVisual slide={slide} priority={priority} />;
    case "technology-system":
      return <TechnologySystemVisual priority={priority} />;
    case "custom-product":
      return <CustomProductVisual priority={priority} />;
  }
}

function FramedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  contain = false
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  contain?: boolean;
}) {
  return (
    <div className={`hero-visual-card ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 32vw, 78vw"
        className={`h-full w-full ${contain ? "object-contain p-3" : "object-cover"}`}
      />
    </div>
  );
}

export function StudioEcosystemVisual({ priority }: { priority?: boolean }) {
  return (
    <div className="hero-visual hero-visual--studio">
      <div className="hero-visual__brand-panel">
        <Image
          src="/assets/brand/opengamer-logo.webp"
          alt="OpenGamer logo"
          width={1280}
          height={306}
          priority={priority}
          sizes="(min-width: 1024px) 360px, 260px"
          className="h-auto w-full"
        />
        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
          <span>Games</span>
          <span>Products</span>
          <span>Technology</span>
        </div>
      </div>
      <FramedImage src="/assets/games/forest-fortune/source.jpg" alt="Forest Fortune game artwork" width={600} height={420} className="hero-visual__layer hero-visual__layer--game" contain />
      <FramedImage src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="ELEMENTALS stage preview" width={1200} height={676} className="hero-visual__layer hero-visual__layer--elementals" />
      <FramedImage src="/assets/projects/lc-app/optimized/lc-app-mobile-social-feed.webp" alt="LC App mobile interface preview" width={864} height={1821} className="hero-visual__layer hero-visual__layer--phone" contain />
      <div className="hero-visual__tech-surface" aria-hidden="true">
        <span>API</span>
        <span>Game Logic</span>
        <span>Delivery</span>
      </div>
    </div>
  );
}

export function GamePortfolioVisual({ priority }: { priority?: boolean }) {
  return (
    <div className="hero-visual hero-visual--games">
      <FramedImage src="/assets/games/forest-fortune/source.jpg" alt="Forest Fortune game artwork" width={600} height={420} className="hero-game-stack__main" priority={priority} contain />
      <FramedImage src="/assets/games/deep-dive/artwork.webp" alt="Deep Dive game artwork" width={600} height={420} className="hero-game-stack__side hero-game-stack__side--a" contain />
      <FramedImage src="/assets/games/dragon-rush/artwork.webp" alt="Dragon Rush game artwork" width={600} height={420} className="hero-game-stack__side hero-game-stack__side--b" contain />
      <FramedImage src="/assets/games/sweet-wins/artwork.webp" alt="Sweet Wins game artwork" width={600} height={420} className="hero-game-stack__side hero-game-stack__side--c" contain />
    </div>
  );
}

export function ElementalsVisual({ slide, priority }: { slide: HomeSlide; priority?: boolean }) {
  return (
    <div className="hero-visual hero-visual--elementals">
      <Image src={slide.image} alt={slide.imageAlt} width={slide.imageWidth} height={slide.imageHeight} priority={priority} sizes="(min-width: 1024px) 56vw, 100vw" className="h-full w-full object-cover object-center" />
    </div>
  );
}

export function LcAppVisual({ slide, priority }: { slide: HomeSlide; priority?: boolean }) {
  return (
    <div className="hero-visual hero-visual--lc">
      <Image src={slide.image} alt={slide.imageAlt} width={slide.imageWidth} height={slide.imageHeight} priority={priority} sizes="(min-width: 1024px) 56vw, 100vw" className="h-full w-full object-contain p-4 sm:p-6" />
      <FramedImage src="/assets/projects/lc-app/optimized/lc-app-mobile-discover.webp" alt="LC App discovery interface" width={864} height={1821} className="hero-lc__phone" contain />
    </div>
  );
}

export function TechnologySystemVisual({ priority }: { priority?: boolean }) {
  return (
    <div className="hero-visual hero-visual--technology">
      <FramedImage src="/assets/games/deep-dive/artwork.webp" alt="Deep Dive game artwork connected to technology delivery" width={600} height={420} className="hero-tech__game" priority={priority} contain />
      {["Game Client", "Game Logic", "Backend Services", "RNG / RGS", "API and Integrations", "Custom Product Layer"].map((item, index) => (
        <div key={item} className="hero-tech__node" data-index={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export function CustomProductVisual({ priority }: { priority?: boolean }) {
  return (
    <div className="hero-visual hero-visual--custom">
      <FramedImage src="/assets/games/choco-boom/artwork.webp" alt="Choco Boom game artwork used as a custom product visual example" width={600} height={420} className="hero-custom__game" priority={priority} contain />
      <div className="hero-custom__flow" aria-hidden="true">
        <span>Brand Identity</span>
        <span>Game Concept</span>
        <span>Interface</span>
        <span>Product</span>
      </div>
    </div>
  );
}

import type { CSSProperties, ReactNode } from "react";
import type { HomeSlide } from "@/content/studioHomepage";

export function HeroVisual({ slide }: { slide: HomeSlide; priority?: boolean }) {
  switch (slide.visualType) {
    case "studio-ecosystem":
      return <StudioUniverseVisual />;
    case "game-stack":
      return <SlotMechanicsVisual />;
    case "elementals":
      return <ElementalEnergyVisual />;
    case "device-ecosystem":
      return <SocialNetworkVisual />;
    case "technology-system":
      return <TechnologyFlowVisual />;
    case "custom-product":
      return <CustomProductVisual />;
  }
}

function HeroVisualShell({ variant, children }: { variant: string; children: ReactNode }) {
  return (
    <div className={`hero-visual hero-visual--abstract hero-visual--${variant}`} aria-hidden="true">
      <div className="hero-visual__depth-grid" />
      <div className="hero-visual__nebula hero-visual__nebula--a" />
      <div className="hero-visual__nebula hero-visual__nebula--b" />
      <HeroParticles />
      {children}
      <div className="hero-visual__vignette" />
    </div>
  );
}

function StudioUniverseVisual() {
  return (
    <HeroVisualShell variant="studio">
      <HeroOrbit className="hero-orbit--primary" />
      <HeroOrbit className="hero-orbit--wide" />
      <div className="hero-core hero-core--studio">
        <span className="hero-core__mark">OG</span>
      </div>
      <HeroHudPanel className="hero-hud--studio-a" items={["Games", "Products", "Tech"]} />
      <HeroHudPanel className="hero-hud--studio-b" items={["Logic", "API", "Delivery"]} />
      <div className="hero-landscape">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} style={{ "--i": index } as CSSProperties} />
        ))}
      </div>
    </HeroVisualShell>
  );
}

function SlotMechanicsVisual() {
  return (
    <HeroVisualShell variant="slots">
      <div className="slot-mechanics">
        {Array.from({ length: 5 }).map((_, reel) => (
          <div key={reel} className="slot-reel" style={{ "--reel": reel } as CSSProperties}>
            {["7", "◇", "×", "33"].map((symbol) => (
              <span key={symbol}>{symbol}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="slot-payline slot-payline--a" />
      <div className="slot-payline slot-payline--b" />
      <HeroHudPanel className="hero-hud--slots" items={["Concept", "Math", "Frontend", "Backend"]} />
      <div className="hero-formula-grid">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </HeroVisualShell>
  );
}

function ElementalEnergyVisual() {
  return (
    <HeroVisualShell variant="elementals">
      <div className="elemental-core" />
      <HeroOrbit className="hero-orbit--elemental" />
      {[
        ["fire", "F"],
        ["water", "W"],
        ["air", "A"],
        ["earth", "E"]
      ].map(([element, label]) => (
        <div key={element} className={`elemental-node elemental-node--${element}`}>
          <span>{label}</span>
        </div>
      ))}
      <div className="elemental-stream elemental-stream--fire" />
      <div className="elemental-stream elemental-stream--water" />
      <div className="elemental-stream elemental-stream--air" />
      <div className="elemental-stream elemental-stream--earth" />
    </HeroVisualShell>
  );
}

function SocialNetworkVisual() {
  const nodes = ["host", "table", "chat", "group", "live", "reaction", "player", "community"];

  return (
    <HeroVisualShell variant="lc">
      <div className="social-hub">
        <span>LIVE</span>
      </div>
      <div className="social-rings" />
      {nodes.map((node, index) => (
        <div key={node} className="social-node" data-node={index}>
          <HeroGlyph type={node === "chat" ? "chat" : node === "reaction" ? "heart" : "person"} />
        </div>
      ))}
      <div className="social-connection social-connection--a" />
      <div className="social-connection social-connection--b" />
      <div className="social-connection social-connection--c" />
    </HeroVisualShell>
  );
}

function TechnologyFlowVisual() {
  return (
    <HeroVisualShell variant="technology">
      <div className="tech-flow-core">
        <span>API</span>
      </div>
      <div className="tech-flow-line tech-flow-line--a" />
      <div className="tech-flow-line tech-flow-line--b" />
      <div className="tech-flow-line tech-flow-line--c" />
      {["Frontend", "Logic", "Backend", "Wallet", "Session", "Reports"].map((item, index) => (
        <div key={item} className="tech-node" data-node={index}>
          {item}
        </div>
      ))}
    </HeroVisualShell>
  );
}

function CustomProductVisual() {
  return (
    <HeroVisualShell variant="custom">
      <div className="product-cube">
        <span />
        <span />
        <span />
      </div>
      <HeroOrbit className="hero-orbit--product" />
      {["Idea", "Design", "Game", "Product"].map((item, index) => (
        <div key={item} className="product-layer" data-layer={index}>
          {item}
        </div>
      ))}
      <div className="product-surface product-surface--a" />
      <div className="product-surface product-surface--b" />
    </HeroVisualShell>
  );
}

function HeroOrbit({ className = "" }: { className?: string }) {
  return (
    <svg className={`hero-orbit ${className}`} viewBox="0 0 520 520">
      <circle cx="260" cy="260" r="204" />
      <circle cx="260" cy="260" r="145" />
      <path d="M96 260h328M260 96v328M145 145l230 230M375 145 145 375" />
    </svg>
  );
}

function HeroHudPanel({ className = "", items }: { className?: string; items: string[] }) {
  return (
    <div className={`hero-hud ${className}`}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function HeroParticles() {
  return (
    <div className="hero-particles">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ "--i": index } as CSSProperties} />
      ))}
    </div>
  );
}

function HeroGlyph({ type }: { type: "person" | "chat" | "heart" }) {
  if (type === "chat") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.5h14v8H9l-4 3v-11Z" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 4.6-7 9-7 9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    </svg>
  );
}

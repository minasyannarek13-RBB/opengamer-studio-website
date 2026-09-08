type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2";
};

export function SectionHeader({ eyebrow, title, description, align = "left", headingLevel = "h2" }: SectionHeaderProps) {
  const isCenter = align === "center";
  const Heading = headingLevel;

  return (
    <div className={isCenter ? "reveal mx-auto min-w-0 max-w-3xl text-center" : "reveal min-w-0 max-w-3xl"}>
      {eyebrow ? (
        <p className="premium-kicker mb-4 break-words text-xs font-semibold uppercase">{eyebrow}</p>
      ) : null}
      <Heading
        className={
          headingLevel === "h1"
            ? "max-w-5xl break-words text-balance text-[clamp(2.45rem,7vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-white lg:text-6xl"
            : "max-w-4xl break-words text-balance text-[clamp(2rem,5.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white"
        }
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 max-w-2xl break-words text-[0.98rem] leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </div>
  );
}

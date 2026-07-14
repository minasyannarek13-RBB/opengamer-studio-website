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
    <div className={isCenter ? "reveal mx-auto max-w-3xl text-center" : "reveal max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald">{eyebrow}</p>
      ) : null}
      <Heading className={headingLevel === "h1" ? "text-balance max-w-5xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl" : "text-balance max-w-4xl text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl"}>
        {title}
      </Heading>
      {description ? <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}

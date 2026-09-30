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
  const wrapperClass = isCenter ? "reveal mx-auto max-w-5xl text-center" : "reveal max-w-5xl";
  const headingClass = `${
    headingLevel === "h1"
      ? "text-balance max-w-[15ch] text-4xl font-semibold leading-[1.01] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem]"
      : "text-balance max-w-[19ch] text-3xl font-semibold leading-[1.04] tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.7rem]"
  } ${isCenter ? "mx-auto" : ""}`;
  const descriptionClass = `mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-[1.05rem] sm:leading-8 ${isCenter ? "mx-auto" : ""}`;

  return (
    <div className={wrapperClass}>
      {eyebrow ? <p className="premium-kicker mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">{eyebrow}</p> : null}
      <Heading className={headingClass}>{title}</Heading>
      {description ? <p className={descriptionClass}>{description}</p> : null}
    </div>
  );
}

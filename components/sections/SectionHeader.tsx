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
      ? "text-balance max-w-5xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl"
      : "text-balance max-w-4xl text-3xl font-semibold leading-[1.06] tracking-normal text-white sm:text-4xl"
  } ${isCenter ? "mx-auto" : ""}`;
  const descriptionClass = `mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 ${isCenter ? "mx-auto" : ""}`;

  return (
    <div className={wrapperClass}>
      {eyebrow ? <p className="premium-kicker mb-4 text-xs font-semibold uppercase">{eyebrow}</p> : null}
      <Heading className={headingClass}>{title}</Heading>
      {description ? <p className={descriptionClass}>{description}</p> : null}
    </div>
  );
}

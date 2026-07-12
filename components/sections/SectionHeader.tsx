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
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald">{eyebrow}</p>
      ) : null}
      <Heading className={headingLevel === "h1" ? "text-4xl font-semibold tracking-normal text-white sm:text-5xl" : "text-3xl font-semibold tracking-normal text-white sm:text-4xl"}>
        {title}
      </Heading>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}

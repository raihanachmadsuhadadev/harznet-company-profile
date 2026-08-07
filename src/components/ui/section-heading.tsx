type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingId?: string;
  headingLevel?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  headingId,
  headingLevel: Heading = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={headingId}
        className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
      >
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

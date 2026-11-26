type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="max-w-2xl">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">
        <span className="h-px w-6 bg-accent-400/70" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export function SectionHeading({ badge, title, subtitle, align = "left" }: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="badge badge-sage mb-4">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-olive" />
        {badge}
      </span>
      <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className={`text-sm leading-relaxed text-muted ${isCentered ? "mx-auto max-w-xl" : "max-w-lg"}`}>
        {subtitle}
      </p>
    </div>
  );
}


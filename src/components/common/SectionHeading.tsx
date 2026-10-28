interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
}
export default function SectionHeading({
  badge,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow mb-4">{badge}</p>
      <h2 className="display-heading text-4xl sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

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
        <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
                {badge}
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {title}
            </h2>
            {description ? (
                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                    {description}
                </p>
            ) : null}
        </div>
    );
}

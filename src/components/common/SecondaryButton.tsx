import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonProps {
    href: string;
    children: ReactNode;
    target?: string;
}

export default function SecondaryButton({
    href,
    children,
    target,
}: SecondaryButtonProps) {
    return (
        <Link
            href={href}
            target={target}
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
        >
            {children}
        </Link>
    );
}

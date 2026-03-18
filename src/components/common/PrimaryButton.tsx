import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
    href: string;
    children: ReactNode;
    target?: string;
}

export default function PrimaryButton({
    href,
    children,
    target,
}: PrimaryButtonProps) {
    return (
        <Link
            href={href}
            target={target}
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02]"
        >
            {children}
        </Link>
    );
}

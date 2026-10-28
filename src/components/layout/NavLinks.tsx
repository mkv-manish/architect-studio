"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { navigationIcons } from "@/components/layout/navigationIcons";
export default function NavLinks({
  onNavigate,
  variant = "header",
}: {
  onNavigate?: () => void;
  variant?: "header" | "sidebar";
}) {
  const pathname = usePathname();
  return navigation.map(({ label, href }) => {
    const active = href === "/" ? pathname === href : pathname.startsWith(href);
    const Icon = navigationIcons[href];
    return (
      <Link
        key={href}
        href={href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={
          variant === "sidebar"
            ? `sidebar-nav-link ${active ? "sidebar-nav-link-active" : ""}`
            : `nav-link ${active ? "text-[#dfc39c]" : "text-white/65"}`
        }
      >
        {variant === "sidebar" && (
          <span
            className={`sidebar-icon ${active ? "sidebar-icon-active" : ""}`}
          >
            <Icon size={18} aria-hidden="true" />
          </span>
        )}
        <span className={variant === "sidebar" ? "flex-1" : undefined}>
          {label}
        </span>
        {variant === "sidebar" && (
          <ChevronRight
            size={15}
            aria-hidden="true"
            className={active ? "text-[#dfc39c]" : "text-white/25"}
          />
        )}
      </Link>
    );
  });
}

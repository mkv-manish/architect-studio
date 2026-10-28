import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};
export default function ButtonLink({
  variant = "primary",
  className = "",
  target,
  ...props
}: Props) {
  return (
    <Link
      {...props}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`button-link ${variant === "primary" ? "button-primary" : "button-secondary"} ${className}`}
    />
  );
}

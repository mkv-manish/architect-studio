import type { ReactNode } from "react";
interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
}
export default function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: PageIntroProps) {
  return (
    <div className="page-intro">
      <div className="max-w-3xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-description mt-5 max-w-2xl">{description}</p>
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  );
}

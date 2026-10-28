import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
export function createMetadata(
  title: string,
  description = siteConfig.description,
  path = "/",
  image?: string,
): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const socialImage = {
    url: absoluteUrl(image || "/opengraph-image"),
    alt: image
      ? title
      : `${siteConfig.name} — Architecture & planning in Giridih`,
    ...(!image ? { width: 1200, height: 630 } : {}),
  };
  return {
    title: fullTitle,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_IN",
      url: absoluteUrl(path),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}

import { siteConfig } from "@/lib/constants";
import { absoluteUrl } from "@/lib/metadata";
export const businessId = `${siteConfig.url}/#studio`;
export function studioSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phoneRaw,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Giridih",
          addressRegion: "Jharkhand",
          addressCountry: "IN",
        },
        image: absoluteUrl("/projects/villa-1.webp"),
        logo: absoluteUrl("/icon.svg"),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "en-IN",
        publisher: { "@id": businessId },
      },
    ],
  };
}
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      }),
    ),
  };
}

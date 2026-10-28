import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(siteConfig.isPlaceholderDomain ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

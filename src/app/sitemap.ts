import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, priority: 1 },
    { url: `${siteConfig.url}/about`, priority: 0.8 },
    { url: `${siteConfig.url}/services`, priority: 0.8 },
    { url: `${siteConfig.url}/projects`, priority: 0.9 },
    { url: `${siteConfig.url}/contact`, priority: 0.8 },
  ];
}
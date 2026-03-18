import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export function createMetadata(title: string, description?: string): Metadata {
  return {
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.description,
  };
}
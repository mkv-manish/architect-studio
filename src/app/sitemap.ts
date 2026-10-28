import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { services } from "@/data/services";
import { navigation, consultationLink } from "@/lib/navigation";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...navigation.map((item) => ({
      path: item.href,
      images: item.href === "/" ? [projects[0].images[0]] : undefined,
    })),
    { path: consultationLink.href },
    ...services.map((service) => ({ path: `/services/${service.slug}` })),
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      images: project.images,
    })),
  ];
  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    ...("images" in page && page.images
      ? { images: page.images.map((image) => `${siteConfig.url}${image}`) }
      : {}),
  }));
}

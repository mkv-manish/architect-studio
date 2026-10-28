import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
export const metadata: Metadata = {
  ...createMetadata("Home Design & Planning in Giridih"),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  category: "Architecture and design",
  robots: {
    index: !siteConfig.isPlaceholderDomain,
    follow: true,
    googleBot: {
      index: !siteConfig.isPlaceholderDomain,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}

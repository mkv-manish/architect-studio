import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
    title: `${siteConfig.name} | Home, Building & Blueprint Experts`,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

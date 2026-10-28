// Reserved dummy domain for preview. Set NEXT_PUBLIC_SITE_URL before publishing.
const configuredUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://btcdesignstudio.example",
);
if (!["https:", "http:"].includes(configuredUrl.protocol)) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be an absolute HTTP or HTTPS URL.",
  );
}
export const siteConfig = {
  name: "BTC Design Studio",
  description:
    "Home design, building planning, floor plans, front elevations, and blueprints by BTC Design Studio in Giridih, Jharkhand. Discuss your project with us.",
  phone: "+91 7004701470",
  phoneRaw: "+917004701470",
  whatsapp: "917004701470",
  email: "devmanish2810@gmail.com",
  address: "Giridih, Jharkhand, India",
  url: configuredUrl.origin,
  isPlaceholderDomain:
    configuredUrl.hostname.endsWith(".example") ||
    ["localhost", "127.0.0.1", "[::1]"].includes(configuredUrl.hostname),
};

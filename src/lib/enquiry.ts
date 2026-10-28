import { z } from "zod";
import { siteConfig } from "@/lib/constants";
export function localDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
const requiredText = (label: string, minimum = 2) =>
  z
    .string()
    .trim()
    .min(minimum, `${label} is required`)
    .max(2000, "Please keep this under 2,000 characters");
const name = requiredText("Your name").max(
  100,
  "Please keep your name under 100 characters",
);
const phone = z
  .string()
  .trim()
  .regex(/^\+?[\d\s()-]+$/, "Enter a valid phone number")
  .refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }, "Enter a phone number with 10–15 digits");
const message = requiredText("Project details", 10);
export const enquirySchema = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("enquiry"),
    name,
    phone,
    projectType: requiredText("Project type"),
    message,
  }),
  z.object({
    mode: z.literal("consultation"),
    name,
    phone,
    city: requiredText("Your city"),
    meetingDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date")
      .refine((value) => {
        const parsed = new Date(`${value}T12:00:00`);
        return (
          !Number.isNaN(parsed.getTime()) &&
          `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}` ===
            value &&
          value >= localDate()
        );
      }, "Choose today or a future date"),
    contactMethod: z.enum(["WhatsApp", "Phone call", "Site discussion"], {
      error: "Choose a contact method",
    }),
    message,
  }),
]);
export type EnquiryValues = z.infer<typeof enquirySchema>;
export function enquiryUrl(data: EnquiryValues) {
  const lines = [
    data.mode === "enquiry" ? "New project enquiry" : "Consultation request",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];
  if (data.mode === "enquiry") lines.push(`Project type: ${data.projectType}`);
  else
    lines.push(
      `City: ${data.city}`,
      `Preferred date: ${data.meetingDate}`,
      `Contact method: ${data.contactMethod}`,
    );
  lines.push("", "Project details:", data.message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

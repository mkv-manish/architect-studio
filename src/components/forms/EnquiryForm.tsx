"use client";
import { useId, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
  House,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";
import { enquirySchema, enquiryUrl, localDate } from "@/lib/enquiry";

type Mode = "enquiry" | "consultation";
type Errors = Record<string, string>;
type TextField = "name" | "phone" | "projectType" | "city" | "meetingDate";
export default function EnquiryForm({
  initialMode = "enquiry",
}: {
  initialMode?: Mode;
}) {
  const id = useId();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setFallbackUrl("");
    const form = event.currentTarget;
    const result = enquirySchema.safeParse({
      ...Object.fromEntries(new FormData(form)),
      mode,
    });
    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const field = String(issue.path[0]);
        next[field] ??= issue.message;
      });
      setErrors(next);
      form
        .querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
        ?.focus();
      return;
    }
    setErrors({});
    const url = enquiryUrl(result.data);
    // Open synchronously during the user gesture; provide a link if popups are blocked.
    try {
      const popup = window.open("about:blank", "_blank");
      if (popup) {
        popup.opener = null;
        popup.location.href = url;
        setStatus(
          "Your message is ready in WhatsApp. Send it there to share your request with us.",
        );
      } else {
        setStatus(
          "Your browser blocked the new window. Use the link below to continue to WhatsApp.",
        );
      }
    } catch {
      setStatus(
        "Use the link below to continue to WhatsApp and send your request.",
      );
    }
    setFallbackUrl(url);
  }
  const field = (
    name: TextField,
    label: string,
    placeholder: string,
    type = "text",
  ) => {
    const Icon = (
      {
        name: UserRound,
        phone: Phone,
        projectType: House,
        city: MapPin,
        meetingDate: CalendarDays,
      } as const
    )[name];
    return (
      <div>
        <label
          htmlFor={`${id}-${name}`}
          className="mb-2 block text-sm text-white/75"
        >
          {label} <span className="text-[#dfc39c]">*</span>
        </label>
        <div className="relative">
          <Icon
            size={16}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
          />
          <input
            id={`${id}-${name}`}
            name={name}
            type={type}
            placeholder={placeholder}
            required
            min={type === "date" ? localDate() : undefined}
            maxLength={name === "phone" ? 25 : 100}
            autoComplete={
              name === "name"
                ? "name"
                : name === "phone"
                  ? "tel"
                  : name === "city"
                    ? "address-level2"
                    : undefined
            }
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}
            className="form-input has-icon"
          />
        </div>
        {errors[name] && (
          <p id={`${id}-${name}-error`} className="mt-2 text-xs text-red-300">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };
  return (
    <div className="rounded-lg border border-white/10 bg-[#0c1924] p-5 sm:p-7">
      <div
        className="mb-6 grid grid-cols-2 gap-2 rounded-md border border-white/10 p-1"
        role="group"
        aria-label="Request type"
      >
        {(["enquiry", "consultation"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => {
              setMode(value);
              setErrors({});
              setStatus("");
              setFallbackUrl("");
            }}
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded px-2 text-xs sm:text-sm transition ${mode === value ? "bg-[#dfc39c] font-semibold text-[#08131c]" : "text-white/60 hover:bg-white/5"}`}
          >
            {value === "enquiry" ? (
              <ClipboardList size={16} aria-hidden="true" />
            ) : (
              <CalendarDays size={16} aria-hidden="true" />
            )}
            {value === "enquiry" ? "Project enquiry" : "Consultation"}
          </button>
        ))}
      </div>
      <h2 className="text-xl font-semibold tracking-tight">
        {mode === "enquiry"
          ? "Start your project enquiry."
          : "Request a design consultation."}
      </h2>
      <p className="mb-6 mt-3 text-sm leading-7 text-white/55">
        {mode === "enquiry"
          ? "Add your details below, then review and send your message on WhatsApp."
          : "Choose a preferred date. We’ll confirm a suitable time with you on WhatsApp."}
      </p>
      <form onSubmit={submit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {field("name", "Your name", "Full name")}
          {field("phone", "Phone number", "+91 …", "tel")}
        </div>
        {mode === "enquiry" ? (
          field("projectType", "Project type", "House, duplex, commercial…")
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              {field("city", "City", "Your project location")}
              {field("meetingDate", "Preferred date", "", "date")}
            </div>
            <div>
              <label
                htmlFor={`${id}-contactMethod`}
                className="mb-2 block text-sm text-white/75"
              >
                Preferred contact method{" "}
                <span className="text-[#dfc39c]">*</span>
              </label>
              <select
                name="contactMethod"
                id={`${id}-contactMethod`}
                required
                defaultValue=""
                className="form-input"
                aria-invalid={Boolean(errors.contactMethod)}
                aria-describedby={
                  errors.contactMethod ? `${id}-contactMethod-error` : undefined
                }
              >
                <option value="" disabled>
                  Choose a contact method
                </option>
                <option>WhatsApp</option>
                <option>Phone call</option>
                <option>Site discussion</option>
              </select>
              {errors.contactMethod && (
                <p
                  id={`${id}-contactMethod-error`}
                  className="mt-2 text-xs text-red-300"
                >
                  {errors.contactMethod}
                </p>
              )}
            </div>
          </>
        )}
        <div>
          <label
            htmlFor={`${id}-message`}
            className="mb-2 block text-sm text-white/75"
          >
            Project details <span className="text-[#dfc39c]">*</span>
          </label>
          <textarea
            name="message"
            id={`${id}-message`}
            required
            maxLength={2000}
            rows={4}
            placeholder="Plot size, number of floors, location, or ideas you’d like to explore…"
            className="form-input resize-y"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${id}-message-error` : undefined
            }
          />
          {errors.message && (
            <p id={`${id}-message-error`} className="mt-2 text-xs text-red-300">
              {errors.message}
            </p>
          )}
        </div>
        <p className="text-xs leading-6 text-white/45">
          All fields are required. Your details will be included in a WhatsApp
          message. You choose when to send it.
        </p>
        <button type="submit" className="button-link button-primary w-full">
          <MessageCircle size={18} /> Continue on WhatsApp{" "}
          <ArrowUpRight size={17} />
        </button>
        {status && (
          <div
            role="status"
            className="rounded border border-[#dfc39c]/25 bg-[#dfc39c]/5 p-4 text-sm leading-7 text-[#dfc39c]"
          >
            {status}
            {fallbackUrl && (
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block underline underline-offset-4"
              >
                Open WhatsApp
              </a>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

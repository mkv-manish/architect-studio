"use client";

import { useState } from "react";
import { Building2, MessageCircle, Phone, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/lib/constants";

const contactSchema = z.object({
    name: z.string().min(2, "Name required"),
    phone: z.string().min(10, "Valid phone required"),
    projectType: z.string().min(2, "Project type required"),
    message: z.string().min(10, "Project details required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [status, setStatus] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setStatus(null);

            const whatsappMessage = `
New Project Enquiry

Name: ${data.name}
Phone: ${data.phone}
Project Type: ${data.projectType}

Project Details:
${data.message}
      `.trim();

            const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                whatsappMessage,
            )}`;

            window.open(whatsappUrl, "_blank");

            setStatus({
                type: "success",
                message:
                    "WhatsApp open ho gaya hai. Ab enquiry message send kar dijiye.",
            });
        } catch {
            setStatus({
                type: "error",
                message: "WhatsApp open nahi ho paya. Dobara try kijiye.",
            });
        }
    };

    return (
        <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-8">
            <div className="mb-6 flex flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                    <MessageCircle className="h-4 w-4" />
                    Quick Enquiry
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        Start Your Project Discussion
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                        Apni project enquiry bhejiye. Submit karte hi WhatsApp
                        open hoga jisme aapka message automatically ready
                        rahega.
                    </p>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200">
                    Fast response ke liye enquiry directly WhatsApp par bheji
                    jayegi.
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                {status ? (
                    <div
                        className={`rounded-2xl border px-4 py-3 text-sm ${
                            status.type === "success"
                                ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                                : "border-red-400/25 bg-red-400/10 text-red-200"
                        }`}
                    >
                        {status.message}
                    </div>
                ) : null}

                <div>
                    <label className="mb-2 block text-sm text-white/70">
                        Your Name
                    </label>
                    <div className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 transition focus-within:border-white/25 focus-within:bg-white/10">
                        <User2 className="h-4 w-4 text-white/45" />
                        <input
                            {...register("name")}
                            placeholder="Enter your name"
                            className="h-full w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        />
                    </div>
                    {errors.name && (
                        <p className="mt-2 text-sm text-red-300">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm text-white/70">
                        Phone Number
                    </label>
                    <div className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 transition focus-within:border-white/25 focus-within:bg-white/10">
                        <Phone className="h-4 w-4 text-white/45" />
                        <input
                            {...register("phone")}
                            placeholder="Enter phone number"
                            className="h-full w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        />
                    </div>
                    {errors.phone && (
                        <p className="mt-2 text-sm text-red-300">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm text-white/70">
                        Project Type
                    </label>
                    <div className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 transition focus-within:border-white/25 focus-within:bg-white/10">
                        <Building2 className="h-4 w-4 text-white/45" />
                        <input
                            {...register("projectType")}
                            placeholder="House Design / Duplex / Building Plan"
                            className="h-full w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        />
                    </div>
                    {errors.projectType && (
                        <p className="mt-2 text-sm text-red-300">
                            {errors.projectType.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm text-white/70">
                        Project Details
                    </label>
                    <textarea
                        {...register("message")}
                        placeholder="Plot size, floors, style, location ya project details likhiye..."
                        className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/10"
                    />
                    {errors.message && (
                        <p className="mt-2 text-sm text-red-300">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <button
                    disabled={isSubmitting}
                    className="mt-2 inline-flex h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <MessageCircle className="h-5 w-5" />
                    {isSubmitting
                        ? "Opening WhatsApp..."
                        : "Send Enquiry on WhatsApp"}
                </button>
            </form>
        </div>
    );
}

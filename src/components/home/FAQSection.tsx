"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-12 lg:py-16">
            <Container>
                <SectionHeading
                    badge="FAQ"
                    title="Frequently Asked Questions"
                    description="Client ke doubts clear karne ke liye useful section."
                />

                <div className="mt-10 space-y-4">
                    {faqItems.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={item.question}
                                className={`overflow-hidden rounded-[24px] border backdrop-blur-xl transition-all duration-300 ${
                                    isActive
                                        ? "border-white/20 bg-white/12 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                                        : "border-white/10 bg-white/8 hover:bg-white/10"
                                }`}
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(isActive ? null : index)
                                    }
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition ${
                                                isActive
                                                    ? "border-white/20 bg-white/10 text-white"
                                                    : "border-white/10 bg-white/5 text-white/70"
                                            }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <span
                                            className={`pr-2 text-base font-medium leading-7 sm:text-lg transition ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-white/85"
                                            }`}
                                        >
                                            {item.question}
                                        </span>
                                    </div>

                                    <span
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                            isActive
                                                ? "rotate-180 border-white/20 bg-white/10 text-white"
                                                : "border-white/10 bg-white/5 text-white/60"
                                        }`}
                                    >
                                        <ChevronDown className="h-5 w-5" />
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isActive
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6">
                                            <p className="max-w-[95%] text-sm leading-7 text-white/65 sm:text-base">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { heroPoints, featuredSlides, previewCards } from "@/data/hero";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />

            <Container>
                <div className="grid gap-10 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="min-w-0 flex flex-col justify-center"
                    >
                        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                            <Sparkles className="h-4 w-4" />
                            Professional Architecture Studio
                        </div>

                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                            Home & Building Designs
                            <span className="block text-white/70">
                                That Turn Visitors Into Clients
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                            Hum modern home design, blueprint, floor planning,
                            front elevation aur building layouts banate hain.
                            Yeh website aapke kaam ko premium tarike se
                            dikhayegi taki zyada clients enquiry bhejen.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <PrimaryButton href="/projects">
                                View Projects{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </PrimaryButton>

                            <SecondaryButton href="/contact">
                                Free Consultation
                            </SecondaryButton>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-2">
                            {heroPoints.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-xl"
                                >
                                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="min-w-0 rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl sm:p-6"
                    >
                        <div className="grid min-w-0 gap-5 rounded-[28px] border border-white/10 bg-black/10 p-4 sm:p-5">
                            <div className="min-w-0 rounded-[24px] border border-white/10 bg-white/10 p-4 sm:p-5">
                                <p className="text-sm text-white/60">
                                    Featured Concept
                                </p>

                                <div className="mt-4 min-w-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 2800,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{ clickable: true }}
                                        loop
                                        className="hero-featured-slider w-full min-w-0"
                                    >
                                        {featuredSlides.map((slide) => (
                                            <SwiperSlide
                                                key={slide.title}
                                                className="w-full min-w-0"
                                            >
                                                <div className="w-full min-w-0 p-4">
                                                    <div className="mb-4 min-w-0">
                                                        <h3 className="truncate text-xl font-semibold text-white sm:text-2xl">
                                                            {slide.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm text-white/60">
                                                            {slide.location}
                                                        </p>
                                                    </div>

                                                    <div className="relative w-full overflow-hidden rounded-[22px] border border-white/10">
                                                        <div className="relative h-[220px] w-full sm:h-[260px] lg:h-[290px]">
                                                            <Image
                                                                src={
                                                                    slide.image
                                                                }
                                                                alt={
                                                                    slide.title
                                                                }
                                                                fill
                                                                priority
                                                                className="object-cover"
                                                            />
                                                        </div>

                                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                                                            <div className="flex flex-wrap gap-2">
                                                                {slide.tags.map(
                                                                    (tag) => (
                                                                        <span
                                                                            key={
                                                                                tag
                                                                            }
                                                                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white sm:text-xs"
                                                                        >
                                                                            {
                                                                                tag
                                                                            }
                                                                        </span>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    {previewCards.map((card) => (
                                        <div
                                            key={card.title}
                                            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                                        >
                                            <div className="relative h-24 w-full">
                                                <Image
                                                    src={card.image}
                                                    alt={card.title}
                                                    fill
                                                    className="object-cover transition duration-300 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="px-3 py-2 text-center text-sm text-white/80">
                                                {card.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                                    2D Layout
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                                    3D Elevation
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                                    Site Planning
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

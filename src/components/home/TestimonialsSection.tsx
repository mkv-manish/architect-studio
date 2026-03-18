"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({
    quote,
    name,
    location,
}: {
    quote: string;
    name: string;
    location: string;
}) {
    return (
        <div className="h-full rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-1 text-white/80">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className="h-4 w-4 fill-white/80 text-white/80"
                    />
                ))}
            </div>

            <p className="text-sm leading-7 text-white/75 sm:text-base">
                “{quote}”
            </p>

            <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{name}</p>
                <p className="text-sm text-white/55">{location}</p>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const useSlider = testimonials.length > 3;

    return (
        <section className="py-12 lg:py-16">
            <Container>
                <SectionHeading
                    badge="Testimonials"
                    title="What Clients Say"
                    description="Yeh section trust build karta hai aur serious enquiry ko push karta hai."
                />

                {useSlider ? (
                    <div className="mt-10">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: ".testimonials-progressbar",
                                renderBullet: (_, className) =>
                                    `<span class="${className}"></span>`,
                            }}
                            loop
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1280: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="testimonials-slider"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id} className="h-auto">
                                    <TestimonialCard
                                        quote={item.quote}
                                        name={item.name}
                                        location={item.location}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="testimonials-progressbar mt-6 flex items-center justify-center gap-2" />
                    </div>
                ) : (
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {testimonials.map((item) => (
                            <TestimonialCard
                                key={item.id}
                                quote={item.quote}
                                name={item.name}
                                location={item.location}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}

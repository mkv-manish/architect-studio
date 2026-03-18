"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface ProjectSliderProps {
    images: string[];
    title: string;
}
export default function ProjectSlider({ images, title }: ProjectSliderProps) {
    return (
        <div className="overflow-hidden rounded-[24px] border border-white/10">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                className="h-[280px] w-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={`${title}-${index}`}>
                        <div className="relative h-[280px] w-full bg-white/5">
                            <Image
                                src={image}
                                alt={`${title} ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

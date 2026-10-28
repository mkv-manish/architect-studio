"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
export default function ProjectSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-sm border border-white/10">
      <Swiper
        modules={[A11y, Keyboard, Navigation, Pagination]}
        slidesPerView={1}
        navigation={images.length > 1}
        pagination={images.length > 1 ? { clickable: true } : false}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ enabled: true }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="relative aspect-[4/3] w-full bg-white/[0.03]">
              <Image
                src={image}
                alt={`${title}, design view ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

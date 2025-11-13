"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      loop={true}
      className="w-full"
      spaceBetween={10}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      modules={[Autoplay, Pagination]} // Navigation
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <SwiperSlide key={item}>
          <Image
            src={"/banner.jpg"}
            width={1000}
            height={400}
            className="overflow-hidden w-full h-auto aspect-5/2 object-cover rounded-md"
            alt={`image-${item}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import type { Swiper as SwiperType } from "swiper";

import { bannerSlides } from "../../data/bannerData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Banner = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div id="banner" className="w-full relative top-0 left-0 flex items-center justify-center">
      {/* Nút Prev */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className={`absolute z-10 left-2 sm:left-4 bg-slate-100 text-[#9a542c] p-1 text-xl sm:text-2xl shadow-lg rounded-lg cursor-pointer transition-all ${
          isBeginning ? "opacity-30 cursor-not-allowed" : "hover:bg-[#9a542c] hover:text-white"
        }`}
        disabled={isBeginning}
      >
        <GrFormPrevious className="swiper-icon" />
      </button>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {bannerSlides.map((slider, index) => (
          <SwiperSlide key={slider.id}>
            <img
              className="w-full h-[100svh] min-h-[640px] object-cover"
              src={slider.imageUrl}
              alt={`Slide ${index + 1}`}
            />

            {/* Lớp phủ màu nâu nhẹ */}
            <div className="absolute inset-0 bg-[#0a0400] opacity-50 z-[1] pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-[100svh] min-h-[640px] z-10 flex flex-col gap-4 sm:gap-5 items-center justify-center px-10 sm:px-16 md:px-24 lg:px-40 xl:px-[300px] pt-32 sm:pt-36 xl:pt-52 pb-16">
              {slider.subtitle && (
                <p
                  data-aos="fade-down"
                  className="text-xl sm:text-2xl md:text-[32px] break-words text-center text-[#f4b896] leading-[120%] font-bold py-1 border-b-2 border-b-[#f4b896]"
                >
                  {slider.subtitle}
                </p>
              )}
              {slider.title && (
                <p
                  data-aos="fade-right"
                  className="text-3xl sm:text-4xl md:text-[45px] lg:text-[56px] break-words text-white leading-[130%] text-center font-extrabold"
                >
                  {slider.title}
                </p>
              )}
              {slider.description && (
                <p
                  data-aos="fade-left"
                  className="text-base sm:text-xl md:text-2xl text-center break-words text-white/90 leading-[150%] font-medium"
                >
                  {slider.description}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút Next */}
      <button
        onClick={() => swiperInstance?.slideNext()}
        className={`absolute z-10 right-2 sm:right-4 bg-slate-100 text-[#9a542c] p-1 text-xl sm:text-2xl shadow-lg rounded-lg cursor-pointer transition-all ${
          isEnd ? "opacity-30 cursor-not-allowed" : "hover:bg-[#9a542c] hover:text-white"
        }`}
        disabled={isEnd}
      >
        <GrFormNext className="swiper-icon" />
      </button>
    </div>
  );
};

export default Banner;

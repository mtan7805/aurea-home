import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Banner = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sliders = [
    {
      imageUrl:
        "https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/slider_1.jpg?1754927926286",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
    },
  ];

  return (
    <div className="w-full relative top-0 left-0 flex items-center justify-center">
      {/* Nút Prev */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className={`absolute z-10 left-[10px] bg-slate-100 text-[#9a542c] p-[4px] text-[25px] shadow-lg rounded-lg cursor-pointer transition-all ${
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
        {sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[100vh] object-cover"
              src={slider.imageUrl}
              alt={`Slide ${index + 1}`}
            />

            {/* Lớp phủ màu nâu nhẹ */}
            <div className="absolute inset-0 bg-[#0a0400] opacity-50 z-1 pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-[100vh] z-10 flex flex-col gap-[20px] items-center justify-center px-[50px] md:px-[100px] lg:px-[200px] xl:px-[300px]">
              <p
                data-aos="fade-down"
                className="text-[25px] md:text-[30px] break-words text-center text-[#9a542c] leading-[120%] font-semibold py-[3px] border-b-[2px] border-b-[#9a542c]"
              >
                CHÀO MỪNG BẠN ĐẾN VỚI CHÚNG TÔI
              </p>
              <p
                data-aos="fade-right"
                className="text-[30px] ms:text-[35px] md:text-[40px] lg:text-[50px] break-words text-[#efefef] leading-[140%] text-center font-bold"
              >
                Haus - Chuyên Thi Công & Cung Cấp Sản Phẩm Nội Thất Cao Cấp
              </p>
              <p
                data-aos="fade-left"
                className="text-[16px] sm:text-[18px] md:text-[20px] text-center break-words text-[#efefef] leading-[140%]"
              >
                Đơn vị chuyên nghiệp trong lĩnh vực thi công nội thất trọn gói
                và cung cấp sản phẩm nội thất cao cấp, mang đến không gian sống
                và làm việc hoàn hảo cho khách hàng
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút Next */}
      <button
        onClick={() => swiperInstance?.slideNext()}
        className={`absolute z-10 right-[10px] bg-slate-100 text-[#9a542c] p-[4px] text-[25px] shadow-lg rounded-lg cursor-pointer transition-all ${
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

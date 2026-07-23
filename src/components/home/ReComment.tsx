import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaRegStar, FaQuoteRight } from "react-icons/fa6";
import { reviewList } from "../../data/reviewData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const ReComment: React.FC = () => {
  return (
    <section
      id="reviews"
      className="w-full px-5 md:px-12 lg:px-28 py-20 bg-[#c8b7ad]/45 flex flex-col items-center justify-between gap-5 overflow-hidden"
    >
      {/* Subtitle & Title */}
      <p
        data-aos="fade-down"
        className="w-fit text-sm md:text-base text-primary leading-tight font-semibold py-1 border-b-2 border-primary tracking-wider uppercase"
      >
        Ý KIẾN KHÁCH HÀNG
      </p>
      <h2
        data-aos="fade-down"
        className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-gray-900 text-center"
      >
        Khách hàng nói gì về chúng tôi ?
      </h2>

      {/* Swiper Slider */}
      <div
        data-aos="fade-up"
        className="mt-10 w-full flex justify-center items-center"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full flex justify-center items-center py-4"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {reviewList.map((review) => (
            <SwiperSlide
              key={review.id}
              className="w-full flex justify-center items-center h-full"
            >
              <div
                data-aos="fade-up"
                className="w-full max-w-[380px] min-h-[320px] bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 mx-auto"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.star }, (_, i) => (
                    <FaStar key={i} className="text-amber-500 text-lg" />
                  ))}
                  {Array.from({ length: 5 - review.star }, (_, i) => (
                    <FaRegStar key={i} className="text-amber-500 text-lg" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed line-clamp-4 w-full break-words pb-4 border-b border-gray-200">
                  "{review.content}"
                </p>

                {/* User Info */}
                <div className="w-full flex items-center justify-between mt-auto pt-3">
                  <div className="flex items-center gap-3">
                    <div className="border-2 rounded-full border-primary p-0.5 bg-white shrink-0">
                      <img
                        src={review.user.avatar}
                        alt={review.user.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base font-bold text-gray-900 line-clamp-1">
                        {review.user.name}
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        {review.user.job}
                      </p>
                    </div>
                  </div>

                  <FaQuoteRight className="text-2xl text-primary/40 shrink-0" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReComment;

import React, { useRef, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import type { IProduct } from "../../types/product";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import ProductCard from "./ProductCard";

import "swiper/css";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="w-full flex items-center justify-between gap-4 relative group/slider">
      {/* nút prev */}
      <button
        onClick={handlePrev}
        disabled={isBeginning}
        aria-label="Previous slide"
        className={`absolute top-1/2 -left-3 md:-left-5 -translate-y-1/2 z-20 p-2.5 rounded-full shadow-lg border transition-all duration-200 ${
          isBeginning
            ? "bg-gray-100 text-gray-300 border-gray-200 opacity-40 cursor-not-allowed"
            : "bg-white text-primary border-amber-200/60 hover:bg-primary hover:text-white hover:border-primary cursor-pointer active:scale-95 hover:shadow-xl"
        }`}
      >
        <GrFormPrevious className="w-5 h-5" />
      </button>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper: SwiperClass) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper: SwiperClass) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          560: { slidesPerView: 2 },
          731: { slidesPerView: 3 },
          1136: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="py-2">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* nút Next */}
      <button
        onClick={handleNext}
        disabled={isEnd}
        aria-label="Next slide"
        className={`absolute top-1/2 -right-3 md:-right-5 -translate-y-1/2 z-20 p-2.5 rounded-full shadow-lg border transition-all duration-200 ${
          isEnd
            ? "bg-gray-100 text-gray-300 border-gray-200 opacity-40 cursor-not-allowed"
            : "bg-white text-primary border-amber-200/60 hover:bg-primary hover:text-white hover:border-primary cursor-pointer active:scale-95 hover:shadow-xl"
        }`}
      >
        <GrFormNext className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProductList;

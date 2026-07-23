import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { reasonData } from "../../data/reasonData";

const Reason = () => {
  const { subtitle, title, description, imageUrl, features } = reasonData;

  return (
    <section className="w-full px-5 md:px-12 lg:px-28 py-16 flex flex-col lg:flex-row gap-12 lg:gap-16 bg-[#c8b7ad]/30 items-center justify-between overflow-hidden">
      {/* Cột trái: Văn bản & Lý do */}
      <div
        data-aos="fade-right"
        className="w-full lg:w-1/2 flex flex-col gap-6"
      >
        <p className="w-fit text-base md:text-lg text-primary font-semibold py-1.5 border-b-2 border-primary tracking-wide">
          {subtitle}
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Danh sách các tính năng nổi bật */}
        <div className="flex flex-col gap-6 mt-2">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 pb-6 ${
                index < features.length - 1 ? "border-b border-gray-300/80" : ""
              }`}
            >
              {/* Icon Check */}
              <div className="p-1 flex items-center justify-center rounded-full border-4 border-primary bg-transparent shrink-0">
                <div className="p-2 rounded-full bg-primary flex items-center justify-center">
                  <FiCheckCircle className="text-2xl md:text-3xl text-[#dfc6b8]" />
                </div>
              </div>

              {/* Nội dung tính năng */}
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cột phải: Hình ảnh có khung viền trang trí */}
      <div
        data-aos="flip-right"
        className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-[500px] aspect-square border-4 md:border-[5px] border-primary rounded-2xl p-4 md:p-6">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-xl shadow-lg transform translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Reason;

import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { faqData } from "../../data/faqData";
import { Button } from "../common/Button";

const FAQ: React.FC = () => {
  const { subtitle, title, description, questions } = faqData;
  const [openIds, setOpenIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="w-full px-5 md:px-12 lg:px-28 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between bg-[#f4f3f3]">
      {/* Cột trái */}
      <div
        data-aos="fade-right"
        className="w-full lg:w-1/2 flex flex-col gap-5"
      >
        <p className="text-base md:text-2xl text-primary leading-tight font-semibold py-1 border-b-2 border-primary w-fit tracking-wide">
          {subtitle}
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          {title}
        </h2>

        <div className="text-gray-600 text-lg md:text-base leading-relaxed space-y-4 whitespace-pre-line">
          {description}
        </div>

        <div className="mt-4">
          <Button
            variant="primary"
            fullWidth={false}
            className="px-6 py-3 text-sm"
          >
            GỬI CÂU HỎI ?
          </Button>
        </div>
      </div>

      {/* Cột phải */}
      <div
        data-aos="fade-down"
        className="w-full lg:w-1/2 flex flex-col gap-4 lg:pt-[52px]"
      >
        {questions.map((item) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="w-full bg-white rounded-xl shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-200"
            >
              {/* Header câu hỏi */}
              <div
                className="w-full p-5 flex items-center justify-between cursor-pointer select-none hover:bg-gray-50/80 transition-colors"
                onClick={() => handleToggle(item.id)}
              >
                <div className="flex items-center gap-3 text-base md:text-lg font-semibold text-gray-800 leading-snug">
                  <AiFillQuestionCircle className="text-2xl md:text-3xl text-primary shrink-0" />
                  <p className="hover:text-primary transition-colors">
                    {item.question}
                  </p>
                </div>
                {isOpen ? (
                  <IoIosArrowUp className="text-xl text-primary shrink-0" />
                ) : (
                  <IoIosArrowDown className="text-xl text-gray-400 shrink-0" />
                )}
              </div>

              {/* Nội dung câu trả lời */}
              {isOpen && (
                <div className="w-full p-5 border-t border-amber-100 bg-amber-50/20 text-xs md:text-lg text-gray-600 leading-relaxed transition-all">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;

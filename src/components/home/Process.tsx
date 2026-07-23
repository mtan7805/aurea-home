import { processList } from "../../data/processData";

const Process = () => {
  return (
    <section id="process" className="w-full min-h-screen px-5 md:px-12 lg:px-28 py-16 flex flex-col justify-center items-center bg-[#f4f3f3]">
      {/* Header Title */}
      <div className="flex flex-col items-center justify-center gap-3 text-center mb-12 lg:mb-16">
        <p className="w-fit text-xl md:text-3xl font-semibold text-primary py-1 border-b-2 border-primary tracking-wider uppercase">
          QUY TRÌNH LÀM VIỆC
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          Cam kết chất lượng từ Aurea Home
        </h2>
      </div>

      {/* Quy Trình */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch relative">
        {processList.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 flex flex-col items-center text-center group hover:-translate-y-2"
          >
            {/* Badge Số thứ tự */}
            <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
              {item.number}
            </div>

            {/* Vòng tròn chứa Icon */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-amber-200/70 bg-amber-50/30 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </div>

            {/* Tiêu đề & Mô tả */}
            <div className="flex flex-col gap-3 flex-1 justify-start">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

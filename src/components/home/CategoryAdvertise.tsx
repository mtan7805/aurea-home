import { categoryAdvertises } from "../../data/categoriesData";

export const CategoryAdvertise = () => {
  return (
    <div className="w-full px-[20px] md:px-[50px] lg:px-[130px] py-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryAdvertises.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
              <h3 className="text-[20px] font-bold tracking-wide text-[#efefef]">
                {item.title}
              </h3>
              <p className="text-[14px] text-gray-200 mt-1 opacity-90">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

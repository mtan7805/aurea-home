import { brandLogos } from "../../data/categoriesData";

export const Category = () => {
  return (
    <div className="w-full px-[20px] md:px-[50px] lg:px-[130px] py-[30px]">
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
        {brandLogos.map((brand) => (
          <div
            key={brand.id}
            className="w-[86px] h-[68px] cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <img
              src={brand.image}
              alt={brand.name || `Brand ${brand.id}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

import { discountBannerConfig } from "../../data/discountData";
import { listProduct } from "../../data/productData";
import ProductList from "../product/ProductList";
import Countdown from "./Countdown";

const Discounted = () => {
  return (
    <div
      style={{ backgroundImage: `url("${discountBannerConfig.bgImage}")` }}
      className="w-full xl:h-[700px] px-[20px] md:px-[50px] xl:px-[130px] py-[50px]"
    >
      {/* Title & Countdown Header */}
      <div className="w-full flex xl:relative">
        <img
          src={discountBannerConfig.titleImage}
          className="hidden xl:flex z-9"
        />
        <div className="w-full flex flex-col sm:flex-row items-center justify-around gap-4 bg-white py-3.5 px-6 md:px-8 rounded-xl xl:absolute xl:bottom-0 xl:left-[35px] xl:pl-[280px] shadow-sm border border-gray-100">
          <Countdown />
          <p className="text-[22px] md:text-[28px] text-primary font-bold tracking-tight">
            {discountBannerConfig.titleText}
          </p>
        </div>
      </div>

      <div className="mt-[50px]">
        <ProductList products={listProduct} />
      </div>
    </div>
  );
};

export default Discounted;

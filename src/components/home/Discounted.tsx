import { discountBannerConfig } from "../../data/discountData";
import { listProduct } from "../../data/productData";
import ProductList from "../product/ProductList";
import Countdown from "./Countdown";

const Discounted = () => {
  return (
    <div
      id="discount"
      style={{ backgroundImage: `url("${discountBannerConfig.bgImage}")` }}
      className="w-full bg-cover bg-center px-[20px] md:px-[50px] xl:px-[130px] pt-[50px] pb-[80px] md:pb-[110px] lg:pb-[130px]"
    >
      {/* Title & Countdown Header */}
      <div className="w-full flex xl:relative">
        <img
          src={discountBannerConfig.titleImage}
          className="hidden xl:block z-9 relative"
        />
        <div className="w-full flex flex-col sm:flex-row items-center justify-around gap-4 bg-white py-3.5 px-6 md:px-8 rounded-xl xl:absolute xl:bottom-0 xl:left-0 xl:right-0 xl:pl-[270px] shadow-sm border border-gray-100">
          <Countdown />
          <p className="text-[22px] md:text-[28px] text-primary font-bold tracking-tight">
            {discountBannerConfig.titleText}
          </p>
        </div>
      </div>

      <div className="mt-[50px] ">
        <ProductList products={listProduct} />
      </div>
    </div>
  );
};

export default Discounted;

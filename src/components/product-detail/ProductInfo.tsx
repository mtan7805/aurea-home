import { FiMinus, FiPlus, FiShoppingCart, FiStar } from "react-icons/fi";
import ExpandableText from "../common/ExpandableText";
import type { IProduct } from "../../types/product";
import { formatCurrency, getDiscountedPrice } from "../../utils/price";
import {
  getProductShortDescription,
  productDetailSpecs,
} from "../../data/productDetailData";

interface ProductInfoProps {
  product: IProduct;
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export default function ProductInfo({
  product,
  quantity,
  onDecrease,
  onIncrease,
  onAddToCart,
  onBuyNow,
}: ProductInfoProps) {
  const finalPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-gray-500">
        Trang chủ / Sản phẩm / {product.name}
      </div>

      <h1 className="mt-3 text-2xl font-extrabold leading-tight text-gray-900 md:text-3xl">
        {product.name}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500">
        <span className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }, (_, index) => (
            <FiStar key={index} className="h-4 w-4 fill-current" />
          ))}
        </span>
        <span>4.8 (36 đánh giá)</span>
        <span className="hidden h-4 w-px bg-gray-200 sm:block" />
        <span>{product.categoryName ?? "Nội thất"}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span className="text-2xl font-extrabold text-primary md:text-3xl">
          {formatCurrency(finalPrice)}
        </span>
        {product.discount > 0 && (
          <>
            <span className="text-lg font-bold text-gray-400 line-through">
              {formatCurrency(product.price)}
            </span>
            <span className="rounded-lg bg-amber-50 px-3 py-1 text-sm font-extrabold text-primary">
              -{product.discount}%
            </span>
          </>
        )}
      </div>

      <ExpandableText
        text={getProductShortDescription(product)}
        collapsedLines={3}
        className="mt-4 border-b border-gray-100 pb-4 text-sm leading-7 text-gray-600 md:text-base"
      />

      <div className="mt-4 grid gap-2.5 text-sm">
        {productDetailSpecs.map((spec) => (
          <div
            key={spec.label}
            className="grid grid-cols-[120px_minmax(0,1fr)] gap-4"
          >
            <span className="font-bold text-gray-800">{spec.label}</span>
            <span
              className={
                spec.label === "Tình trạng"
                  ? "font-bold text-green-600"
                  : "font-semibold text-gray-500"
              }
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="mb-2 text-sm font-bold text-gray-900">Số lượng</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex h-12 w-max items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
            <button
              type="button"
              onClick={onDecrease}
              disabled={quantity <= 1}
              className="flex h-full w-12 items-center justify-center text-gray-600 transition-colors hover:bg-amber-50 hover:text-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300"
              aria-label="Giảm số lượng"
            >
              <FiMinus className="h-4 w-4" />
            </button>
            <span className="flex h-full min-w-12 items-center justify-center border-x border-gray-200 px-4 text-base font-bold text-gray-900">
              {quantity}
            </span>
            <button
              type="button"
              onClick={onIncrease}
              className="flex h-full w-12 items-center justify-center text-gray-600 transition-colors hover:bg-amber-50 hover:text-primary"
              aria-label="Tăng số lượng"
            >
              <FiPlus className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={onAddToCart}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-primary px-5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <FiShoppingCart className="h-4 w-4" />
            Thêm vào giỏ
          </button>
          <button
            type="button"
            onClick={onBuyNow}
            className="h-12 flex-1 rounded-lg bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            Mua ngay
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 text-xs font-semibold text-gray-600">
        <span>Miễn phí vận chuyển</span>
        <span>Đổi trả 7 ngày</span>
        <span>Sản phẩm chính hãng</span>
        <span>Hỗ trợ 24/7</span>
      </div>
    </section>
  );
}

import type { IProduct } from "../../types/product";
import { Button } from "../common/Button";

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
  const { name, image, discount, price, sell, total } = product;

  const finalPrice =
    discount > 0 ? Math.round((price * (100 - discount)) / 100) : price;

  const percentSold =
    total > 0 ? Math.min(Math.round((sell / total) * 100), 100) : 0;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("vi-VN").format(val) + "đ";
  };

  return (
    <div className="group w-full bg-white rounded-xl p-3.5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full">
      <div>
        {/* Ảnh sản phẩm & Badge Discount */}
        <div className="relative overflow-hidden rounded-lg bg-gray-50 aspect-square">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badge giảm giá */}
          {discount > 0 && (
            <span className="absolute top-2 right-0 bg-red-500 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
              -{discount}%
            </span>
          )}
        </div>

        {/* Tên sản phẩm */}
        <h3 className="mt-3 text-base md:text-[17px] font-bold text-gray-800 line-clamp-2 hover:text-primary transition-colors cursor-pointer min-h-[44px]">
          {name}
        </h3>
      </div>

      <div className="mt-3">
        {/* Giá sản phẩm */}
        <div className="flex items-baseline justify-between gap-2 flex-wrap">
          <span className="text-lg md:text-xl font-extrabold text-primary">
            {formatCurrency(finalPrice)}
          </span>
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through font-semibold">
              {formatCurrency(price)}
            </span>
          )}
        </div>

        {/* Thanh trạng thái Flash Sale (Đã bán) */}
        {total > 0 && (
          <div className="mt-3">
            <div className="w-full bg-amber-100 h-5 rounded-full overflow-hidden relative flex items-center justify-center">
              <div
                className="bg-gradient-to-r from-amber-400 to-primary h-full absolute left-0 top-0 transition-all duration-500 rounded-full"
                style={{ width: `${percentSold}%` }}
              />
              <span className="relative z-10 text-xs font-extrabold text-amber-950 px-1">
                Đã bán {sell}/{total}
              </span>
            </div>
          </div>
        )}
        {/* Nút hành động */}
        <div className="flex items-center justify-between gap-2 mt-3.5 pt-2 border-t border-gray-100">
          <Button variant="primary">Thêm vào giỏ</Button>
          <Button variant="outline">Mua ngay</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

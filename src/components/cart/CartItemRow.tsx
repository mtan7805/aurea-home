import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import type { CartItem } from "../../stores/cartStore";
import { formatCurrency, getDiscountedPrice } from "../../utils/price";

interface CartItemRowProps {
  item: CartItem;
  onDecrease: (productId: number) => void;
  onIncrease: (productId: number) => void;
  onRemove: (productId: number) => void;
  onToggleSelected: (productId: number) => void;
}

export default function CartItemRow({
  item,
  onDecrease,
  onIncrease,
  onRemove,
  onToggleSelected,
}: CartItemRowProps) {
  const { product, quantity, selected } = item;
  const finalPrice = getDiscountedPrice(product.price, product.discount);
  const totalPrice = finalPrice * quantity;

  return (
    <article
      className={`grid grid-cols-[auto_1fr] gap-4 rounded-xl border bg-white p-4 shadow-sm transition-colors sm:grid-cols-[auto_140px_minmax(0,1fr)] lg:grid-cols-[auto_150px_minmax(0,1fr)] xl:grid-cols-[auto_170px_minmax(0,1fr)] ${
        selected ? "border-primary/25" : "border-gray-100 opacity-75"
      }`}
    >
      <label className="flex h-full items-center">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggleSelected(product.id)}
          className="h-5 w-5 accent-primary"
          aria-label={`Chọn mua ${product.name}`}
        />
      </label>

      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900">
                {product.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-gray-500">
                {product.categoryName ?? "Nội thất cao cấp"}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onRemove(product.id)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              aria-label={`Xóa ${product.name}`}
            >
              <FiTrash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="text-lg font-extrabold text-primary">
              {formatCurrency(finalPrice)}
            </span>
            {product.discount > 0 && (
              <span className="text-sm font-semibold text-gray-400 line-through">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex h-10 w-max items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
            <button
              type="button"
              onClick={() => onDecrease(product.id)}
              disabled={quantity <= 1}
              className="flex h-full w-10 items-center justify-center text-gray-600 transition-colors hover:bg-amber-50 hover:text-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300"
              aria-label={`Giảm số lượng ${product.name}`}
            >
              <FiMinus className="h-4 w-4" />
            </button>
            <span className="flex h-full min-w-10 items-center justify-center border-x border-gray-200 px-3 text-sm font-bold text-gray-900">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => onIncrease(product.id)}
              className="flex h-full w-10 items-center justify-center text-gray-600 transition-colors hover:bg-amber-50 hover:text-primary"
              aria-label={`Tăng số lượng ${product.name}`}
            >
              <FiPlus className="h-4 w-4" />
            </button>
          </div>

          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Thành tiền
            </p>
            <p className="text-lg font-extrabold text-gray-900">
              {formatCurrency(totalPrice)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

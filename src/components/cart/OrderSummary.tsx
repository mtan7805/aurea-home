import {
  FiArrowRight,
  FiRefreshCw,
  FiShield,
  FiTag,
  FiTruck,
} from "react-icons/fi";
import { formatCurrency } from "../../utils/price";

interface OrderSummaryProps {
  subtotal: number;
  selectedQuantity: number;
}

export default function OrderSummary({
  subtotal,
  selectedQuantity,
}: OrderSummaryProps) {
  const shippingFee = subtotal > 0 ? 0 : 0;
  const total = subtotal + shippingFee;
  const hasSelectedItems = selectedQuantity > 0;

  return (
    <aside className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-40">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Đơn hàng</h2>

      <div className="mt-5 space-y-4 border-b border-gray-100 pb-5">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-gray-600">({selectedQuantity} sản phẩm)</span>
          <span className="font-bold text-gray-900">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div>
          <label
            htmlFor="discount-code"
            className="mb-2 block text-sm font-bold text-gray-900"
          >
            Mã giảm giá
          </label>
          <div className="flex gap-2">
            <div className="relative min-w-0 flex-1">
              <FiTag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                id="discount-code"
                type="text"
                placeholder="Nhập mã giảm giá"
                className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
              />
            </div>
            <button
              type="button"
              className="h-11 rounded-lg bg-primary px-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover sm:px-4"
            >
              Áp dụng
            </button>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4 text-sm">
          <div>
            <p className="font-bold text-gray-900">Phí vận chuyển</p>
            <p className="text-xs font-semibold text-gray-400">
              Giao hàng toàn quốc
            </p>
          </div>
          <span className="font-bold text-green-600">
            {shippingFee === 0 ? "Miễn phí" : formatCurrency(shippingFee)}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-gray-900">Tổng cộng</p>
          <p className="text-xs font-semibold text-gray-400">
            Đã bao gồm VAT nếu có
          </p>
        </div>
        <p className="text-2xl font-extrabold text-primary">
          {formatCurrency(total)}
        </p>
      </div>

      <button
        type="button"
        disabled={!hasSelectedItems}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-base font-bold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        Tiến hành đặt hàng
        <FiArrowRight className="h-4 w-4" />
      </button>

      <div className="mt-6 space-y-4 border-t border-gray-100 pt-5">
        <div className="flex gap-3">
          <FiShield className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-bold text-gray-900">
              Bảo mật thanh toán
            </p>
            <p className="text-xs font-semibold text-gray-500">
              Thông tin của bạn được bảo vệ an toàn.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <FiTruck className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-bold text-gray-900">Giao hàng nhanh</p>
            <p className="text-xs font-semibold text-gray-500">
              Miễn phí vận chuyển cho đơn hàng nội thất.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <FiRefreshCw className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-bold text-gray-900">Đổi trả dễ dàng</p>
            <p className="text-xs font-semibold text-gray-500">
              Hỗ trợ đổi trả nếu sản phẩm lỗi từ nhà sản xuất.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

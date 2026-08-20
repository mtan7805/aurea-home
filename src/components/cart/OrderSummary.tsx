import { type FormEvent, useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  FiArrowRight,
  FiCreditCard,
  FiRefreshCw,
  FiShield,
  FiTag,
  FiTruck,
} from "react-icons/fi";
import { formatCurrency } from "../../utils/price";

interface OrderSummaryProps {
  subtotal: number;
  selectedQuantity: number;
  onCheckoutComplete: () => void;
}

interface DiscountRule {
  code: string;
  label: string;
  type: "percent" | "fixed";
  value: number;
}

const discountRules: DiscountRule[] = [
  {
    code: "AUREA10",
    label: "Giảm 10% cho đơn hàng",
    type: "percent",
    value: 10,
  },
  {
    code: "AUREA500",
    label: "Giảm 500.000đ",
    type: "fixed",
    value: 500000,
  },
];

export default function OrderSummary({
  subtotal,
  selectedQuantity,
  onCheckoutComplete,
}: OrderSummaryProps) {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<DiscountRule | null>(
    null,
  );
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const shippingFee = subtotal > 0 ? 0 : 0;
  const hasSelectedItems = selectedQuantity > 0;

  const discountValue = useMemo(() => {
    if (!appliedDiscount || subtotal <= 0) return 0;

    if (appliedDiscount.type === "percent") {
      return Math.round((subtotal * appliedDiscount.value) / 100);
    }

    return Math.min(appliedDiscount.value, subtotal);
  }, [appliedDiscount, subtotal]);

  const total = Math.max(subtotal + shippingFee - discountValue, 0);

  const handleApplyDiscount = () => {
    const normalizedCode = discountCode.trim().toUpperCase();
    const matchedDiscount = discountRules.find(
      (discount) => discount.code === normalizedCode,
    );

    if (!hasSelectedItems) {
      toast.error("Vui lòng chọn sản phẩm trước khi áp dụng mã giảm giá.");
      return;
    }

    if (!matchedDiscount) {
      setAppliedDiscount(null);
      toast.error("Mã giảm giá không hợp lệ.");
      return;
    }

    setAppliedDiscount(matchedDiscount);
    setDiscountCode(matchedDiscount.code);
    toast.success(`Đã áp dụng ${matchedDiscount.code}`);
  };

  const handleSubmitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasSelectedItems) {
      toast.error("Vui lòng chọn sản phẩm cần đặt hàng.");
      return;
    }

    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      toast.error("Vui lòng nhập đầy đủ thông tin giao hàng.");
      return;
    }

    toast.success("Đặt hàng thành công. Aurea Home sẽ liên hệ xác nhận sớm.");
    setCustomerName("");
    setPhone("");
    setAddress("");
    setDiscountCode("");
    setAppliedDiscount(null);
    setPaymentMethod("cod");
    onCheckoutComplete();
  };

  return (
    <aside className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-36">
      <h2 className="text-center text-2xl font-bold text-gray-900">
        Đơn hàng
      </h2>

      <form onSubmit={handleSubmitOrder}>
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
                  value={discountCode}
                  onChange={(event) => setDiscountCode(event.target.value)}
                  placeholder="AUREA10"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
                />
              </div>
              <button
                type="button"
                onClick={handleApplyDiscount}
                className="h-11 rounded-lg bg-primary px-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover sm:px-4"
              >
                Áp dụng
              </button>
            </div>
            {appliedDiscount && (
              <p className="mt-2 text-xs font-semibold text-green-600">
                {appliedDiscount.label}
              </p>
            )}
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

          {discountValue > 0 && (
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-bold text-gray-900">Giảm giá</span>
              <span className="font-bold text-green-600">
                -{formatCurrency(discountValue)}
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 space-y-3 border-b border-gray-100 pb-5">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-900">
            Thông tin giao hàng
          </h3>

          <input
            type="text"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Họ và tên"
            className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
          />
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Số điện thoại"
            className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
          />
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Địa chỉ nhận hàng"
            rows={3}
            className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
          />

          <div className="grid grid-cols-2 gap-2">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(event) => setPaymentMethod(event.target.value)}
                className="accent-primary"
              />
              COD
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={(event) => setPaymentMethod(event.target.value)}
                className="accent-primary"
              />
              Chuyển khoản
            </label>
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
          type="submit"
          disabled={!hasSelectedItems}
          className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-base font-bold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          Tiến hành đặt hàng
          <FiArrowRight className="h-4 w-4" />
        </button>
      </form>

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

        <div className="flex gap-3">
          <FiCreditCard className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-bold text-gray-900">
              Thanh toán linh hoạt
            </p>
            <p className="text-xs font-semibold text-gray-500">
              Hỗ trợ COD và chuyển khoản ngân hàng.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

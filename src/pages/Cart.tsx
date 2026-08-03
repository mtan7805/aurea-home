import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import CartItemRow from "../components/cart/CartItemRow";
import OrderSummary from "../components/cart/OrderSummary";
import { useCartStore } from "../stores/cartStore";
import { getDiscountedPrice } from "../utils/price";

export const Cart = () => {
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const toggleItemSelected = useCartStore((state) => state.toggleItemSelected);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const selectedItems = items.filter((item) => item.selected);
  const selectedQuantity = selectedItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const subtotal = selectedItems.reduce((total, item) => {
    const finalPrice = getDiscountedPrice(
      item.product.price,
      item.product.discount,
    );

    return total + finalPrice * item.quantity;
  }, 0);

  const handleRemoveFromCart = (productId: number, productName: string) => {
    const confirmed = window.confirm(
      `Bạn có chắc muốn xóa "${productName}" khỏi giỏ hàng không?`,
    );

    if (confirmed) removeFromCart(productId);
  };

  return (
    <section className="min-h-screen bg-[#faf8f5] px-5 pb-24 pt-44 md:px-[50px] lg:px-[130px]">
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-500">
          <Link to="/" className="transition-colors hover:text-primary">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-gray-800">Giỏ hàng</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Aurea Home Cart
            </span>
            <h1 className="mt-1 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Giỏ hàng
              <span className="ml-2 text-xl font-bold text-gray-500">
                ({totalQuantity} sản phẩm)
              </span>
            </h1>
          </div>

          <Link
            to="/products"
            className="w-max rounded-lg border border-primary px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <CartItemRow
                key={item.product.id}
                item={item}
                onDecrease={decreaseQuantity}
                onIncrease={increaseQuantity}
                onRemove={(productId) =>
                  handleRemoveFromCart(productId, item.product.name)
                }
                onToggleSelected={toggleItemSelected}
              />
            ))
          ) : (
            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-amber-200 bg-white p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-primary">
                <FiShoppingBag className="h-8 w-8" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                Giỏ hàng của bạn đang trống
              </h2>
              <p className="mt-2 max-w-md text-sm font-semibold leading-relaxed text-gray-500">
                Khám phá thêm các sản phẩm nội thất đẹp và thêm vào giỏ để bắt
                đầu đặt hàng.
              </p>
              <Link
                to="/products"
                className="mt-6 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
              >
                Xem sản phẩm
              </Link>
            </div>
          )}
        </div>

        <OrderSummary subtotal={subtotal} selectedQuantity={selectedQuantity} />
      </div>
    </section>
  );
};

import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import toast from "react-hot-toast";
import ProductDetailTabs from "../components/product-detail/ProductDetailTabs";
import ProductGallery from "../components/product-detail/ProductGallery";
import ProductInfo from "../components/product-detail/ProductInfo";
import RelatedProducts from "../components/product-detail/RelatedProducts";
import { useProducts } from "../hooks/useProducts";
import { useCartStore } from "../stores/cartStore";

const MAX_RELATED_PRODUCTS = 4;

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addQuantityToCart = useCartStore((state) => state.addQuantityToCart);
  const [quantity, setQuantity] = useState(1);
  const { products, loading } = useProducts({ includeLocalProducts: true });

  const productId = Number(id);

  const product = useMemo(
    () => products.find((item) => item.id === productId),
    [productId, products],
  );

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    const sameCategoryProducts = products.filter(
      (item) =>
        item.id !== product.id &&
        item.categoryId !== undefined &&
        item.categoryId === product.categoryId,
    );

    const fallbackProducts = products.filter((item) => item.id !== product.id);
    const source =
      sameCategoryProducts.length > 0 ? sameCategoryProducts : fallbackProducts;

    return source.slice(0, MAX_RELATED_PRODUCTS);
  }, [product, products]);

  const handleAddQuantityToCart = () => {
    if (!product) return;

    addQuantityToCart(product, quantity);
    toast.success(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`);
  };

  const handleBuyNow = () => {
    handleAddQuantityToCart();
    navigate("/cart");
  };

  if (loading) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#faf8f5] px-5 pt-44 text-gray-700">
        <FiLoader className="h-10 w-10 animate-spin text-primary" />
        <p className="font-bold">Đang tải sản phẩm...</p>
      </section>
    );
  }

  if (!product || Number.isNaN(productId)) {
    return (
      <section className="min-h-screen bg-[#faf8f5] px-5 pb-24 pt-44 text-center md:px-[50px] lg:px-[130px]">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Không tìm thấy sản phẩm
        </h1>
        <p className="mt-3 font-semibold text-gray-500">
          Sản phẩm bạn đang xem không tồn tại hoặc đã ngừng kinh doanh.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
        >
          Quay lại sản phẩm
        </Link>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] px-5 pb-24 pt-36 md:px-[50px] md:pt-44 lg:px-[130px]">
      <div className="mx-auto w-full max-w-[1680px]">
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(380px,0.78fr)]">
        <ProductGallery images={product.image} name={product.name} />
        <ProductInfo
          product={product}
          quantity={quantity}
          onDecrease={() => setQuantity((current) => Math.max(current - 1, 1))}
          onIncrease={() => setQuantity((current) => current + 1)}
          onAddToCart={handleAddQuantityToCart}
          onBuyNow={handleBuyNow}
        />
        </div>

        <div className="mt-8 space-y-8">
          <ProductDetailTabs />
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>
    </main>
  );
};

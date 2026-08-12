import ProductCard from "../product/ProductCard";
import type { IProduct } from "../../types/product";

interface RelatedProductsProps {
  products: IProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Sản phẩm liên quan
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} hideProgress />
        ))}
      </div>
    </section>
  );
}

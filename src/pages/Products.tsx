import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiLoader, FiSearch } from "react-icons/fi";
import ProductCard from "../components/product/ProductCard";
import { useThrottledValue } from "../hooks/useThrottle";
import {
  fetchApiCategories,
  fetchApiProducts,
} from "../services/productService";
import type { IApiCategory } from "../types/apiProduct";
import type { IProduct } from "../types/product";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState<IApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(
    () => searchParams.get("search") ?? "",
  );
  const throttledSearchTerm = useThrottledValue(searchTerm, 400);

  useEffect(() => {
    const searchFromUrl = searchParams.get("search") ?? "";
    setSearchTerm((current) =>
      current === searchFromUrl ? current : searchFromUrl,
    );
  }, [searchParams]);

  useEffect(() => {
    const normalizedSearch = throttledSearchTerm.trim();
    const currentSearch = searchParams.get("search") ?? "";

    if (normalizedSearch === currentSearch) return;

    const nextParams = new URLSearchParams(searchParams);

    if (normalizedSearch) {
      nextParams.set("search", normalizedSearch);
    } else {
      nextParams.delete("search");
    }

    setSearchParams(nextParams, { replace: true });
  }, [searchParams, setSearchParams, throttledSearchTerm]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    Promise.all([fetchApiProducts(), fetchApiCategories()])
      .then(([productData, categoryData]) => {
        if (!isMounted) return;
        setProducts(productData);
        setCategories(categoryData.slice(0, 6));
        setError("");
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = throttledSearchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === null || product.categoryId === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.categoryName?.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [products, throttledSearchTerm, selectedCategory]);

  const formatCategoryName = (name: string) => {
    const map: Record<string, string> = {
      clothes: "Quần áo",
      electronics: "Thiết bị điện tử",
      furniture: "Nội thất",
      shoes: "Giày dép",
      miscellaneous: "Phụ kiện khác",
    };

    return map[name.toLowerCase()] || name;
  };

  return (
    <div className="w-full min-h-screen bg-[#faf8f5] pt-44 pb-24 px-5 md:px-[50px] lg:px-[130px]">
      <div className="w-full flex flex-col items-center text-center gap-3 mb-10">
        <span className="text-xl font-semibold text-primary uppercase tracking-widest px-3 py-1 bg-amber-50 rounded-full border border-amber-300/60">
          Aurea Home Collection
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Bộ Sưu Tập Sản Phẩm Nội Thất
        </h1>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          Khám phá những thiết kế nội thất sang trọng, tinh tế và phong phú
          được cập nhật trực tiếp từ hệ thống.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 bg-white mb-10 p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="relative w-full md:w-64 lg:w-72 shrink-0 h-11 flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full h-full rounded-xl bg-gray-50 border border-gray-200 text-base text-gray-800 outline-none pl-6 pr-10 focus:border-primary focus:bg-white transition-all"
          />
          <FiSearch className="absolute right-3.5 w-4 h-4 text-gray-400" />
        </div>

        <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === null
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-primary"
            }`}
          >
            Tất cả
          </button>
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-primary"
              }`}
            >
              {formatCategoryName(cat.name)}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div
          className="flex flex-col items-center justify-center gap-3 py-14 text-gray-700"
          role="status"
          aria-live="polite"
        >
          <FiLoader className="h-10 w-10 md:h-12 md:w-12 animate-spin text-[#8c583c]" />
          <p className="text-base font-semibold">Đang tải sản phẩm...</p>
        </div>
      )}

      {!loading && error && (
        <p className="text-center text-red-600 font-semibold">{error}</p>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 font-semibold">
          Không tìm thấy sản phẩm phù hợp.
        </p>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

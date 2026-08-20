import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Pagination from "../components/common/Pagination";
import ProductCard from "../components/product/ProductCard";
import { usePagination } from "../hooks/usePagination";
import { useProducts } from "../hooks/useProducts";
import { useThrottledValue } from "../hooks/useThrottle";
import type { IProduct } from "../types/product";
import { getDiscountedPrice } from "../utils/price";

const PRODUCTS_PER_PAGE = 8;

type SortOption = "default" | "price-asc" | "price-desc" | "discount" | "sold";

const ProductSkeleton = () => (
  <div className="rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm">
    <div className="aspect-square animate-pulse rounded-lg bg-gray-100" />
    <div className="mt-3 h-5 w-4/5 animate-pulse rounded bg-gray-100" />
    <div className="mt-2 h-5 w-3/5 animate-pulse rounded bg-gray-100" />
    <div className="mt-4 h-10 animate-pulse rounded-lg bg-gray-100" />
  </div>
);

const getNumericPrice = (value: string) => {
  const price = Number(value);
  return Number.isFinite(price) && price > 0 ? price : null;
};

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, categories, loading, error } = useProducts({
    maxCategories: 6,
  });
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [saleOnly, setSaleOnly] = useState(false);
  const [bestSellingOnly, setBestSellingOnly] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
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

    nextParams.delete("page");
    setSearchParams(nextParams, { replace: true });
  }, [searchParams, setSearchParams, throttledSearchTerm]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = throttledSearchTerm.trim().toLowerCase();
    const min = getNumericPrice(minPrice);
    const max = getNumericPrice(maxPrice);

    const result = products.filter((product) => {
      const finalPrice = getDiscountedPrice(product.price, product.discount);
      const matchesCategory =
        selectedCategory === null || product.categoryId === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.categoryName?.toLowerCase().includes(normalizedSearch);
      const matchesSale = !saleOnly || product.discount > 0;
      const matchesBestSelling = !bestSellingOnly || product.sell > 0;
      const matchesMin = min === null || finalPrice >= min;
      const matchesMax = max === null || finalPrice <= max;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesSale &&
        matchesBestSelling &&
        matchesMin &&
        matchesMax
      );
    });

    return [...result].sort((a, b) => {
      const priceA = getDiscountedPrice(a.price, a.discount);
      const priceB = getDiscountedPrice(b.price, b.discount);

      if (sortBy === "price-asc") return priceA - priceB;
      if (sortBy === "price-desc") return priceB - priceA;
      if (sortBy === "discount") return b.discount - a.discount;
      if (sortBy === "sold") return b.sell - a.sell;

      return 0;
    });
  }, [
    bestSellingOnly,
    maxPrice,
    minPrice,
    products,
    saleOnly,
    selectedCategory,
    sortBy,
    throttledSearchTerm,
  ]);

  const { currentPage, totalPages, paginatedItems, handlePageChange, resetPage } =
    usePagination(filteredProducts, PRODUCTS_PER_PAGE);

  const resetFilters = () => {
    setSelectedCategory(null);
    setSortBy("default");
    setSaleOnly(false);
    setBestSellingOnly(false);
    setMinPrice("");
    setMaxPrice("");
    resetPage({ replace: true, scroll: false });
  };

  const updateCategory = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    resetPage({ replace: true, scroll: false });
  };

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
    <div className="min-h-screen w-full bg-[#faf8f5] px-5 pb-24 pt-36 md:px-[50px] md:pt-44 lg:px-[130px]">
      <div className="mb-10 flex w-full flex-col items-center gap-3 text-center">
        <span className="rounded-full border border-amber-300/60 bg-amber-50 px-3 py-1 text-xl font-semibold uppercase tracking-widest text-primary">
          Aurea Home Collection
        </span>
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Bộ Sưu Tập Sản Phẩm Nội Thất
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-gray-600">
          Khám phá những thiết kế nội thất sang trọng, tinh tế và phong phú
          được cập nhật trực tiếp từ hệ thống.
        </p>
      </div>

      <div className="mb-10 space-y-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="relative flex h-11 w-full items-center xl:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Tìm kiếm sản phẩm..."
              className="h-full w-full rounded-xl border border-gray-200 bg-gray-50 pl-5 pr-10 text-base text-gray-800 outline-none transition-all focus:border-primary focus:bg-white"
            />
            <FiSearch className="absolute right-3.5 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 scrollbar-none xl:w-auto">
            <button
              type="button"
              onClick={() => updateCategory(null)}
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-primary"
              }`}
            >
              Tất cả
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() => updateCategory(category.id)}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-primary"
                }`}
              >
                {formatCategoryName(category.name)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_auto_auto_auto] xl:items-end">
          <label className="text-sm font-bold text-gray-800">
            Giá từ
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) => {
                setMinPrice(event.target.value);
                resetPage({ replace: true, scroll: false });
              }}
              placeholder="0"
              className="mt-1 h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-primary focus:bg-white"
            />
          </label>

          <label className="text-sm font-bold text-gray-800">
            Giá đến
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) => {
                setMaxPrice(event.target.value);
                resetPage({ replace: true, scroll: false });
              }}
              placeholder="10.000.000"
              className="mt-1 h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-primary focus:bg-white"
            />
          </label>

          <label className="text-sm font-bold text-gray-800">
            Sắp xếp
            <select
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value as SortOption);
                resetPage({ replace: true, scroll: false });
              }}
              className="mt-1 h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-primary focus:bg-white xl:w-48"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá thấp đến cao</option>
              <option value="price-desc">Giá cao đến thấp</option>
              <option value="discount">Giảm giá nhiều</option>
              <option value="sold">Bán chạy</option>
            </select>
          </label>

          <label className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-bold text-gray-700">
            <input
              type="checkbox"
              checked={saleOnly}
              onChange={(event) => {
                setSaleOnly(event.target.checked);
                resetPage({ replace: true, scroll: false });
              }}
              className="h-4 w-4 accent-primary"
            />
            Đang giảm giá
          </label>

          <label className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-bold text-gray-700">
            <input
              type="checkbox"
              checked={bestSellingOnly}
              onChange={(event) => {
                setBestSellingOnly(event.target.checked);
                resetPage({ replace: true, scroll: false });
              }}
              className="h-4 w-4 accent-primary"
            />
            Bán chạy
          </label>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3">
          <p className="text-sm font-semibold text-gray-500">
            Tìm thấy{" "}
            <span className="font-extrabold text-gray-900">
              {filteredProducts.length}
            </span>{" "}
            sản phẩm
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-bold text-gray-600 transition-colors hover:border-primary hover:text-primary"
          >
            Xóa bộ lọc
          </button>
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: PRODUCTS_PER_PAGE }, (_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-center font-semibold text-red-600">{error}</p>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <p className="text-center font-semibold text-gray-600">
          Không tìm thấy sản phẩm phù hợp.
        </p>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {paginatedItems.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

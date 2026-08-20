import { useEffect, useState } from "react";
import { listProduct } from "../data/productData";
import {
  fetchApiCategories,
  fetchApiProducts,
} from "../services/productService";
import type { IApiCategory } from "../types/apiProduct";
import type { IProduct } from "../types/product";

interface UseProductsOptions {
  includeLocalProducts?: boolean;
  maxCategories?: number;
}

export const useProducts = ({
  includeLocalProducts = false,
  maxCategories,
}: UseProductsOptions = {}) => {
  const [products, setProducts] = useState<IProduct[]>(
    includeLocalProducts ? listProduct : [],
  );
  const [categories, setCategories] = useState<IApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError("");

    Promise.all([fetchApiProducts(), fetchApiCategories()])
      .then(([apiProducts, apiCategories]) => {
        if (!isMounted) return;

        setProducts(
          includeLocalProducts ? [...listProduct, ...apiProducts] : apiProducts,
        );
        setCategories(
          maxCategories ? apiCategories.slice(0, maxCategories) : apiCategories,
        );
      })
      .catch(() => {
        if (!isMounted) return;

        if (includeLocalProducts) {
          setProducts(listProduct);
          setCategories([]);
          setError("");
          return;
        }

        setProducts([]);
        setCategories([]);
        setError(
          "Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.",
        );
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [includeLocalProducts, maxCategories]);

  return { products, categories, loading, error };
};

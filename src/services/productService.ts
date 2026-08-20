import type { IApiCategory, IApiProduct } from "../types/apiProduct";
import type { IProduct } from "../types/product";

const API = "https://api.escuelajs.co/api/v1";

const fallbackProductImage =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc";

const normalizeImage = (image?: string) => {
  if (!image) return fallbackProductImage;

  try {
    const parsed = JSON.parse(image);
    if (Array.isArray(parsed) && typeof parsed[0] === "string") {
      return parsed[0];
    }
  } catch {}

  return image.replace(/[[\]"]/g, "") || fallbackProductImage;
};

export const productService = (item: IApiProduct): IProduct => {
  const total = 80 + (item.id % 9) * 15;
  const sell = Math.min(total, 18 + (item.id % 7) * 13);

  return {
    id: item.id,
    name: item.title,
    price: item.price * 25000,
    discount: item.id % 4 === 0 ? 0 : 10 + (item.id % 5) * 5,
    sell,
    total,
    categoryId: item.category?.id,
    categoryName: item.category?.name,
    image: [normalizeImage(item.images?.[0])],
  };
};

export const fetchApiProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${API}/products`);
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }
  const data: IApiProduct[] = await res.json();
  return data.map(productService);
};

export const fetchApiCategories = async (): Promise<IApiCategory[]> => {
  const res = await fetch(`${API}/categories`);
  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  const data: IApiCategory[] = await res.json();
  return data.filter(
    (c) =>
      c.name &&
      !c.name.includes("test") &&
      c.name !== "string" &&
      c.name.length <= 25,
  );
};

import { create } from "zustand";
import type { IProduct } from "../types/product";

interface CartState {
  items: IProduct[];
  addToCart: (product: IProduct) => void;
  uniqueItemCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.items.some((item) => item.id === product.id);
      if (exists) return state;

      return { items: [...state.items, product] };
    }),
  uniqueItemCount: () => get().items.length,
}));

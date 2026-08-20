import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IProduct } from "../types/product";

export interface CartItem {
  product: IProduct;
  quantity: number;
  selected: boolean;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: IProduct) => void;
  addQuantityToCart: (product: IProduct, quantity: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  toggleItemSelected: (productId: number) => void;
  selectAllItems: (selected: boolean) => void;
  removeFromCart: (productId: number) => void;
  removeSelectedItems: () => void;
  totalQuantity: () => number;
  uniqueItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const exists = state.items.some(
            (item) => item.product.id === product.id,
          );

          if (exists) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            items: [...state.items, { product, quantity: 1, selected: true }],
          };
        }),
      addQuantityToCart: (product, quantity) =>
        set((state) => {
          const safeQuantity = Math.max(Math.floor(quantity), 1);
          const exists = state.items.some(
            (item) => item.product.id === product.id,
          );

          if (exists) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + safeQuantity,
                      selected: true,
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              { product, quantity: safeQuantity, selected: true },
            ],
          };
        }),
      increaseQuantity: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),
      decreaseQuantity: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item,
          ),
        })),
      toggleItemSelected: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, selected: !item.selected }
              : item,
          ),
        })),
      selectAllItems: (selected) =>
        set((state) => ({
          items: state.items.map((item) => ({ ...item, selected })),
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),
      removeSelectedItems: () =>
        set((state) => ({
          items: state.items.filter((item) => !item.selected),
        })),
      totalQuantity: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
      uniqueItemCount: () => get().items.length,
    }),
    {
      name: "aurea-home-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addNewTasks: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeItemFromCart: (itemId) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
  resetCart: () => set(() => ({ cart: [] })),
}));

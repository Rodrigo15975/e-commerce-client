import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type CartState = {
  items: Product[]
  addItem: (item: Product) => void
  deleteItem: (id: number) => void
  updateItem: (id: number, quantity: number) => void
}

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const items = state.items.find((i) => i.id === item.id)
            ? state.items.map((i) =>
                i.id === item.id
                  ? {
                      ...i,
                      size: item.size,
                      quantity_buy: i.quantity_buy + item.quantity_buy,
                    }
                  : i
              )
            : [...state.items, item]
          return { items }
        }),
      deleteItem: (id) =>
        set((state) => {
          const items = state.items.filter((i) => i.id !== id)
          return { items }
        }),
      updateItem: (id, quantity) =>
        set((state) => {
          const items = state.items.map((i) =>
            i.id === id
              ? {
                  ...i,
                  quantity_buy: Math.max(0, quantity),
                }
              : i
          )
          return { items }
        }),
    }),
    {
      name: 'products-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

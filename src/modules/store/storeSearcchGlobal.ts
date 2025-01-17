import { create } from 'zustand'

type Store = {
  setSearch: (search: string) => void
  search: string
}

export const useStoreSearchGlobal = create<Store>((set) => ({
  search: '',
  setSearch: (search: string) => set({ search }),
}))

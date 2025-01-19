import { useGetAllProducts } from '@/modules/products/services/queries'

export const useGetAllBrands = (): {
  brands: string[]
  isLoading: boolean
  never: []
} => {
  const { data: products, isLoading } = useGetAllProducts()
  if (!products || products.length === 0)
    return { brands: [], isLoading, never: [] }
  const brands: string[] = products.map((product) => product.brand)

  return {
    brands: [...new Set(brands)],
    isLoading,
    never: [],
  }
}

import { useGetAllProducts } from '../services/queries'

export const useFindProductNewArrivals = () => {
  const { data: products } = useGetAllProducts()

  if (!products || products.length === 0) return []

  const newArrivals = products.filter((product) => product.is_new)

  return newArrivals
}

import { useGetAllProducts } from '../services/queries'

export const useFindProductTopSelling = () => {
  const { data: products } = useGetAllProducts()

  if (!products || products.length === 0) return []

  const topSellings = products.filter(
    (product) => product.total_sold != null && product.total_sold > 5
  )

  return topSellings
}

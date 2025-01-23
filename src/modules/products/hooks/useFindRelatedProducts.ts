import { useGetAllProducts } from '../services/queries'

export const useFindRelatedProducts = (categorie?: string) => {
  const { data: products } = useGetAllProducts()
  if (!products || !products.length) return []
  const relatedProducts = products.filter(
    ({ category }) => category.category === categorie
  )

  return relatedProducts
}

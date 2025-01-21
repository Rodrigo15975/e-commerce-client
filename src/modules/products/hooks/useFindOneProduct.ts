import { useGetAllProducts } from '../services/queries'

export const useFindOneProduct = (id?: number): Product | null => {
  const { data: product } = useGetAllProducts()
  if (!product || !product.length) return null
  const oneProduct = product.find(({ id: productId }) => productId === id)
  if (oneProduct) return oneProduct
  return null
}

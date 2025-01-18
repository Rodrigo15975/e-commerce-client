import { useGetAllProducts } from '@/modules/products/services/queries'
import { useMemo } from 'react'

export const useDataGetting = () => {
  const { data: allProduct } = useGetAllProducts()
  const colors = useMemo(() => {
    if (!allProduct) return []
    const colorSet = new Set<string>()
    allProduct.forEach((product) =>
      product.productVariant.forEach((variant) => colorSet.add(variant.color))
    )
    return Array.from(colorSet)
  }, [allProduct])

  const categories = useMemo(() => {
    if (!allProduct) return []
    return Array.from(new Set(allProduct.map((p) => p.category.category)))
  }, [allProduct])

  return { colors, categories }
}

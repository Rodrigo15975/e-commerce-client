'use client'
import { useFindProductNewArrivals } from '../hooks/useFindProductNewArrivals'
import { useFindProductTopSelling } from '../hooks/useFindProductTopSelling'
import Card from './card'

const ProductCard = () => {
  const productsNewArrivals = useFindProductNewArrivals()
  const productsTopSelling = useFindProductTopSelling()

  return (
    <>
      <main className="container mx-auto px-4">
        <Card title="NEW ARRIVALS" products={productsNewArrivals} />
        <Card title="TOP SELLING" products={productsTopSelling} />
      </main>
    </>
  )
}

export default ProductCard

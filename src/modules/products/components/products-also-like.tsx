import ProductDetails from '@/modules/shop/components/product-details'
import { useFindRelatedProducts } from '../hooks/useFindRelatedProducts'

const ProductsAlsoLike = ({ categorie }: { categorie?: string }) => {
  const relatedProducts = useFindRelatedProducts(categorie)
  return (
    <>
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2">
          <ProductDetails currentProducts={relatedProducts} />
        </div>
      </div>
    </>
  )
}

export default ProductsAlsoLike

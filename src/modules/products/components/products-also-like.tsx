import { Card } from '@/components/ui/card'
import Image from 'next/image'

const ProductsAlsoLike = () => {
  return (
    <>
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={`https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt="Related product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Related Product</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-bold">$199</span>
                  <span className="text-sm text-muted-foreground line-through">
                    $250
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsAlsoLike

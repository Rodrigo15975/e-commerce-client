import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ShoppingCartIcon, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  currentProducts: Product[]
}

const ProductDetails = ({ currentProducts }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader className="p-4">
              <div className="aspect-square overflow-hidden relative bg-gray-100">
                {product.productVariant[0]?.url && (
                  <Link href={`/products/${product.id}`}>
                    <Image
                      loading="eager"
                      src={product.productVariant[0].url}
                      alt={product.product}
                      priority
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </Link>
                )}
                {product.discount > 0 && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
                {product.is_new && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-medium text-sm">
                Product: {product.product}
              </h3>
              <p className="text-xs text-gray-500">Brand: {product.brand}</p>
              <div className="flex items-center gap-1 my-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < 5
                          ? // Math.floor((product.rating || 5) / 20)
                            ' fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      )}
                    />
                  ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex  justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  Price: $
                  {product.discount > 0
                    ? product.price - (product.price * product.discount) / 100
                    : product.price}
                </span>
                {product.discount > 0 && (
                  <span className="text-sm text-gray-500 line-through">
                    Price: ${Math.round(product.price)}
                  </span>
                )}
              </div>
              <div className="flex end">
                <Link href={`/products/${product.id}`}>
                  <Button
                    variant={'outline'}
                    className="  bg-red-600 text-white"
                  >
                    <ShoppingCartIcon className="mr-2 h-4 w-4" />+
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

export default ProductDetails

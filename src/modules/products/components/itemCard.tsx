import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ItemCard = ({
  products,
  title,
}: {
  products: Product
  title?: string
}) => {
  const { productVariant, product, price, discount, id } = products
  const originalPrice = price + (price * discount) / 100

  return (
    <>
      <Link href={`/products/${id}`} className="block group">
        <Card className="border-0 ring-1 ring-cyan-50/50 hover:ring-cyan-50/80 shadow-md transition-all hover:shadow-lg">
          <CardContent className="p-2">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={productVariant[0].url}
                alt={product}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
              {/* {discount && ( */}
              <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                -{discount}%
              </div>
              {/* )} */}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 p-2">
            <h3 className="font-bold text-xl ">{product}</h3>
            <div className="flex items-center gap-0.5">
              {title === 'TOP SELLING' && (
                <>
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
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">${price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </>
  )
}

export default ItemCard

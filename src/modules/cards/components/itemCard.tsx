import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ProductCardProps {
  title: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  discount?: number
}

const ItemCard: FC<ProductCardProps> = ({
  image,
  price,
  rating,
  title,
  discount,
  originalPrice,
}) => {
  return (
    <>
      <Link href="#" className="block group">
        <Card className="border-0 shadow-none transition-all hover:shadow-lg">
          <CardContent className="p-2">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
              {discount && (
                <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                  -{discount}%
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 p-2">
            <h3 className="font-medium">{title}</h3>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              {rating % 1 !== 0 && (
                <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              )}
              <span className="ml-1 text-sm text-muted-foreground">
                {rating}/5
              </span>
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

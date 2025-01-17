'use client'
import { useGetOneProduct } from '../services/queries'

import * as React from 'react'
import Image from 'next/image'
import { MinusIcon, PlusIcon, Star } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const DetailsOneProduct = ({ id }: { id: number | undefined }) => {
  const { data: product } = useGetOneProduct(id)
  const [selectedColor, setSelectedColor] = React.useState(
    product?.productVariant[0]?.color || ''
  )
  const [selectedSize, setSelectedSize] = React.useState(product?.size[0] || '')
  const [quantity, setQuantity] = React.useState(1)
  const [selectedImage, setSelectedImage] = React.useState(
    product?.productVariant[0]?.url || ''
  )

  const discountedPrice =
    (product?.price ?? 0) -
    (product?.price ?? 0) * ((product?.discount ?? 0) / 100)

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={selectedImage || '/placeholder.svg'}
                alt={product?.product ?? "Product's imag " + id}
                fill
                className="object-cover"
                priority
              />
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {product?.productVariant.map((variant) => (
                  <CarouselItem key={variant.id} className="basis-1/4">
                    <div
                      className={cn(
                        'relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100',
                        selectedImage === variant.url && 'ring-2 ring-primary'
                      )}
                      onClick={() => setSelectedImage(variant.url)}
                    >
                      <Image
                        src={variant.url || '/placeholder.svg'}
                        alt={`${product.product} - ${variant.color}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product?.product}</h1>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-5 w-5',
                        i < 4
                          ? 'fill-primary text-primary'
                          : 'fill-muted text-muted'
                      )}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">(4.5)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                ${discountedPrice.toFixed(2)}
              </span>
              {(product?.discount ?? 0) > 0 && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product?.price.toFixed(2)}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Select Color</h3>
              <RadioGroup
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="flex gap-2"
              >
                {product?.productVariant.map((variant) => (
                  <div key={variant.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={variant.color}
                      id={variant.color}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={variant.color}
                      className={cn(
                        'h-8 w-8 rounded-full border-2',
                        selectedColor === variant.color && 'border-primary'
                      )}
                      style={{ backgroundColor: variant.color }}
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Choose Size</h3>
              <div className="flex flex-wrap gap-2">
                {product?.size.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                    className="h-10 w-14"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1" size="lg">
                Add to Cart
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Description</h3>
              <p className="text-muted-foreground">{product?.description}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={`/placeholder.svg?height=400&width=400`}
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
      </div>
    </>
  )
}

export default DetailsOneProduct

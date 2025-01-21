'use client'
import { useGetOneProduct } from '../services/queries'

import { ArrowLeft, MinusIcon, PlusIcon, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import SkeletonDetails from '@/components/ui/skeleton-details'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import ProductsAlsoLike from './products-also-like'
import { ProductReviews } from './products-review'
import { useCartStore } from '../store/useCartStore'
import { useToast } from '@/hooks/use-toast'

const DetailsOneProduct = ({ id }: { id: number | undefined }) => {
  const { toast } = useToast()
  const { data: product, isLoading } = useGetOneProduct(id)
  const { addItem } = useCartStore()
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.productVariant[0]?.color || ''
  )

  const [selectedSize, setSelectedSize] = useState<string>(
    product?.size[0] || ''
  )

  const [quantity, setQuantity] = useState<number>(1)

  const [selectedImage, setSelectedImage] = useState<string>(
    product?.productVariant[0]?.url || ''
  )
  if (isLoading) return <SkeletonDetails />

  const discountedPrice: number =
    (product?.price ?? 0) -
    (product?.price ?? 0) * ((product?.discount ?? 0) / 100)

  const handleAddToCart = (itemToProduct: Product | undefined) => {
    if (itemToProduct && itemToProduct.id) {
      toast({
        title: 'Added to cart',
        description: (
          <>
            <p>Product added to cart successfully</p>
            <Link
              className="underline text-blue-400 mt-8 underline-offset-2"
              href={'/products'}
            >
              Show cart
            </Link>
          </>
        ),
        translate: 'yes',
        duration: 2000,
      })
      addItem({
        ...itemToProduct,
        quantity_buy: quantity,
        price: discountedPrice,
        size: [selectedSize ?? ''],
        productVariant: [
          {
            ...itemToProduct.productVariant[0],
            color: selectedColor ?? '',
            url: selectedImage ?? '',
          },
        ],
      })
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="w-full pb-4 flex justify-end  ">
          <Link href={'/shop'} className="w-[300px]">
            <Button className="w-full" variant={'outline'}>
              <ArrowLeft /> Back to shop
            </Button>
          </Link>
        </div>
        {/* <Separator className="my-4" /> */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={selectedImage}
                alt={product?.product ?? "Product's image" + id}
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
                        src={variant.url}
                        alt={`${product.product} - ${variant.color}`}
                        fill
                        priority
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
                          ? 'fill-yellow-400 text-yellow-400'
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
              <Button
                onClick={() => handleAddToCart(product)}
                className="flex-1"
                size="lg"
              >
                Add to Cart
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Description</h3>
              <p className="text-muted-foreground">{product?.description}</p>
            </div>
          </div>
        </div>
        <ProductReviews />
        <ProductsAlsoLike categorie={product?.category.category} />
      </div>
    </>
  )
}

export default DetailsOneProduct

'use client'
import { useGetOneProduct } from '../services/queries'

import { ArrowLeft, MinusIcon, PlusIcon } from 'lucide-react'
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
import SkeletonDetails from '@/components/ui/skeleton-details'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useCartStore } from '../store/useCartStore'
import ProductDetailsSizeColorId from './productDetailsSizeColorId'
import ProductsAlsoLike from './products-also-like'
import { ProductReviews } from './products-review'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

const DetailsOneProduct = ({ id }: { id: number | undefined }) => {
  const { toast } = useToast()
  const { data: product, isLoading } = useGetOneProduct(id)
  const { addItem } = useCartStore()
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.productVariant[0]?.color
  )
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.size[0]
  )
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    product?.productVariant[0]?.url
  )
  if (isLoading) return <SkeletonDetails />
  if (!product) return <SkeletonDetails />

  const discountedPrice: number =
    (product?.price ?? 0) -
    (product?.price ?? 0) * ((product?.discount ?? 0) / 100)

  const handleAddToCart = (itemToProduct: Product | undefined) => {
    if (itemToProduct && itemToProduct.id) {
      toast({
        title: 'Added to cart',
        description: 'Product added to cart successfull',
        translate: 'yes',
        duration: 2000,
      })
      addItem({
        ...itemToProduct,
        quantity_buy: quantity,
        price: discountedPrice,
        size: [selectedSize ?? product.size[0]],
        productVariant: [
          {
            ...itemToProduct.productVariant[0],
            color: selectedColor ?? product.productVariant[0].color,
            url: selectedImage ?? product.productVariant[0].url,
          },
        ],
      })
    }
  }

  const selectdSize = (size: string) => setSelectedSize(size)
  const selectdColor = (color: string) => setSelectedColor(color)

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
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <InnerImageZoom
                src={product.productVariant[0].url}
                fullscreenOnMobile
                fadeDuration={200}
                zoomPreload
                imgAttributes={{
                  alt: `${product.product} - ${product.productVariant[0].color}`,
                }}
                className="object-cover"
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
              <CarouselPrevious className={cn('max-md:hidden')} />
              <CarouselNext className={cn('max-md:hidden')} />
            </Carousel>
          </div>

          <div className="space-y-6">
            <ProductDetailsSizeColorId
              discountedPrice={discountedPrice}
              selectedColor={selectedColor}
              setSelectedColor={selectdColor}
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={selectdSize}
            />

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
            <div className="space-y-4 flex flex-col">
              <h3 className="font-medium">Description</h3>
              <div>
                <p className="text-muted-foreground ">
                  {product?.description || 'No description'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProductReviews post={product?.post} />
        <ProductsAlsoLike categorie={product?.category.category} />
      </div>
    </>
  )
}

export default DetailsOneProduct

import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

type Props = {
  product: Product
  setSelectedSize: (size: string) => void
  selectedSize: string | undefined

  selectedColor: string | undefined
  setSelectedColor: (color: string) => void

  discountedPrice: number
}

const ProductDetailsSizeColorId = ({
  product,
  setSelectedSize,
  selectedSize,
  selectedColor,
  setSelectedColor,
  discountedPrice,
}: Props) => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">{product?.product}</h1>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex">
            {/* Stars del producto cambiar esto */}
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
    </>
  )
}

export default ProductDetailsSizeColorId

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useCartStore } from '../store/useCartStore'
import { X } from 'lucide-react'

const ProductsDetails = (item: Product) => {
  const { deleteItem, updateItem } = useCartStore()
  const { product, quantity_buy, brand, price, id, size } = item
  return (
    <>
      <div className="flex gap-4">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border">
          <Image
            src={item.productVariant[0].url}
            alt={product}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="grid gap-1">
            <h3 className="font-semibold">Product: {product}</h3>
            <p className="text-sm text-muted-foreground">Brand: {brand}</p>
            <p className="text-sm text-muted-foreground">Size: {size[0]}</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Button
              variant="outline"
              size="icon"
              className={`h-8 w-8  `}
              disabled={quantity_buy === 0}
              onClick={() => updateItem(id, quantity_buy - 1)}
            >
              -
            </Button>
            <Input
              type="number"
              min="0"
              disabled
              value={item.quantity_buy}
              onChange={() => updateItem(id, quantity_buy + 1)}
              className="h-8 w-16 text-center"
            />
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateItem(id, quantity_buy + 1)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <Button
            variant="ghost"
            onClick={() => deleteItem(id)}
            size="icon"
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
          <span className="font-semibold">${price.toFixed(2)}</span>
        </div>
      </div>
    </>
  )
}

export default ProductsDetails

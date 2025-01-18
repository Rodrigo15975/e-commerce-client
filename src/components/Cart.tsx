import { Button } from '@/components/ui/button'
import { useCartStore } from '@/modules/products/store/useCartStore'
import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
const Cart = () => {
  const { items } = useCartStore()

  return (
    <>
      <Link href={'/products'}>
        <Button variant={'outline'} className="relative">
          <Badge className="absolute -top-3 -right-3">{items.length}</Badge>
          <ShoppingCartIcon />
        </Button>
      </Link>
    </>
  )
}

export default Cart

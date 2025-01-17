import { Button } from '@/components/ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

const Cart = () => {
  return (
    <>
      <Link href={'/products'}>
        <Button variant={'outline'} className="">
          <ShoppingCartIcon />
        </Button>
      </Link>
    </>
  )
}

export default Cart

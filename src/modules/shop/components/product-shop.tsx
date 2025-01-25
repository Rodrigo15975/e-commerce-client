'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useUser } from '@clerk/nextjs'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import ProductsDetails from '../../products/components/product-details'
import { useCartStore } from '../../products/store/useCartStore'
import ProductDiscountcode from './product-discount-code'

const ProductCarts = () => {
  const { user } = useUser()
  const { items } = useCartStore()
  const totalItems = items.length
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity_buy,
    0
  )
  const total = subtotal
  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Shopping Cart</CardTitle>
                <span className="text-muted-foreground">
                  {items.length} items
                </span>
              </CardHeader>
              <CardContent className="grid gap-6">
                <AnimatePresence mode="sync">
                  {items.length === 0 && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-center items-center"
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-muted-foreground flex gap-2">
                        Your cart is empty.
                        <ShoppingCart />
                      </p>
                    </motion.div>
                  )}
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex-auto"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductsDetails {...item} />
                    </motion.div>
                  ))}
                </AnimatePresence>

                <Link href={'/shop'}>
                  <Button variant={'outline'}>
                    <ArrowLeft /> Back to shop
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <ProductDiscountcode
                  totalItems={totalItems}
                  subtotal={subtotal}
                  total={total}
                />
                {user?.id ? (
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    CHECKOUT
                    <ShoppingCart />
                  </Button>
                ) : (
                  <Link href={'/sign-in'}>
                    <Button className="w-full bg-primary text-white hover:bg-gray-800">
                      <FaGoogle />
                      Login to checkout
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCarts

'use client'
import { ArrowLeft, CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useCartStore } from '../store/useCartStore'
import ProductsDetails from './product-details'
import { AnimatePresence, motion } from 'framer-motion'

const ProductCarts = () => {
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
                <div className="flex justify-between">
                  <span>Items {totalItems}</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="grid gap-2">
                  <span className="font-semibold">Give Code</span>
                  <div className="flex gap-2">
                    <Input placeholder="Enter your code" />
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-green-300"
                    >
                      <CheckIcon className="h-4 w-4 " />
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total Price</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  CHECKOUT
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCarts

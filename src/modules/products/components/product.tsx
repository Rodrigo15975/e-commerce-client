'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

interface CartItem {
  id: number
  name: string
  type: string
  price: number
  quantity: number
  image: string
}

const ProductCarts = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Shirt',
      type: 'Cotton T-shirt',
      price: 44.0,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Shirt',
      type: 'Cotton T-shirt',
      price: 44.0,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Shirt',
      type: 'Cotton T-shirt',
      price: 44.0,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ])

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, newQuantity) } // Ensure quantity is not negative
          : item
      )
    )
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = 5.0
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Shopping Cart</CardTitle>
                <span className="text-muted-foreground">
                  {totalItems} items
                </span>
              </CardHeader>
              <CardContent className="grid gap-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="grid gap-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </Button>
                        <Input
                          type="number"
                          min="0"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              Number(e.target.value)
                            )
                          }
                          className="h-8 w-16 text-center"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                      <span className="font-semibold">
                        €{item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
                <Link
                  href="#"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary"
                >
                  ← Back to shop
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
                  <span>ITEMS {totalItems}</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="grid gap-2">
                  <span className="font-semibold">SHIPPING</span>
                  <Select>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="value1">
                        Standard-Delivery- €5.00
                      </SelectItem>
                      <SelectItem value="value2">
                        Express-Delivery- €10.00
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <span className="font-semibold">GIVE CODE</span>
                  <div className="flex gap-2">
                    <Input placeholder="Enter your code" />
                    <Button variant="outline" size="icon">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>TOTAL PRICE</span>
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

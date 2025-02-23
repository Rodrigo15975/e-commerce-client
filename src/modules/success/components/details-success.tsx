'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Package, Truck, CreditCard } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PurchaseDetailsCard({
  orderNumber,
  items,
  total,
  shippingAddress,
  paymentMethod,
  estimatedDelivery,
}: PurchaseDetailsProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Detalles de la Compra</CardTitle>
        <CardDescription>Orden #{orderNumber}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Image
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
                width={96}
                height={96}
                sizes="(max-width: 768px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="https://ae-pic-a1.aliexpress-media.com/kf/S671fb33ba5fe4a1fbee5b511c9e8c0a8d.jpg_960x960q75.jpg_.avif"
                unoptimized
                quality={100}
                style={{ objectFit: 'cover' }}
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Cantidad: {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">
                  Precio: ${item.price.toFixed(2)}
                </p>
                <p className="text-sm font-bold">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator />
        <div className="space-y-2">
          <h4 className="font-semibold flex items-center">
            <Package className="mr-2" size={18} /> Resumen del Pedido
          </h4>
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Envío:</span>
            <span>Gratis</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h4 className="font-semibold flex items-center">
            <Truck className="mr-2" size={18} /> Información de Envío
          </h4>
          <p className="text-sm">{shippingAddress}</p>
          <p className="text-sm">Entrega estimada: {estimatedDelivery}</p>
        </div>

        <Separator />

        <div className="space-y-2">
          <h4 className="font-semibold flex items-center">
            <CreditCard className="mr-2" size={18} /> Método de Pago
          </h4>
          <p className="text-sm">{paymentMethod}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline" className="text-green-600 bg-green-50">
          Compra Exitosa
        </Badge>
        <Link href={'/shop'}>
          <Button variant="outline">Volver</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

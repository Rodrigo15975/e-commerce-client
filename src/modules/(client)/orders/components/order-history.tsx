'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useGeAllOrdersByClientId } from '../services/queries'
import { getStatusDetails, SkeletonCard } from './order-skeleton'
import { Calendar, DollarSign, Search } from 'lucide-react'

export default function OrderHistory() {
  const [searchTerm, setSearchTerm] = useState('')
  const { user } = useUser()
  const { data: allOrdersClient, isPending } = useGeAllOrdersByClientId(
    user?.id
  )
  const filteredOrders = allOrdersClient?.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.OrdersItems.some((item) =>
        item.product.toLowerCase().includes(searchTerm.toLowerCase())
      )
  )

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-purple-300 to-blue-600 bg-clip-text text-transparent">
        Historial de Pedidos
      </h1>
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Buscar por ID de pedido o producto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-3 text-lg rounded-full shadow-md focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isPending
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : filteredOrders?.map((order) => {
              const { icon, color } = getStatusDetails(order?.status)
              return (
                <Card
                  key={order.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-slate-400/10 to-blue-100 p-4">
                    <CardTitle className="flex  flex-col gap-2 items-start">
                      <div>
                        <h5 className="text-lg font-bold">Pedido </h5>
                        <span className="text-primary/80 text-xs">
                          Order ID: {order.id}
                        </span>{' '}
                      </div>
                      <Badge
                        className={`${color} px-2 py-1 text-xs rounded-full flex items-center`}
                      >
                        {icon}
                        <span className="ml-1 font-semibold">
                          {order.status || 'En Proceso'}
                        </span>
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap justify-between items-center mb-3 text-sm">
                      <div className="flex items-center mb-2 mr-4">
                        <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-gray-700">
                          Fecha:{' '}
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-lg font-bold text-green-600">
                          ${Number.parseFloat(order.amount_total).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Separator className="my-3" />
                    <div className="grid grid-cols-2 gap-2">
                      {order.OrdersItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg"
                        >
                          <Image
                            src={
                              item.ordersVariants[0]?.url || '/placeholder.svg'
                            }
                            alt={item.product}
                            width={40}
                            height={40}
                            className="rounded-md object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate">
                              {item.product}
                            </p>
                            <p className="text-xs text-gray-500">
                              ${Number.parseFloat(item.price).toFixed(2)} x{' '}
                              {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
      </div>
      {!isPending && filteredOrders?.length === 0 && (
        <div className="text-center text-gray-500 mt-10 text-lg">
          No se encontraron pedidos que coincidan con tu búsqueda.
        </div>
      )}
    </div>
  )
}

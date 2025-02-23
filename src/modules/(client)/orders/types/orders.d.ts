interface ClientOrderAllVariant {
  id: string
  color: string
  url: string
  createdAt: string
  updatedAt: string
  ordersItemsId: string
}

interface ClientOrderAllItem {
  id: string
  product: string
  size: string[]
  price: string
  brand: string
  description: string
  quantity: number
  discount: number
  categorie: string
  status: string
  orderId: string
  createdAt: string
  updatedAt: string
  ordersVariants: ClientOrderAllVariant[]
}

interface ClientOrderAll {
  id: string
  clientsId: string
  amount_total: string
  createdAt: string
  updatedAt: string
  OrdersItems: OrderItem[]
  status: 'Entregado' | 'En proceso' | 'Enviado' | 'Cancelado'
}

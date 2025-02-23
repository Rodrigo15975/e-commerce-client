interface ProductItem {
  id: string
  name: string
  image: string
  price: number
  quantity: number
}

interface PurchaseDetailsProps {
  orderNumber: string
  items: ProductItem[]
  total: number
  shippingAddress: string
  paymentMethod: string
  estimatedDelivery: string
}

interface ClientParams {
  idGoogle?: string
  emailGoogle?: string
  nameGoogle?: string | null
}

interface Client {
  id: string
  userIdGoogle: string
  emailGoogle: string
  nameGoogle: string
  order: Orders[]
  coupon: Coupon
  contact: Contact

  createdAt: string
  updatedAt: string
}

interface Orders {
  id: string
  Clients: string
  clientsId: string
  amount_total: number
  ordersItems: OrdersItems[]
  createdAt: string
}

interface Coupon {
  id: string
  discount: number
  startDate: string
  espiryDate: string
  expired: boolean
  code: string
  clientsId: string
}
interface OrdersItems {
  id: string
  product: string
  size: string
  price: string
  gender: string
  brand: string
  description: string
  quantity: string
  ordersVariants: OrdersVariants[]
  discount: string
  categorie: string
  status: string
  status: PaymentStatus
  createdAt: string
}

interface OrdersVariants {
  id: string
  color: string
  url: string
  ordersItemsId: string

  createdAt: string
}

enum PaymentStatus {
  requires_payment_method = 'requires_payment_method',
  requires_confirmation = 'requires_confirmation',
  requires_action = 'requires_action',
  processing = 'processing',
  requires_capture = 'requires_capture',
  canceled = 'canceled',
  succeeded = 'succeeded',
}
interface Contact {
  id: string
  addres: string
  fullName: string
  phone_number: number
  clientId: string
}

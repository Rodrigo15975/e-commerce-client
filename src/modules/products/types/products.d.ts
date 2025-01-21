type Product = {
  id: number
  quantity_buy: number
  brand: string
  category: {
    id: number
    category: string
  }
  createdAt: string
  description: string
  discount: number
  gender: string
  is_new: true
  price: number
  product: string
  productVariant: [
    {
      id: number
      color: string
      url: string
      key_url: string
    }
  ]
  quantity: number
  total_sold: number
  size: string[]
}

type Categorie = {
  id: number
  category: string
  createdAt: string
  updatedAt: string
  discountRules: {
    id: number
    categoryId: number
    discount: number
    start_date: string
    end_date: string
    is_active: boolean
    createdAt: string
    updatedAt: string
  }
}

type Review = {
  id?: number
  rating: number
  review: string
  productId: number
  userId: number
  updatedAt?: string
  createdAt?: string
}

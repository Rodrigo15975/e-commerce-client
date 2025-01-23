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
  post: Post[]
}

type CreatePost = {
  id?: number
  productId: number
  rating: number
  comments: string
  username: string | undefined | null
  userId?: string
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

type Post = {
  comments: string
  username: string
  verified: boolean

  countRating: {
    rating: number
  }

  countUserId: {
    userId: number
  }

  totalRating: {
    totalRating: number
  }
}

type Product = {
  id: number
  brand: string
  category: {
    id: number
    category: string
    createdAt: string
    updatedAt: string
  }
  categoryId: number
  createdAt: string
  description: string
  discount: number
  gender: string
  is_new: boolean
  price: number
  product: string
  productInventory: {
    id: number
    minStock: number
    stock: boolean
    productsId: number
    createdAt: string
    updatedAt: string
  }
  productVariant: {
    id: number
    color: string
    url: string
    key_url: string
    createdAt: string
    updatedAt: string
    productsId: number
  }[]
  quantity: number
  size: string[]
  total_sold: number | null
  updatedAt: string
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

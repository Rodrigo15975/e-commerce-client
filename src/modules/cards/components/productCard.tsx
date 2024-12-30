import Card from './card'

const newArrivals = [
  {
    title: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    rating: 3.6,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const topSelling = [
  {
    title: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232,
    rating: 5,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Courage Graphic T-shirt',
    price: 145,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Loose Fit Bermuda Shorts',
    price: 80,
    rating: 3,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Faded Skinny Jeans',
    price: 210,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const ProductCard = () => {
  return (
    <>
      <main className="container mx-auto px-4">
        <Card title="NEW ARRIVALS" products={newArrivals} />
        <Card title="TOP SELLING" products={topSelling} />
      </main>
    </>
  )
}

export default ProductCard

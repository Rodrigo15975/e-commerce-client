import { Button } from '@/components/ui/button'
import ItemCard from './itemCard'

interface ProductGridProps {
  title: string
  products: {
    title: string
    price: number
    originalPrice?: number
    rating: number
    image: string
    discount?: number
  }[]
}

const Card = ({ products, title }: ProductGridProps) => {
  return (
    <>
      <section className="py-8">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-6">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <ItemCard key={i} {...product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center max-w-xs mx-auto">
          <Button variant="outline" className="h-[2.8rem] rounded-lg w-full">
            View All
          </Button>
        </div>
      </section>
    </>
  )
}

export default Card

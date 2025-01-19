import { Button } from '@/components/ui/button'
import ItemCard from './itemCard'
import Link from 'next/link'

const Card = ({
  products,
  title,
  viewAllButton = true,
  toHref = '/shop',
}: {
  products: Product[]
  title: string
  viewAllButton?: boolean
  toHref?: string
}) => {
  return (
    <>
      <section className="py-8">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-6">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ItemCard key={product.id} products={product} title={title} />
          ))}
        </div>
        <div className="mt-8 flex justify-center max-w-xs mx-auto">
          {viewAllButton && (
            <Link
              href={toHref}
              className="flex gap-2 w-full justify-center items-center"
            >
              <Button
                variant="outline"
                className="h-[2.8rem] rounded-lg w-full"
              >
                View All
              </Button>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}

export default Card

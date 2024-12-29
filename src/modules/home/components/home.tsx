import { BrandStrip } from '@/components/BrandStrip'
import { Sparkle } from '@/components/Sparkle'
import Statistics from '@/components/Statistics'
import { Button } from '@/components/ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div
        className="
bg-white
"
      >
        <article className="max-w-7xl mx-auto px-6 py-12 md:py-20  ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Sparkle className="absolute -top-8 -left-8 text-primary opacity-20" />
              <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="mt-6 text-gray-600 max-sm:text-[16px] text-lg">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button
                className="mt-8 text-lg px-8 hover:bg-secondary hover:text-black py-6 max-sm:w-full"
                size="lg"
              >
                Shop Now
                <ShoppingCartIcon size={26} />
              </Button>
              <Statistics />
            </div>

            <div className="relative">
              <Sparkle className="absolute -top-6 -right-1 text-primary opacity-50" />
              <Sparkle className="absolute -bottom-0 -right-1 text-primary" />
              <Image
                src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion Models"
                className="w-full h-[524px] rounded-lg object-cover"
                width={500}
                priority
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL="https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </article>
        <BrandStrip />
      </div>
    </>
  )
}

export default Home

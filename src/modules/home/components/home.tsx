'use client'

import { BrandStrip } from '@/components/BrandStrip'
import { Sparkle } from '@/components/Sparkle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home = () => {
  const [counts, setCounts] = useState({
    brands: 0,
    products: 0,
    customers: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        brands: Math.min(prev.brands + 5, 200),
        products: Math.min(prev.products + 50, 2000),
        customers: Math.min(prev.customers + 500, 30000),
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

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
              <Sparkle className="absolute -top-8 -left-8 text-black opacity-20" />
              <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="mt-6 text-gray-600 text-lg">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button className="mt-8 text-lg px-8 py-6" size="lg">
                Shop Now
              </Button>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-4xl font-bold">{counts.brands}+</h3>
                  <p className="text-gray-600">International Brands</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">{counts.products}+</h3>
                  <p className="text-gray-600">High-Quality Products</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">{counts.customers}+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Sparkle className="absolute -top-6 -right-1 text-black opacity-50" />
              <Sparkle className="absolute -bottom-0 -right-1 text-black" />
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

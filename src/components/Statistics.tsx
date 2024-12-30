'use client'
import { useEffect, useState } from 'react'
const Statistics = () => {
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
      <div className="mt-12 grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl md:text-4xl  font-bold">{counts.brands}+</h3>
          <p className="text-gray-600">International Brands</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl  font-bold">
            {counts.products}+
          </h3>
          <p className="text-gray-600">High-Quality Products</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl  font-bold">
            {counts.customers}+
          </h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>
    </>
  )
}

export default Statistics

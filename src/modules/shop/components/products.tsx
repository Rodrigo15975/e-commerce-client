'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useGetAllProducts } from '@/modules/products/services/queries'
import { ChevronDown } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useDataGetting } from '../hooks/data-getting'
import ProductDetails from './product-details'
import SkeletonDetails from '@/components/ui/skeleton-details'

export default function Products() {
  const { data: allProduct, isPending: isPendingAllProducts } =
    useGetAllProducts()
  const { categories, colors } = useDataGetting()
  const [priceRange, setPriceRange] = useState([1])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedStyle, setSelectedStyle] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  const filteredProducts = useMemo(() => {
    if (!allProduct || allProduct.length === 0) return []

    return allProduct.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.category.category === selectedCategory

      const matchesColor =
        !selectedColor ||
        product.productVariant.some(
          (variant) => variant.color === selectedColor
        )

      const matchesSize = !selectedSize || product.size.includes(selectedSize)

      const matchesPrice =
        priceRange?.length === 2
          ? product.price >= priceRange[0] && product.price <= priceRange[1]
          : true

      const matchesStyle = !selectedStyle || product.gender === selectedStyle
      return (
        matchesCategory &&
        matchesColor &&
        matchesSize &&
        matchesPrice &&
        matchesStyle
      )
    })
  }, [
    allProduct,
    selectedCategory,
    selectedColor,
    selectedSize,
    priceRange,
    selectedStyle,
  ])

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedColor, selectedSize, priceRange, selectedStyle])

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Categories</h3>
            {categories?.map((category, i) => (
              <div
                key={i}
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setSelectedCategory(
                    category === selectedCategory ? '' : category
                  )
                }
              >
                <span
                  className={cn(
                    'text-sm',
                    category === selectedCategory &&
                      'text-primary font-medium transition text-blue-400'
                  )}
                >
                  {category}
                </span>
                <ChevronDown className="h-4 w-4" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Colors</h3>
            <div className="grid grid-cols-5 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    setSelectedColor(color === selectedColor ? '' : color)
                  }
                  className={cn(
                    'w-6 h-6 rounded-full border',
                    color === selectedColor
                      ? 'ring-2 ring-primary ring-offset-2'
                      : 'border-gray-200'
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  className="text-xs"
                  onClick={() =>
                    setSelectedSize(size === selectedSize ? '' : size)
                  }
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <Button
            variant={'outline'}
            className="w-full bg-primary/90 text-white "
            onClick={() => {
              setSelectedCategory('')
              setSelectedColor('')
              setSelectedSize('')
              setSelectedStyle('')
              setPriceRange([1])
            }}
          >
            Reset Filters
          </Button>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="md:text-4xl text-2xl  font-bold">Products</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Showing {(currentPage - 1) * productsPerPage + 1}-
                {Math.min(
                  currentPage * productsPerPage,
                  filteredProducts.length
                )}{' '}
                of {filteredProducts.length} Products
              </span>
            </div>
          </div>
          {isPendingAllProducts ? (
            <SkeletonDetails />
          ) : (
            <ProductDetails currentProducts={currentProducts} />
          )}
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? 'default' : 'outline'}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

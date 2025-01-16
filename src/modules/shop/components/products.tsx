'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'
import { useGetAllProducts } from '@/modules/products/cards/services/queries'
import { ChevronDown, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

export default function Products() {
  const { data: allProduct } = useGetAllProducts()
  const [priceRange, setPriceRange] = useState([1])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedStyle, setSelectedStyle] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  // Extract unique categories from products
  const categories = useMemo(() => {
    if (!allProduct) return []
    return Array.from(new Set(allProduct.map((p) => p.category.category)))
  }, [allProduct])
  const colors = useMemo(() => {
    if (!allProduct) return []
    const colorSet = new Set<string>()
    allProduct.forEach((product) =>
      product.productVariant.forEach((variant) => colorSet.add(variant.color))
    )
    return Array.from(colorSet)
  }, [allProduct])

  const filteredProducts = useMemo(() => {
    // Si no hay productos, retornar un array vacío
    if (!allProduct || allProduct.length === 0) return []

    return allProduct.filter((product) => {
      // Aplicar los filtros uno por uno
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
            <h3 className="font-medium">Price</h3>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={200}
              min={1}
              step={1}
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>$200</span>
            </div>
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
            className="w-full"
            onClick={() => {
              setSelectedCategory('')
              setSelectedColor('')
              setSelectedSize('')
              setSelectedStyle('')
              setPriceRange([50])
            }}
          >
            Reset Filters
          </Button>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Products</h1>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Card key={product.id}>
                <CardHeader className="p-0">
                  <div className="aspect-square relative bg-gray-100">
                    {product.productVariant[0]?.url && (
                      <Image
                        src={
                          product.productVariant[0].url ||
                          'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }
                        alt={product.product}
                        fill
                        className="object-cover"
                      />
                    )}
                    {product.discount > 0 && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    )}
                    {product.is_new && (
                      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-medium">{product.product}</h3>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <div className="flex items-center gap-1 my-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-4 w-4',
                            i < Math.floor((product.total_sold || 0) / 20)
                              ? 'fill-primary text-primary'
                              : 'text-gray-300'
                          )}
                        />
                      ))}
                    <span className="text-sm text-gray-500 ml-1">
                      {product.total_sold || 0} sold
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${product.price}</span>
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-500 line-through">
                        $
                        {Math.round(
                          product.price / (1 - product.discount / 100)
                        )}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

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

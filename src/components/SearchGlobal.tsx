'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import Card from '@/modules/products/components/card'
import { useGetAllProducts } from '@/modules/products/services/queries'
import { Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const SearchGlobal = () => {
  // implementar
  //   Catálogos pequeños: Filtrar directamente en el frontend.
  // Catálogos medianos o grandes: Usa una búsqueda en el backend con React Query y debounce.
  // Experiencia avanzada: Implementa autocompletado para sugerencias.
  const { data: allProducts } = useGetAllProducts()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative flex-1 cursor-pointer">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="w-full cursor-pointer pl-10 bg-gray-200/50 transition rounded-2xl border-none"
            placeholder="Search for products..."
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-screen-xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Products</DialogTitle>
          <DialogDescription>Search for products</DialogDescription>
        </DialogHeader>
        <div className="relative  cursor-pointer">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="max-w-xs cursor-pointer pl-10 bg-gray-200/50 transition rounded-2xl border-none"
            placeholder="Search for products..."
          />
        </div>
        <div className="grid gap-4 py-4">
          <Card title="" products={allProducts ?? []} viewAllButton={false} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SearchGlobal

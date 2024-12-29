import { Search, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
export const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 pt-14 px-6 md:px-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-3xl font-extrabold">
            SHOP.CO
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-black">
              Shop
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              On Sale
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              New Arrivals
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              Brands
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 max-w-xl mx-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="w-full pl-10 bg-gray-200/50 transition rounded-2xl border-none"
              placeholder="Search for products..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

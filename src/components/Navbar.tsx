import { User } from 'lucide-react'
import Link from 'next/link'
import Cart from './Cart'
import LinksNavbar from './LinksNavbar'
import MenuMobile from './MenuMobile'
import SearchGlobal from './SearchGlobal'
import { TopBanner } from './TopBanner'
import { Button } from './ui/button'
export const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-[9999] py-4 pt-16 pb-8 px-6 md:px-8 border-b">
      <TopBanner />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl md:text-3xl font-extrabold">
            RGD Store
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <LinksNavbar />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 flex-1 max-w-xl mx-6">
          <SearchGlobal />
        </div>
        <div className="flex items-center gap-4">
          <Button variant={'ghost'}>
            <User />
          </Button>
          <Cart />
          <MenuMobile />
        </div>
      </div>
    </nav>
  )
}

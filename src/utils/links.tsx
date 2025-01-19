import { ShoppingCartIcon } from 'lucide-react'

export const linksPublic = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  // { href: '/newProducts', label: 'New Arrivals' },
  { href: '/brands', label: 'Brands' },
]
export const linksProtectedClient = [
  // { href: '/profile', label: 'Profile' },
  { href: '/orders', label: 'Orders', icon: <ShoppingCartIcon /> },
]

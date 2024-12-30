'use client'
import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

const ProviderLayoutNavbar: FC<PropsWithChildren> = ({ children }) => {
  const pathName = usePathname()
  const noNavbar = ['/sign-in', '/sign-up'].includes(pathName)
  return (
    <>
      {!noNavbar && <Navbar />}
      {children}
      {!noNavbar && <Footer />}
    </>
  )
}

export default ProviderLayoutNavbar

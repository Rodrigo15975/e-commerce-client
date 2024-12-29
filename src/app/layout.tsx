import type { Metadata } from 'next'
import './globals.css'
import { TopBanner } from '@/components/TopBanner'
import { Navbar } from '@/components/Navbar'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'RDG Ecommer-ce',
  description: 'RDG Ecommer-ce',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LazyMotion features={domAnimation}>
          <TopBanner />
          <Navbar />
          <AnimatePresence>{children}</AnimatePresence>
        </LazyMotion>
      </body>
    </html>
  )
}

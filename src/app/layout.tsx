import ProviderLayoutNavbar from '@/layout/provider-layout-navbar'
import Clerk from '@/providers/Clerk'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import { ProviderQueryClient } from '@/providers/QueyClien'
import { Toaster } from '@/components/ui/toaster'
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
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={100000000}
          showAtBottom={false}
        />
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            <Clerk>
              <ProviderQueryClient>
                <ProviderLayoutNavbar>
                  {children}
                  <Toaster />
                </ProviderLayoutNavbar>
              </ProviderQueryClient>
            </Clerk>
          </AnimatePresence>
        </LazyMotion>
      </body>
    </html>
  )
}

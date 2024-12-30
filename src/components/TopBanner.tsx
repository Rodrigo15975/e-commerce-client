'use client'
import { useUser } from '@clerk/nextjs'
import { AnimatePresence, m } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export const TopBanner = () => {
  const { user } = useUser()
  const [isVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-primary text-white absolute z-[100000] top-0 left-0 w-full py-2 px-4 text-center text-sm "
        >
          <p className="font-medium">
            {!user?.id
              ? 'Sign up and get 20% off to your first order.'
              : 'You have a 20% discount on any product'}
            {!user?.id && (
              <Link href="/sign-in" className="underline">
                Sign Up Now
              </Link>
            )}
          </p>
        </m.div>
      )}
    </AnimatePresence>
  )
}

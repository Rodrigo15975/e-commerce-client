'use client'
import { useGetOneClientById } from '@/hooks/use-get-one-client'
import { useUser } from '@clerk/nextjs'
import { AnimatePresence, m } from 'framer-motion'
import { LoaderIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const TopBanner = () => {
  const { user, isSignedIn, isLoaded } = useUser()
  const { data: client } = useGetOneClientById(user?.id)
  const [isVisible] = useState(true)
  const { coupon, id, nameGoogle } = client || {}

  if (!isLoaded && !isSignedIn) return <LoaderIcon className="animate-spin" />

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
            {!id
              ? 'Sign up and get 20% off to your first order.'
              : coupon && client && coupon?.expired === false
              ? 'You got 20% off your first order.'
              : `Welcome ${nameGoogle} `}
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

'use client'
import { useUser } from '@clerk/nextjs'
import { AnimatePresence, m } from 'framer-motion'
import { LoaderIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const TopBanner = () => {
  const { user, isSignedIn, isLoaded } = useUser()
  const [isVisible] = useState(true)
  if (!isLoaded && !isSignedIn) return <LoaderIcon className="animate-spin" />

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div className="bg-primary text-white absolute z-[100000] top-0 left-0 w-full py-2 px-4 text-center text-sm ">
          <p className="font-medium">
            {!user?.id ? (
              <Link href="/sign-in" className="underline">
                Sign Up Now
              </Link>
            ) : (
              `Welcome ${user.firstName} `
            )}
          </p>
        </m.div>
      )}
    </AnimatePresence>
  )
}

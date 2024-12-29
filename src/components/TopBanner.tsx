'use client'
import { AnimatePresence, m } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-white absolute z-[100000] top-0 left-0 w-full py-2 px-4 text-center text-sm "
        >
          <p className="font-medium">
            Sign up and get 20% off to your first order.{' '}
            <a href="#" className="underline">
              Sign Up Now
            </a>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <X className="h-4 w-4" />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  )
}

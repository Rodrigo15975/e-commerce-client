import { ClerkProvider } from '@clerk/nextjs'
import { FC, PropsWithChildren } from 'react'

const Clerk: FC<PropsWithChildren> = ({ children }) => {
  const publishKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  return (
    <>
      <ClerkProvider publishableKey={publishKey}>{children}</ClerkProvider>
    </>
  )
}

export default Clerk

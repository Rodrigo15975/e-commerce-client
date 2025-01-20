import { ClerkProvider } from '@clerk/nextjs'
import { FC, PropsWithChildren } from 'react'

const Clerk: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ClerkProvider>{children}</ClerkProvider>
    </>
  )
}

export default Clerk

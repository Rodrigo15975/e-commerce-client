import { ClerkProvider } from '@clerk/nextjs'
import { FC, PropsWithChildren } from 'react'

const Clerk: FC<PropsWithChildren> = ({ children }) => {
  const publishKey = 'pk_test_bWFzc2l2ZS1ndXBweS05Ni5jbGVyay5hY2NvdW50cy5kZXYk'
  return (
    <>
      <ClerkProvider publishableKey={publishKey}>{children}</ClerkProvider>
    </>
  )
}

export default Clerk

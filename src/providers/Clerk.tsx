import { ClerkProvider } from '@clerk/nextjs'
import { FC, PropsWithChildren } from 'react'

const Clerk: FC<PropsWithChildren> = ({ children }) => {
  // const publishableKey =
  //   process.env.NODE_ENV === 'production'
  //     ? process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  //     : process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  return (
    <>
      <ClerkProvider
        signInUrl="/sign-in"
        publishableKey={
          'pk_live_Y2xlcmsuZDJsMm94cm9lcXFldWsuYW1wbGlmeWFwcC5jb20k'
        }
      >
        {children}
      </ClerkProvider>
    </>
  )
}

export default Clerk

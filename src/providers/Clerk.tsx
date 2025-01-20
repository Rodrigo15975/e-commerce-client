import { ClerkProvider } from '@clerk/nextjs'
import { FC, PropsWithChildren } from 'react'

const Clerk: FC<PropsWithChildren> = ({ children }) => {
  // const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  // console.log({
  //   publishableKey,
  // })

  return (
    <>
      <ClerkProvider
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

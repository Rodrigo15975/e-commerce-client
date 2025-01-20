import { ClerkProvider } from '@clerk/nextjs'
import { FC, PropsWithChildren } from 'react'

const Clerk: FC<PropsWithChildren> = ({ children }) => {
  const publishKey = 'pk_live_Y2xlcmsuZDJsMm94cm9lcXFldWsuYW1wbGlmeWFwcC5jb20k'
  return (
    <>
      <ClerkProvider publishableKey={publishKey}>{children}</ClerkProvider>
    </>
  )
}

export default Clerk

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useGetOneClientById } from './use-get-one-client'
import { useCreateCouponNewUser } from './useCreate-cupon-new-user'

export const useVerifOneClient = () => {
  const { user, isSignedIn } = useUser()
  const { mutate: createCoupon } = useCreateCouponNewUser()
  const { data: client, isLoading, isError } = useGetOneClientById(user?.id)

  useEffect(() => {
    if (isSignedIn && user && !isLoading && !isError)
      if (!client?.nameGoogle)
        return createCoupon({
          emailGoogle: user?.primaryEmailAddress?.emailAddress,
          idGoogle: user?.id,
          nameGoogle: user?.firstName,
        })
  }, [isSignedIn, user, client, isLoading, isError, createCoupon])

  return { client, isLoading, isError }
}

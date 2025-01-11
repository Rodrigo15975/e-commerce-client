import { useUser } from '@clerk/nextjs'
import {
  QueryObserverResult,
  RefetchOptions,
  UseMutateFunction,
} from '@tanstack/react-query'
import { useEffect } from 'react'
import { useGetOneClientById, useVerifyOneClient } from './use-get-one-client'
import { useCreateCouponNewUser } from './useCreate-cupon-new-user'

export const useVerifyOneClientExisting = () => {
  const { user, isSignedIn } = useUser()
  const { mutate: newCouponDiscount } = useCreateCouponNewUser()
  const {
    isPending: isLoading,
    isError,
    mutate: verifyClient,
  } = useVerifyOneClient()
  const { refetch, data: client } = useGetOneClientById(user?.id)
  useEffect(() => {
    if (isSignedIn && user && !isLoading && !isError) {
      verifyClient(user.id, {
        async onSuccess(isNewClient) {
          if (!isNewClient.emailGoogle) {
            const {
              id: idGoogle,
              primaryEmailAddress,
              firstName: nameGoogle,
            } = user
            createCoupon(
              newCouponDiscount,
              {
                emailGoogle: primaryEmailAddress?.emailAddress,
                idGoogle,
                nameGoogle,
              },
              refetch
            )
          }
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn, user])

  return { isLoading, isError, client }
}

const createCoupon = (
  newCouponDiscount: UseMutateFunction<
    ResponseNewUser,
    Error,
    ClientParams,
    unknown
  >,
  {
    emailGoogle,
    idGoogle,
    nameGoogle,
  }: { emailGoogle?: string; idGoogle?: string; nameGoogle?: string | null },
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<Client, Error>>
) =>
  newCouponDiscount(
    {
      emailGoogle,
      idGoogle,
      nameGoogle,
    },
    {
      onSuccess: async () => await refetch(),
    }
  )

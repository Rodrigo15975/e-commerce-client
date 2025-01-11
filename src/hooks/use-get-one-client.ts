import { getOneClient, verifyOneClient } from '@/actions/get-one-client'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetOneClientById = (id?: string) => {
  return useQuery({
    queryKey: ['get-one-client', id],
    queryFn: () => getOneClient(id),
    retry: 2,
    retryDelay: 10000,
    gcTime: 5000000,
    enabled: !!id,
    staleTime: 5000000,
  })
}

export const useVerifyOneClient = () =>
  useMutation({
    mutationFn: (id?: string) => verifyOneClient(id),
    retry: 2,
    retryDelay: 10000,
  })

import { getOneClient } from '@/actions/get-one-client'
import { useQuery } from '@tanstack/react-query'

export const useGetOneClientById = (id?: string) => {
  return useQuery({
    queryKey: ['get-one-client', id],
    queryFn: () => getOneClient(id),
    retry: 2,
    retryDelay: 10000,
    gcTime: 200000,
    enabled: !!id,
    staleTime: 200000,
  })
}

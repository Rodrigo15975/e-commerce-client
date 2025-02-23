import { useQuery } from '@tanstack/react-query'
import { getAllOrdersByClientId } from './api'

export const useGeAllOrdersByClientId = (
  userIdGoogle: string | null | undefined
) =>
  useQuery({
    queryKey: ['orders', userIdGoogle],
    queryFn: () => getAllOrdersByClientId(userIdGoogle),
    enabled: !!userIdGoogle,
    retry: 2,
    retryDelay: 5000,
    staleTime: 5000000,
    gcTime: 5000000,
  })

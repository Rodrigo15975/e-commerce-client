import { createCouponNewUser } from '@/actions/create-coupon-new-user'
import { useMutation } from '@tanstack/react-query'
import { useToast } from './use-toast'

export const useCreateCouponNewUser = () => {
  const { toast } = useToast()
  return useMutation({
    mutationFn: createCouponNewUser,
    mutationKey: ['create-coupon-new-user'],
    onMutate: async (idGoogle: string) => {
      console.log({
        idGoogle,
      })
    },
    onError: async (error) => {
      console.error(error)
      toast({
        title: 'Error',
        description: 'There was an error',
      })
    },
    onSuccess: async () => {
      toast({
        title: 'You have a new coupon for your account.',
        description: 'Check your email for more information.',
      })
    },
  })
}

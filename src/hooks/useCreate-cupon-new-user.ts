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
        className: 'bg-gradient-to-r from-rose-400 to-red-500',
        description: 'There was an error',
      })
    },
    onSuccess: (data) => {
      console.log({
        data,
      })

      toast({
        title: 'You have a new coupon for your account.',
        description: 'Check your email for more information.',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
  })
}

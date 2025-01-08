import { createCouponNewUser } from '@/actions/create-coupon-new-user'
import { useMutation } from '@tanstack/react-query'
import { useToast } from './use-toast'

export const useCreateCouponNewUser = () => {
  const { toast } = useToast()
  return useMutation({
    mutationFn: ({ emailGoogle, idGoogle, nameGoogle }: ClientParams) =>
      createCouponNewUser({
        emailGoogle,
        idGoogle,
        nameGoogle,
      }),
    mutationKey: ['create-coupon-new-user'],

    onError: async (error) => {
      console.error(error)
      toast({
        title: 'Error',
        className: 'bg-gradient-to-r from-rose-400 to-red-500',
        variant: 'destructive',
        description: 'There was an error',
      })
    },
    onSuccess: (data) => {
      const { message, newClient } = data
      if (newClient)
        toast({
          title: 'Welcome to our platform',
          className: 'bg-gradient-to-r from-rose-400 to-red-500',
          description: message,
        })
    },
  })
}

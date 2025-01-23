import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNewReview } from './api'
import { useToast } from '@/hooks/use-toast'

export const useCreateNewReview = () => {
  const { toast } = useToast()
  const useClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-new-review'],
    mutationFn: createNewReview,
    onMutate: async (newReview) => {
      const { productId, comments, rating, username, userId } = newReview

      await useClient.cancelQueries({
        queryKey: ['get-one-product', productId],
      })

      await useClient.refetchQueries({
        queryKey: ['get-all-products'],
      })

      useClient.setQueryData(
        ['get-one-product', productId],
        (oldData: Product) => {
          if (oldData) {
            return {
              ...oldData,
              post: [
                ...oldData.post,
                {
                  comments,
                  countRating: {
                    rating,
                  },
                  countUserId: {
                    userId,
                  },
                  totalRating: {
                    totalRating: rating,
                  },
                  username,
                  verified: true,
                },
              ],
            }
          }
          return oldData
        }
      )
    },
    onSuccess: () => {
      toast({
        title: 'Review created',
        description: 'Review created successfully',
        translate: 'yes',
        duration: 2000,
      })
    },
    onError: (error) => {
      toast({
        title: 'Something went wrong',
        description: error.message,
        translate: 'yes',
        duration: 2000,
      })
    },
  })
}

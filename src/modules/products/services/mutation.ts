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
      const { productId } = newReview
      console.log({
        productId,
      })

      // await useClient.cancelQueries({
      //   queryKey: ['get-one-product', productId],
      // })

      // const { productId } = newReview
      // await useClient.cancelQueries(['get-one-product', productId])
      // const previousReview = useClient.getQueryData([
      //   'get-one-product',
      //   newReview.productId,
      // ])
      // useClient.setQueryData(
      //   ['get-one-product', newReview.productId],
      //   (old) => {
      //     return {
      //       ...old,
      //       reviews: [...old.reviews, newReview],
      //     }
      //   }
      // )
      // return { previousReview }
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

import { useMutation } from '@tanstack/react-query'
import { verifyCodeDiscount } from './api'
import { useToast } from '@/hooks/use-toast'
import { AxiosError } from 'axios'

export const useVerifyCodeDiscount = () => {
  const { toast } = useToast()
  return useMutation({
    mutationKey: ['verify-code-discount'],
    mutationFn: verifyCodeDiscount,
    retry: 2,
    retryDelay: 5000,
    onSuccess: (response) => {
      const { message: description, title } = response
      if (description && title)
        return toast({
          title,
          className:
            'bg-gradient-to-b from-orange-50 via-amber-100 to-yellow-100',
          description,
        })

      toast({
        title: 'Something went wrong',
        className: 'bg-gradient-to-r from-rose-400 to-red-500',
        variant: 'destructive',
        description: 'Something went wrong, Retrying please wait',
      })
    },
    onError: (error: AxiosError<string>) => {
      const message = error.response?.data
      toast({
        title: 'Something went wrong',
        className: 'bg-gradient-to-r from-rose-400 to-red-500',
        variant: 'destructive',
        description: `${message ?? error.message} Retrying please wait`,
      })
    },
  })
}

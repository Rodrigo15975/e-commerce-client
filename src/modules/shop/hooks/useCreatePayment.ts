import { useCreatePayment } from '../services/mutation'
import { useCartStore } from '@/modules/products/store/useCartStore'

export const useCreatePaymentHandler = () => {
  const { items } = useCartStore()
  const { mutate, isPending } = useCreatePayment()

  const createPayment = ({
    totalPrice,
    userEmail,
    userId,
  }: {
    totalPrice: number
    userEmail: string
    userId: string
  }) =>
    mutate({
      totalPrice,
      items,
      emailUser: userEmail,
      idUser: userId,
    })

  return { createPayment, isPending }
}

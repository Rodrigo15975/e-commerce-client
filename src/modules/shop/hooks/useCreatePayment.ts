import { useCreatePayment } from '../services/mutation'
import { useCartStore } from '@/modules/products/store/useCartStore'

export const useCreatePaymentHandler = () => {
  const { items } = useCartStore()
  const { mutate, isPending } = useCreatePayment()

  const createPayment = ({
    totalPrice,
    userEmail,
    userId,
    codeUsed,
  }: {
    totalPrice: number
    userEmail: string
    userId: string
    codeUsed: boolean
  }) => {
    if (codeUsed) {
      return mutate(
        {
          totalPrice,
          items,
          emailUser: userEmail,
          idUser: userId,
          codeUsed,
        },
        {
          onSuccess: () => {
            useCartStore.setState({ items: [] })
          },
        }
      )
    }
    mutate(
      {
        totalPrice,
        items,
        emailUser: userEmail,
        idUser: userId,
        codeUsed: false,
      },
      {
        onSuccess: () => {
          useCartStore.setState({
            items: [],
          })
        },
      }
    )
  }
  return { createPayment, isPending }
}

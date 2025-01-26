import { useState } from 'react'
import { useVerifyCodeDiscount } from '../services/mutation'

export const useDiscountCode = (total: number) => {
  const [code, setCode] = useState<string>('')
  const [newTotalWithDiscount, setNewTotalWithDiscount] =
    useState<number>(total)
  const [applyDiscount, setApplyDiscount] = useState<boolean>(false)
  const { mutate: verifyCodeDiscount, isPending } = useVerifyCodeDiscount()

  const sendVerify = (userId: string | undefined) => {
    if (!userId) return
    verifyCodeDiscount(
      { code, userIdGoogle: userId },
      {
        onSuccess: (response) => {
          const { discount } = response
          if (discount) {
            setNewTotalWithDiscount(total - (total * discount) / 100)
            setApplyDiscount(true)
          }
        },
      }
    )
  }

  return {
    code,
    setCode,
    newTotalWithDiscount,
    applyDiscount,
    isPending,
    sendVerify,
  }
}

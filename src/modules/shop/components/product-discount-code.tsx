import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'
import { CheckIcon, LoaderIcon } from 'lucide-react'
import { useVerifyCodeDiscount } from '../services/mutation'
import { useVerifyOneClientExisting } from '@/hooks/use-verify-one-client'
import { useState } from 'react'
import { Separator } from '@/components/ui/separator'
const ProductDiscountcode = ({
  subtotal,
  totalItems,
  total,
}: {
  totalItems: number
  subtotal: number
  total: number
}) => {
  const [code, setCode] = useState<string>('')
  const [newTotalWithDiscount, setNewTotalWithDiscount] =
    useState<number>(total)
  const [applyDiscount, setApplyDiscount] = useState<boolean>(false)
  const { client } = useVerifyOneClientExisting()
  const { mutate: verifyCodeDiscount, isPending } = useVerifyCodeDiscount()
  const { user } = useUser()
  const sendVerify = () =>
    verifyCodeDiscount(
      {
        code,
        userIdGoogle: user?.id,
      },
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

  return (
    <>
      <div className="flex justify-between">
        <span>Items {totalItems}</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="grid gap-2">
        <span className="font-semibold">Give Code </span>
        {client && client?.coupon?.code && (
          <>
            <div className="text-[.8rem]">
              <p>
                Your code:
                <span className="font-bold">{client?.coupon?.code}</span>
              </p>
            </div>
          </>
        )}
        <div className="flex gap-2">
          <Input
            placeholder="Enter your code"
            onChange={({ target }) => setCode(target.value)}
          />
          <Button
            disabled={code.length <= 7 || code.length > 8 || isPending}
            onClick={sendVerify}
            variant="outline"
            size="icon"
            className={`bg-green-300  ${
              code.length <= 7 || (code.length > 8 && 'bg-slate-50')
            }  `}
          >
            {isPending ? <LoaderIcon /> : <CheckIcon className="h-4 w-4 " />}
          </Button>
        </div>
      </div>
      <Separator />
      {applyDiscount && (
        <div className="flex  text-xs justify-between">
          <span className="">Total Price without discount</span>
          <span className="line-through">${total.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between font-semibold">
        <span>Total Price</span>
        <span>${newTotalWithDiscount.toFixed(2)}</span>
      </div>
    </>
  )
}

export default ProductDiscountcode

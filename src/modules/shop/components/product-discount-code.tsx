import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'
import { CheckIcon } from 'lucide-react'
import { useVerifyCodeDiscount } from '../services/mutation'
import { useVerifyOneClientExisting } from '@/hooks/use-verify-one-client'
import { useState } from 'react'
const ProductDiscountcode = ({
  subtotal,
  totalItems,
}: {
  totalItems: number
  subtotal: number
}) => {
  const [code, setCode] = useState<string>('')
  const { client } = useVerifyOneClientExisting()
  const { mutate: verifyCodeDiscount } = useVerifyCodeDiscount()
  const { user } = useUser()
  const sendVerify = () =>
    verifyCodeDiscount({
      code,
      userIdGoogle: user?.id,
    })

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
            disabled={code.length <= 7 || code.length > 8}
            onClick={sendVerify}
            variant="outline"
            size="icon"
            className={`bg-green-300  ${
              code.length <= 7 || (code.length > 8 && 'bg-slate-50')
            }  `}
          >
            <CheckIcon className="h-4 w-4 " />
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductDiscountcode

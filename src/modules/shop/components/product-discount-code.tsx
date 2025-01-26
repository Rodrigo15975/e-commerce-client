import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'
import { CheckIcon, LoaderIcon, ShoppingCart } from 'lucide-react'
import { useCreatePayment, useVerifyCodeDiscount } from '../services/mutation'
import { useVerifyOneClientExisting } from '@/hooks/use-verify-one-client'
import { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import { useCartStore } from '@/modules/products/store/useCartStore'
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

  const { user } = useUser()
  const { client } = useVerifyOneClientExisting()
  const { mutate: verifyCodeDiscount, isPending } = useVerifyCodeDiscount()
  const { mutate: createPayment, isPending: isPendingPayment } =
    useCreatePayment()
  const { items } = useCartStore()
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
  const handledCreatePayment = () => {
    createPayment({
      totalPrice: newTotalWithDiscount,
      items,
      emailUser: user?.primaryEmailAddress?.emailAddress ?? '',
      idUser: user?.id ?? '',
    })
  }

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

      {user?.id ? (
        <Button
          disabled={items.length === 0 || isPending || isPendingPayment}
          onClick={handledCreatePayment}
          className={'w-full bg-primary  text-white hover:bg-gray-800'}
        >
          {isPendingPayment ? (
            <LoaderIcon className="animate-spin" />
          ) : (
            <>
              CHECKOUT
              <ShoppingCart />
            </>
          )}
        </Button>
      ) : (
        <Link href={'/sign-in'}>
          <Button className="w-full bg-primary text-white hover:bg-gray-800">
            <FaGoogle />
            Login to checkout
          </Button>
        </Link>
      )}
    </>
  )
}

export default ProductDiscountcode

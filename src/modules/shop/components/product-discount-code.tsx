import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useVerifyOneClientExisting } from '@/hooks/use-verify-one-client'
import { useCartStore } from '@/modules/products/store/useCartStore'
import { useUser } from '@clerk/nextjs'
import { CheckIcon, LoaderIcon, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import { useCreatePaymentHandler } from '../hooks/useCreatePayment'
import PriceSummary from './product-price-summary'
import { useDiscountCode } from '../hooks/useApplyDiscount'
const ProductDiscountcode = ({
  subtotal,
  totalItems,
  total,
}: {
  totalItems: number
  subtotal: number
  total: number
}) => {
  const { user } = useUser()
  const { client } = useVerifyOneClientExisting()
  const {
    applyDiscount,
    code,
    isPending,
    newTotalWithDiscount,
    sendVerify,
    setCode,
  } = useDiscountCode(total)

  const { createPayment, isPending: isPendingPayment } =
    useCreatePaymentHandler()
  const { items } = useCartStore()

  const handledDiscountCode = () => sendVerify(user?.id)
  const handledCreatePayment = () =>
    createPayment({
      totalPrice: newTotalWithDiscount,
      userEmail: user?.primaryEmailAddress?.emailAddress ?? '',
      userId: user?.id ?? '',
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
            disabled={code.length <= 7 || code.length > 8 || isPending}
            onClick={handledDiscountCode}
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
      <PriceSummary
        applyDiscount={applyDiscount}
        total={total}
        newTotalWithDiscount={newTotalWithDiscount}
        subtotal={subtotal}
        totalItems={totalItems}
      />

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

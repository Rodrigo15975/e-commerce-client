import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/path-services/path-services'

export const verifyCodeDiscount = async ({
  code,
  userIdGoogle,
}: {
  code: string | undefined
  userIdGoogle: string | undefined
}) =>
  await useMethods.GET<ResponseApi>(
    `${PathServices.CLIENTS}/coupon/${userIdGoogle}/${code}`
  )

export const createPayment = async (
  data: CreatePayment[],
  totalPrice: number,
  emailUser: string,
  idUser: string
) =>
  await useMethods.POST<ResponsePayment, CreatePayment[]>(
    `${PathServices.PAYMENTS}/${totalPrice}/${emailUser}/${idUser}`,
    data
  )

'use server'
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

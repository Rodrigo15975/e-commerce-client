'use server'

import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/path-services/path-services'

export const createCouponNewUser = async ({
  idGoogle,
  emailGoogle,
  nameGoogle,
}: ClientParams) =>
  await useMethods.POST<ResponseNewUser, null>(
    `${PathServices.CLIENTS}/${idGoogle}?emailGoogle=${emailGoogle}&nameGoogle=${nameGoogle}`
  )

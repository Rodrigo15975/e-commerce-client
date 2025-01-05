'use server'

import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/path-services/path-services'

export const createCouponNewUser = async (idGoogle: string) =>
  await useMethods.POST<string, ResponseExistingUser>(
    `${PathServices.CLIENTS}/${idGoogle}`
  )

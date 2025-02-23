import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/path-services/path-services'

export const getAllOrdersByClientId = async (
  userIdGoogle: string | null | undefined
) =>
  await useMethods.GET<ClientOrderAll[]>(
    `${PathServices.CLIENTS}/ordersClient/${userIdGoogle}`
  )

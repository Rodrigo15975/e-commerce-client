import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/path-services/path-services'

export const getOneClient = async (id?: string) =>
  await useMethods.GET<Client>(`${PathServices.CLIENTS}/${id}`)

export const verifyOneClient = async (id?: string) =>
  await useMethods.GET<Client>(
    `${PathServices.CLIENTS}/verify/${id}?verify=true`
  )

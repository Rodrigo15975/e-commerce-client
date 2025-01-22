import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/path-services/path-services'

export const getAllProducts = async () =>
  await useMethods.GET<Product[]>(`${PathServices.PRODUCTS}/client`)

export const getAllCategories = async () =>
  await useMethods.GET<Categorie[]>(PathServices.CATEGORIES)

export const getOneProduct = async (id: number | undefined) =>
  await useMethods.GET<Product>(`${PathServices.PRODUCTS}/${id}`)

export const createNewReview = async (data: Post) =>
  await useMethods.POST<ResponseApi, Post>(
    `${PathServices.CLIENTS}/review`,
    data
  )

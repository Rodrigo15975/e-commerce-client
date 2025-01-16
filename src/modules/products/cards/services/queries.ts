import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/path-services/path-services'
import { useQuery } from '@tanstack/react-query'

const getAllProducts = async () =>
  await useMethods.GET<Product[]>(PathServices.PRODUCTS)

const getAllCategories = async () =>
  await useMethods.GET<Categorie[]>(PathServices.CATEGORIES)

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ['get-all-products'],
    queryFn: getAllProducts,
    gcTime: 5000000,
    staleTime: 5000000,
    retry: 2,
    retryDelay: 20000,
    placeholderData: [],
  })
export const useGetAllcategories = () =>
  useQuery({
    queryKey: ['get-all-categories'],
    queryFn: getAllCategories,
    gcTime: 5000000,
    staleTime: 5000000,
    retry: 2,
    retryDelay: 20000,
    placeholderData: [],
  })

import { useQuery } from '@tanstack/react-query'
import { getAllCategories, getAllProducts, getOneProduct } from './api'

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

export const useGetOneProduct = (id: number | undefined) =>
  useQuery({
    queryKey: ['get-one-product', id],
    queryFn: () => getOneProduct(id),
    gcTime: 5000000,
    staleTime: 5000000,
    retry: 2,
    retryDelay: 20000,
    enabled: !!id,
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

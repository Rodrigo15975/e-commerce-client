import { PathServices } from '@/path-services/path-services'
import { MethodsAxios } from './adapters-axios'

export class UseMethods extends MethodsAxios {}

export const useMethods = new UseMethods(PathServices.URL)

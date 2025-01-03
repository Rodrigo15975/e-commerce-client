import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class MethodsAxios implements MethodsAxiosInterface {
  private readonly axiosAdapter: AxiosInstance
  constructor(urlBase: string) {
    // add BASE-URL
    this.axiosAdapter = axios.create({
      baseURL: urlBase,
      withCredentials: true,
      // problema es el withCredentials
    })
  }

  async DELETE<T>(url: string, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.delete<T>(url, { ...config })

    return data
  }
  async PATCH<T, D>(url: string, dataPATCH?: D, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.patch<T>(url, dataPATCH, {
      ...config,
    })
    return data
  }

  async GET<T>(url: string, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.get<T>(url, { ...config })

    return data
  }
  // T Es el tipado que te duelve, D tipado que se mandará
  // el T PODRIA PONERLO DIRECTO ACA PARA QUE RESPONDA Y NOAÑADIRLO UNO POR UNO
  async POST<T, D>(url: string, dataPOST?: D, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.post<T>(url, dataPOST, {
      ...config,
    })
    return data
  }
  async PUT<T>(url: string, dataPUT?: T, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.put<T>(url, dataPUT, { ...config })
    return data
  }
}

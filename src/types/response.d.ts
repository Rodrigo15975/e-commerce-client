interface ResponseNewUser {
  message: string
  statusCode: number
  service: string
  id?: number | undefined
  newClient: boolean
  discount?: number | undefined
}

type ResponseApi = ResponseNewUser

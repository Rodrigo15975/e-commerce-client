interface ResponseNewUser {
  message: string
  title?: string | undefined
  statusCode: number
  service: string
  id?: number | undefined
  newClient: boolean
  discount?: number | undefined
}

interface ResponseRabbit {
  title?: string
  message?: string
  statusCode?: HttpStatus
  service?: string
  discount?: number
}

type ResponseApi = ResponseRabbit

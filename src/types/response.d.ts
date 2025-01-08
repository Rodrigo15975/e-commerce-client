interface ResponseNewUser {
  message: string
  statusCode: number
  service: string
  id?: number | undefined
  newClient: boolean
}

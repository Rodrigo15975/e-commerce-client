type CreatePayment = Omit<Product, 'id' | 'post'>

interface ResponsePayment {
  url: string
}

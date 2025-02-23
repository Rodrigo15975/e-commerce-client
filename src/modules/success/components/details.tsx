import PurchaseDetailsCard from './details-success'

const Details = () => {
  const purchaseDetails = {
    orderNumber: 'ORD-12345',
    items: [
      {
        id: '1',
        name: 'Auriculares Inalámbricos Premium',
        image:
          'https://ae-pic-a1.aliexpress-media.com/kf/S671fb33ba5fe4a1fbee5b511c9e8c0a8d.jpg_960x960q75.jpg_.avif',
        price: 129.99,
        quantity: 6,
      },
      {
        id: '2',
        name: 'Smartwatch Deportivo',
        image:
          'https://ae-pic-a1.aliexpress-media.com/kf/S671fb33ba5fe4a1fbee5b511c9e8c0a8d.jpg_960x960q75.jpg_.avif',
        price: 199.99,
        quantity: 5,
      },
      {
        id: '3',
        name: 'Cargador Inalámbrico',
        image:
          'https://ae-pic-a1.aliexpress-media.com/kf/S671fb33ba5fe4a1fbee5b511c9e8c0a8d.jpg_960x960q75.jpg_.avif',
        price: 29.99,
        quantity: 3,
      },
    ],
    total: 389.96,
    shippingAddress: 'Calle Ejemplo 123, Ciudad, País, CP 12345',
    paymentMethod: 'Tarjeta de crédito terminada en 1234',
    estimatedDelivery: '3-5 días hábiles',
  }
  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          ¡Gracias por tu compra!
        </h1>
        <PurchaseDetailsCard {...purchaseDetails} />
      </div>
    </>
  )
}

export default Details

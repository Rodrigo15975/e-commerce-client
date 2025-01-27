import dynamic from 'next/dynamic'

const DynamicComponente = dynamic(() => import('@/modules/shop/pages/pageShop'))

const Cart = () => {
  return (
    <>
      <DynamicComponente />
    </>
  )
}

export default Cart

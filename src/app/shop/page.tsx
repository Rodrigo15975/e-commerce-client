import dynamic from 'next/dynamic'
// import PageShop from '@/modules/shop/pages/pageShop'

const DynamicComponente = dynamic(() => import('@/modules/shop/pages/pageShop'))

const Cart = () => {
  return (
    <>
      <DynamicComponente />
    </>
  )
}

export default Cart

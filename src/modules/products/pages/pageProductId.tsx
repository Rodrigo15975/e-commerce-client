import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import DetailsOneProduct from '../components/productdetailsId'
import { getOneProduct } from '../services/api'

const PageProductId = async ({ id }: { id: number | undefined }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['get-one-product', id],
    queryFn: () => getOneProduct(id),
  })

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailsOneProduct id={id} />
      </HydrationBoundary>
    </>
  )
}

export default PageProductId

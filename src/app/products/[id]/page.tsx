import DetailsProductID from '@/modules/products/pages/pageProductId'
interface PageProps {
  params: Promise<{
    id: string
  }>
}
const PageProductID = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const idNumber = Number(resolvedParams.id)
  return (
    <>
      <DetailsProductID id={idNumber} />
    </>
  )
}

export default PageProductID

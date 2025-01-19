import PageHome from '@/modules/home/pages/page-home'
import PageCard from '@/modules/products/pages/pageCard'
import BrowseStylesPage from '@/modules/browse-styles/pages/browseStylesPage'

export default function Home() {
  return (
    <>
      <PageHome />
      <PageCard />
      <BrowseStylesPage />
    </>
  )
}

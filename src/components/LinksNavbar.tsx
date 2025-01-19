import { linksPublic } from '@/utils/links'
import LinksNavDynamic from './linksNavDynamic'

const LinksNavbar = () => {
  return (
    <>
      <LinksNavDynamic linksDynamic={linksPublic} />
    </>
  )
}

export default LinksNavbar

import { linksPublic } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LinksNavbar = () => {
  const path = usePathname()

  const isPathActive = (href: string) =>
    path === href
      ? 'underline underline-offset-4 font-semibold text-primary transition-all'
      : 'text-gray-500 hover:underline-offset-2 hover:underline transition-all hover:text-primary'

  return (
    <>
      {linksPublic.map((link, index) => (
        <Link
          key={`${index}-${link.label}`}
          href={link.href}
          className={`text-gray-500 ${isPathActive(link.href)}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

export default LinksNavbar

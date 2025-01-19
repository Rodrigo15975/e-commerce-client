import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LinksNavDynamic = ({
  linksDynamic,
  className,
}: {
  linksDynamic: { href: string; label: string; icon?: React.JSX.Element }[]
  className?: string
}) => {
  const path = usePathname()

  const isPathActive = (href: string) =>
    path === href
      ? 'underline underline-offset-4 font-semibold text-primary transition-all'
      : 'text-gray-500 hover:underline-offset-2 hover:underline transition-all hover:text-primary'

  return (
    <>
      {linksDynamic.map((link, index) => (
        <Link
          key={`${index}-${link.label}`}
          href={link.href}
          className={`text-gray-500 h-[30px] ${isPathActive(link.href)} ${cn(
            className
          )} `}
        >
          <div className="mr-2">{link.icon}</div>
          {link.label}
        </Link>
      ))}
    </>
  )
}

export default LinksNavDynamic

import Link from 'next/link'

const LinksNavbar = () => {
  return (
    <>
      <Link
        href="#"
        className="text-gray-500 hover:underline-offset-2 hover:underline transition-all hover:text-primary"
      >
        Shop
      </Link>
      <Link
        href="#"
        className="text-gray-500 hover:underline-offset-2 hover:underline transition-all hover:text-primary"
      >
        On Sale
      </Link>
      <Link
        href="#"
        className="text-gray-500 hover:underline-offset-2 hover:underline transition-all hover:text-primary"
      >
        New Arrivals
      </Link>
      <Link
        href="#"
        className="text-gray-500 hover:underline-offset-2 hover:underline transition-all hover:text-primary"
      >
        Brands
      </Link>
    </>
  )
}

export default LinksNavbar

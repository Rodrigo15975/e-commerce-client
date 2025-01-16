import Image from 'next/image'
import Link from 'next/link'

const CardBrowseStyle = () => {
  return (
    <div className="md:px-20">
      <section className="w-full px-4 py-8  shadow-2xl md:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Casual Card */}
            <Link
              href="/shop"
              className="col-span-1 row-span-1 aspect-[4/3] md:aspect-[3/2]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1541452230789-003e928e582b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Casual style clothing"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-bold text-white">
                  Casual
                </h3>
              </div>
            </Link>

            {/* Formal Card */}
            <Link
              href="/shop"
              className="col-span-1 row-span-1 aspect-[4/3] md:aspect-[3/2]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1472417583565-62e7bdeda490?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Formal style clothing"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-bold text-white">
                  Formal
                </h3>
              </div>
            </Link>

            {/* Party Card */}
            <Link
              href="/shop"
              className="col-span-2 row-span-1 aspect-[16/7] md:aspect-[16/5]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Party style clothing"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-bold text-white">
                  Party
                </h3>
              </div>
            </Link>

            {/* Gym Card */}
            <Link
              href="/shop"
              className="col-span-2 row-span-1 aspect-[16/7] md:aspect-[16/5]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Gym style clothing"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-bold text-white">
                  Gym
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardBrowseStyle

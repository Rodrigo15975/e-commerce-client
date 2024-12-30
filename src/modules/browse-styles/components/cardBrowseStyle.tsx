import Image from 'next/image'
import Link from 'next/link'

const CardBrowseStyle = () => {
  return (
    <>
      <section className="w-full px-4 py-8 md:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Casual Card */}
            <Link
              href="/styles/casual"
              className="col-span-1 row-span-1 aspect-[4/3] md:aspect-[3/2]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="/placeholder.svg"
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
              href="/styles/formal"
              className="col-span-1 row-span-1 aspect-[4/3] md:aspect-[3/2]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="/placeholder.svg"
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
              href="/styles/party"
              className="col-span-2 row-span-1 aspect-[16/7] md:aspect-[16/5]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="/placeholder.svg"
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
              href="/styles/gym"
              className="col-span-2 row-span-1 aspect-[16/7] md:aspect-[16/5]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                <Image
                  src="/placeholder.svg"
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
    </>
  )
}

export default CardBrowseStyle

export const BrandStrip = () => {
  const brands = [
    { name: 'VERSACE', className: 'font-serif' },
    { name: 'ZARA', className: 'font-sans' },
    { name: 'GUCCI', className: 'font-serif' },
    { name: 'PRADA', className: 'font-serif' },
    { name: 'Calvin Klein', className: 'font-sans' },
  ]
  return (
    <div className="w-full bg-primary py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-around items-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className={`text-2xl md:text-4xl font-bold text-white `}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

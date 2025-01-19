'use client'
import SkeletonDetails from '@/components/ui/skeleton-details'
import { useGetAllBrands } from '../hooks/useGetAllBrands'
import { BadgePercent } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Brands = () => {
  const { brands, isLoading } = useGetAllBrands()

  if (isLoading) return <SkeletonDetails />

  return (
    <div className="min-h-[70vh] md:py-16 flex items-center py-8 mx-auto bg-slate-50 w-full ">
      <div className="grid grid-cols-1  border container bg-white  rounded border-primary/10 min-h-[70vh]  md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-s mx-auto">
        <div className="md:col-span-2 md:row-span-2 bg-white border rounded-3xl p-6 shadow-sm">
          <div className="h-full flex flex-col justify-between  ">
            <h2 className="text-4xl font-bold">Brands</h2>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-200 rounded-full" />
              <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
              <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
        {brands?.map((brands, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 border shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex items-center  justify-between">
                <Badge
                  variant="secondary"
                  className="flex items-center text-xl gap-1"
                >
                  <BadgePercent className="h-4 w-4" />
                  {brands}
                </Badge>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white border w-full rounded-3xl p-6 shadow-sm flex items-center justify-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-900" />
          <div className="w-8 h-8 rounded-full bg-gray-400" />
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default Brands

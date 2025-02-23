import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, CheckCircle, Clock, Truck, X } from 'lucide-react'
export const SkeletonCard = () => (
  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="bg-gradient-to-r from-slate-400/10 to-blue-100 p-4">
      <CardTitle className="flex flex-col gap-2 items-start">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      <div className="flex flex-wrap justify-between items-center mb-3">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      <Separator className="my-3" />
      <div className="grid grid-cols-2 gap-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg"
          >
            <Skeleton className="h-10 w-10 rounded-md" />
            <div className="flex-1 min-w-0">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

export const getStatusDetails = (status: string) => {
  switch (status) {
    case 'Entregado':
      return {
        icon: <CheckCircle className="h-5 w-5" />,
        color: 'text-green-500 bg-green-100',
      }
    case 'En proceso':
      return {
        icon: <Clock className="h-5 w-5" />,
        color: 'text-yellow-500 bg-yellow-100',
      }
    case 'Enviado':
      return {
        icon: <Truck className="h-5 w-5" />,
        color: 'text-blue-500 bg-blue-100',
      }
    case 'Cancelado':
      return {
        icon: <X className="h-5 w-5" />,
        color: 'text-red-500 bg-red-100',
      }
    default:
      return {
        icon: <AlertCircle className="h-5 w-5" />,
        color: 'text-gray-500 bg-gray-100',
      }
  }
}

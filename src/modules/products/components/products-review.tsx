import { SlidersHorizontal, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import ProductNewReview from './product-new-review'

const testimonials = [
  {
    name: 'Sarah M.',
    verified: true,
    rating: 4,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: 'Alex K.',
    verified: true,
    rating: 4,
    text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
  {
    name: 'James L.',
    verified: true,
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: 'James L.',
    verified: true,
    rating: 4,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: 'James L.',
    verified: true,
    rating: 3,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: 'James L.',
    verified: true,
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
]

export function ProductReviews() {
  const { user } = useUser()

  return (
    <div className="space-y-6 w-full mt-16 mx-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">All Reviews</h2>
          <span className="text-muted-foreground">(451)</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-10 w-10">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <Select defaultValue="latest">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Rated</SelectItem>
            </SelectContent>
          </Select>
          {user?.id ? (
            <ProductNewReview />
          ) : (
            <Link href={'/sign-in'}>
              <Button className="w-full bg-primary text-white hover:bg-gray-800">
                <FaGoogle />
                Login to write a review
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-5 w-5',
                      i < 4
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-muted text-muted'
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold">{testimonial.name}</span>
                {testimonial.verified && (
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

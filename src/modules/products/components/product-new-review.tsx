import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useFindOneProduct } from '../hooks/useFindOneProduct'
import { useCreateNewReview } from '../services/mutation'
import { useUser } from '@clerk/nextjs'

const ProductNewReview = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(1) // Estado para la calificación
  const { id } = useParams<{ id: string }>()
  const oneProduct = useFindOneProduct(Number(id)) ?? null
  const [review, setReview] = useState('')
  const { mutate: createNewReview } = useCreateNewReview()
  const { user } = useUser()
  if (oneProduct) {
    const handleSubmit = () =>
      createNewReview(
        {
          comments: review,
          rating,
          productId: oneProduct.id,
          userId: user?.id,
          username: user?.fullName ?? 'Anonymous',
        },
        {
          onSuccess: () => {
            setOpen(false)
            setReview('')
            setRating(1)
          },
        }
      )
    const openDialog = () => setOpen(!open)
    return (
      <>
        <Dialog open={open} onOpenChange={openDialog}>
          <DialogTrigger asChild>
            <Button>Add new Review</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>New Review</DialogTitle>
              <DialogDescription>Description of the review</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="text-center">
                <Label>Rate the product</Label>
                <div className="flex justify-center gap-1 mt-2">
                  <Rating
                    halfFillMode="box"
                    value={rating}
                    className="flex justify-center gap-1 mt-2"
                    onChange={setRating}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src={oneProduct.productVariant[0].url}
                  alt="Product"
                  width={200}
                  height={200}
                  className="rounded-lg object-contain bg-muted p-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="review">Enter your new review</Label>
                <Textarea
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your review here..."
                  className="min-h-[100px]"
                />
              </div>

              <Button onClick={handleSubmit} className="w-full">
                Add Review
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }
}

export default ProductNewReview

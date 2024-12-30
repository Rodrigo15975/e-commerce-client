import { Button } from '@/components/ui/button'
import { SignIn } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="flex items-center min-h-screen justify-center">
        <div className="flex gap-4 flex-col">
          <SignIn />
          <Button className="w-full">
            <Link
              className="flex gap-2 w-full justify-center items-center"
              href={'/'}
            >
              <ArrowLeft />
              Back
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

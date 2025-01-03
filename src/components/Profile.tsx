import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { SignInButton, SignOutButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { LoaderIcon, User } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect } from 'react'
import { useCreateCouponNewUser } from '@/hooks/useCreate-cupon-new-user'

const Profile = () => {
  const { user, isSignedIn, isLoaded } = useUser()
  const { mutate } = useCreateCouponNewUser()
  useEffect(() => {
    if (isSignedIn) {
      console.log('User signed in:', user.id)
      mutate(user.id)
    }
  }, [isSignedIn, user, mutate])

  if (!isLoaded && !isSignedIn) return <LoaderIcon className="animate-spin" />
  return (
    <>
      {isSignedIn ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'ghost'}>
              <User />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle className="text-xl flex gap-2">
                Profile
                <User />
              </SheetTitle>
              <SheetDescription className="flex items-center gap-2 text-primary/50 ">
                <Avatar>
                  <AvatarImage src={user.imageUrl} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {user.fullName}
              </SheetDescription>
            </SheetHeader>
            <div className="grid grid-cols-1 gap-6 py-4"></div>
            <SheetFooter>
              <SheetClose asChild>
                <SignOutButton>
                  <Button variant={'outline'}>Sign out</Button>
                </SignOutButton>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ) : (
        <SignInButton>
          <Button className="border" type="button" variant={'ghost'}>
            <svg
              className="-ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </Button>
        </SignInButton>
      )}
    </>
  )
}

export default Profile

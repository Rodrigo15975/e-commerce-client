import { Button } from '@/components/ui/button'
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
import { RxHamburgerMenu } from 'react-icons/rx'
import LinksNavbar from './LinksNavbar'

const MenuMobile = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" variant={'ghost'}>
            <RxHamburgerMenu className="text-xl" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className="text-xl">Navigation</SheetTitle>
            <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
            <SheetDescription className=" divide-y-4 text-primary/50 ">
              Menu
            </SheetDescription>
          </SheetHeader>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
          <div className="grid grid-cols-1 gap-6 py-4">
            <LinksNavbar />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MenuMobile

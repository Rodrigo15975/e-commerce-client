import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const SearchGlobal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" relative flex-1 cursor-pointer">
            <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="w-full cursor-pointer pl-10 bg-gray-200/50 transition rounded-2xl border-none"
              placeholder="Search for products..."
            />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-screen-xl">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4"></div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SearchGlobal

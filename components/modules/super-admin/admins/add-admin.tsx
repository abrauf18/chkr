import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from 'lucide-react'
import AdminForm from './admin-form'

export default function AddAdmin() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className='flex items-center justify-center rounded-3xl bg-primary gap-2 py-3 px-3'>
          <CirclePlus className='w-4 h-4' color='white' />
          <span className='text-white whitespace-nowrap mobile:text-sm'>Add Admin</span>
        </div>
      </DialogTrigger>
      <DialogContent
        className="bg-white md:max-w-[55%] xl:max-w-[40%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl"
      >
        <DialogHeader>
          <DialogTitle>
            <span>Add new Admin</span>
            <hr className='mt-6' />
          </DialogTitle>
          <DialogDescription>
            <AdminForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

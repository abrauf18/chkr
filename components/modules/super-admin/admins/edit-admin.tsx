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
import EditIcon from '@/assets/icons/edit-icon'

export default function EditAdmin() {
  return (
    <Dialog>
      <DialogTrigger>
  <EditIcon />
      </DialogTrigger>
      <DialogContent
        className="bg-white md:max-w-[55%] xl:max-w-[40%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl"
      >
        <DialogHeader>
          <DialogTitle>
            <span>Edit Admin</span>
            <hr className='mt-6' />
          </DialogTitle>
          <DialogDescription>
            <AdminForm isEdit />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import DeleteIcon from '@/assets/icons/delete-icon'
import CancelCircle from '@/assets/icons/cancel-circle-half-dot'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function DeleteModal() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger>
        {pathname === '/company-admin/jobs' || pathname === '/super-admin/admins' || pathname === '/company-admin/employees' ? (
          <DeleteIcon />
        ) : pathname === '/super-admin/companies' ? (
          <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
            <Trash2 className="w-4 h-4" color="gray" />
            <span className="text-gray-600">Delete Company</span>          
          </div>
        ) : null}
      </DialogTrigger>
      <DialogContent
        className="bg-white md:max-w-1/2 mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl"
      >
        <DialogHeader>
          <DialogDescription>
            <div className='flex flex-col justify-center items-center mt-10 gap-6'>
              <CancelCircle/>
              <h1 className='text-2xl font-medium text-black'>Are you sure?</h1>
              <p className='font-normal text-lg text-center'>Do you really want to delete this? After deleting you can’t undo this</p>
              <div className='flex w-full justify-between'>
                <Button className='text-white rounded-3xl px-5'>
                  Cancel
                </Button>
                <Button className='bg-transparent border border-green-500 text-green-500 rounded-3xl px-5'>
                  Confirm
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

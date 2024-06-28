'use client'
import React, { useState } from 'react'
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
import { DeleteUserAction } from '@/actions/users/user-actions'
import action from '@/app/action'

export default function DeleteModal({ userId }: { userId: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const data = await DeleteUserAction(userId);
    action("DeleteUser")
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger onClick={() => setOpen(true)}>
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
              <CancelCircle />
              <h1 className='text-2xl font-medium text-black'>Are you sure?</h1>
              <p className='font-normal text-lg text-center'>Do you really want to delete this? After deleting you can’t undo this</p>
              <div className='flex w-full justify-between'>
                <Button className='text-white rounded-3xl px-5' onClick={handleCancel}>
                  Cancel
                </Button>
                <Button 
                type='submit'
                className='bg-transparent border border-green-500 text-green-500 hover:text-white hover:border-primary rounded-3xl px-5' onClick={handleDelete}>
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

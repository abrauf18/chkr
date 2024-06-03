'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import CancelCircle from '@/assets/icons/cancel-circle-half-dot'
import { Button } from '@/components/ui/button'
import { Ban, Trash2 } from 'lucide-react'

export default function DisableModal() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger>
        {pathname === '/super-admin/companies' && (
          <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
            <Ban className="w-4 h-4" color="gray" />
            <span className="text-gray-600">Disable Company</span>          
          </div>
        )}
        {pathname === '/super-admin/admins' && (
          <div className='bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center'>
            <Ban color='#ff8a00' className='w-5 h-5'/>
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="bg-white md:max-w-1/2 mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader>
          <DialogDescription>
            <div className='flex flex-col justify-center items-center mt-10 gap-6'>
              <CancelCircle/>
              <h1 className='text-2xl font-medium text-black'>Are you sure?</h1>
              <p className='font-normal text-lg text-center'>Do you really want to disable this?</p>
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

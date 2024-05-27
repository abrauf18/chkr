import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'

export default function stripe() {
  return (
    <Dialog>
      <DialogTrigger>Connect with Stripe</DialogTrigger>
      <DialogContent
        className="bg-white md:max-w-[35%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl"
      >
        <DialogHeader className='flex flex-col gap-3 items-center justify-center'>
          <DialogTitle>Connect with Stripe</DialogTitle>
          <DialogDescription>
            Connect with Stripe today and unlock a world of secure transactions & Manage your payments very easily.
          </DialogDescription>
        </DialogHeader>
        <div className='flex justify-center'>
          <Button className='text-white rounded-3xl bg-[#645AFF] mt-3 w-3/4'>
            <p className='whitespace-nowrap text-xs'>Connect with <span className='font-bold text-sm'>Stripe</span></p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

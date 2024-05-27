import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PencilLine } from 'lucide-react'
import CompanyDetails from './company-details'

export default function CompanyDetailsModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger className='flex w-full items-center p-2 gap-2 hover:bg-gray-100'>
          <PencilLine className='w-4 h-4' color='gray' />
          <span className='text-gray-600'>Edit Profile</span>
        </DialogTrigger>
        <DialogContent
          className="bg-white md:max-w-[65%] xl:max-w-[50%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
          <DialogHeader>
            <DialogTitle>
              <div className='flex '>
                Company Details
              </div>
              <hr className='my-3' />
            </DialogTitle>
            <DialogDescription>
              <CompanyDetails
                companyName="Upyr Ltd"
                companyType="Room Cleaning"
                phoneNumber="+123 456 789"
                country="Singapore"
                location="4140 Parker Rd. Allentown, New Mexico 31134"
                subscriptionPlan="Monthly Plan"
                price={189.00}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

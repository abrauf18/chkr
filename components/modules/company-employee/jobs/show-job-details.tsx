import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import JobDetails from './job-details'

export default function ShowJobDetails() {
  return (
    <Dialog>
      <DialogTrigger>Show Details</DialogTrigger>
      <DialogContent
        className="bg-white md:max-w-[65%] xl:max-w-[50%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl"
      >
        <DialogHeader>
          <DialogTitle>Job Details
            <hr className='my-6' />
          </DialogTitle>
          <DialogDescription>
            <JobDetails />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

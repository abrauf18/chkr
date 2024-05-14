import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FeedbackForm from './feedback-form'

export default function Feedback() {
  return (

    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className='bg-white md:max-w-[58%] max-h-[80vh] overflow-y-auto overflow-x-hidden'>
        <DialogHeader>
          <DialogTitle>Submit your feedback</DialogTitle>
          <hr className='my-10' />
          <DialogDescription>
            <FeedbackForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}



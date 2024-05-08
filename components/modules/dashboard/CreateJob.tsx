import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, CirclePlus, MapPinned, Phone, CalendarClock, CircleDollarSign, MoveRight, ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import CreateJobFirstStep from './CreateJobFirstStep';
import CreateJobSecondStep from './CreateJobSecondStep';
import AssignJob from './AssignJob';
import JobPayment from './JobPayment';
import JobDetails from './JobDetails';


const service = ["A", "B", " C", "D"]; // Example list of company types


export default function CreateJob() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className='flex items-center rounded-3xl text-white bg-primary p-2 whitespace-nowrap'><CirclePlus className='mr-2 h-5' />Create new job</div>
        </DialogTrigger>
        <DialogContent className='bg-white md:max-w-[65%] xl:max-w-[50%] max-h-[80vh] overflow-y-auto overflow-x-hidden'>
          <DialogHeader>
            <DialogTitle>
              <span>Create new job</span>
              <hr className='my-6' />
            </DialogTitle>
            <DialogDescription className='text-black'>
              {/* <CreateJobFirstStep /> */}
              {/* <CreateJobSecondStep /> */}
              <AssignJob />
              {/* <JobPayment /> */}
              {/* <JobDetails /> */}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" className='rounded-3xl text-white'>Next<MoveRight className='ml-2' /></Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

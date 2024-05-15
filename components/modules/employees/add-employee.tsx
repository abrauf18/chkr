import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EmployeeForm from './employee-form'
import { FormProvider, useForm } from 'react-hook-form'
import { EmployeeSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { CirclePlus } from 'lucide-react';


export default function AddEmployee() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(EmployeeSchema),
  // });

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);
  // });

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center rounded-3xl text-white bg-primary p-2 mobile:py-3 whitespace-nowrap">
          <CirclePlus className="md:mr-2 h-5 mobile:h-4" />
          <span className='mobile:text-xs'>Add Employee</span>
        </div>
      </DialogTrigger>
      <DialogContent className='bg-white'>
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          <hr className='my-6' />
          <DialogDescription>
            <EmployeeForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

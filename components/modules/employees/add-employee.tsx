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
      <DialogTrigger>Open</DialogTrigger>
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

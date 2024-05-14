"use client"
import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchema } from '@/lib/types';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';
import { ErrorMessage } from '@hookform/error-message';

export default function EmployeeForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EmployeeSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}
    >
      <div className='flex flex-col text-black mt-6'>
        <div className="mb-4 w-full relative">
          <Label
            htmlFor="employeeName"
            className="md:text-medium text-sm font-semibold"
          >
            Employee Name
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
              <User color="#636363" className='h-4 w-4' />
            </span>
            <Input
              className="pl-10 bg-[#F9F8F8]"
              id="employeeName"
              type="text"
              placeholder="Enter Full Name"
              {...register("employeeName")}
            />
          </div>
          <p className="text-sm text-red-500 mt-1">
            {" "}
            <ErrorMessage errors={errors} name="employeeName" />
          </p>
        </div>
        <div className="mb-4 w-full relative">
          <Label htmlFor="email" className="md:text-medium text-sm font-semibold">
            Email
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
              <Mail color="#636363" className='h-4 w-4' />
            </span>
            <Input
              className="pl-10 bg-[#F9F8F8]"
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>
          <p className="text-sm text-red-500 mt-1">
            {" "}
            <ErrorMessage errors={errors} name="email" />
          </p>
        </div>
        <div className="mb-4 w-full relative">
          <Label htmlFor="phoneNumber" className="md:text-medium text-sm font-semibold">
            Phone Number
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
              <Phone color="#636363" className='h-4 w-4' />
            </span>
            <Input
              className="pl-10 bg-[#F9F8F8]"
              id="phoneNumber"
              type="text"
              placeholder="Enter Phone Number"
              {...register("phoneNumber")}
            />
          </div>
          <p className="text-sm text-red-500 mt-1">
            {" "}
            <ErrorMessage errors={errors} name="phoneNumber" />
          </p>
        </div>
        <div className='flex justify-end mt-6'>
          <Button
            type='submit'
            className='text-white rounded-3xl'>
            <span>Send Invite</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </form>
  )
}

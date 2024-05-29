"use client"
import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminSchema } from '@/lib/types';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';
import { ErrorMessage } from '@hookform/error-message';

export default function AdminForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AdminSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}
    >
      <div className='flex flex-col text-black mt-6'>
        <div className='flex mobile:flex-col flex-row items-center md:gap-4'>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="adminFirstName"
              className="flex md:text-medium text-sm font-semibold"
            >
              First Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                <User color="#636363" className='h-4 w-4' />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="adminFirstName"
                type="text"
                placeholder="Admin first name"
                {...register("adminFirstName")}
              />
            </div>
            <p className="mobile:text-xs text-sm text-red-500 mt-1 text-left">
              {" "}
              <ErrorMessage errors={errors} name="adminFirstName" />
            </p>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="adminLastName"
              className="flex md:text-medium text-sm font-semibold"
            >
              Last Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                <User color="#636363" className='h-4 w-4' />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="adminLastName"
                type="text"
                placeholder="Admin last name"
                {...register("adminLastName")}
              />
            </div>
            <p className="mobile:text-xs text-sm text-red-500 mt-1 text-left">
              {" "}
              <ErrorMessage errors={errors} name="adminLastName" />
            </p>
          </div>
        </div>
        <div className="mb-4 w-full relative">
          <Label htmlFor="email" className="flex md:text-medium text-sm font-semibold">
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
              placeholder="Enter email address"
              {...register("email")}
            />
          </div>
          <p className="mobile:text-xs text-sm text-red-500 mt-1 text-left">
            {" "}
            <ErrorMessage errors={errors} name="email" />
          </p>
        </div>
        <div className="mb-4 w-full relative">
          <Label htmlFor="phoneNumber" className="flex md:text-medium text-sm font-semibold">
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
          <p className="mobile:text-xs text-sm text-red-500 mt-1 text-left">
            {" "}
            <ErrorMessage errors={errors} name="phoneNumber" />
          </p>
        </div>
        <div className='flex justify-end mt-6'>
          <Button
            type='submit'
            className='text-white rounded-3xl'>
            <span>Send Invite</span>
            <ArrowRight className='w-4 h-4 ml-2' />
          </Button>
        </div>
      </div>
    </form>
  )
}

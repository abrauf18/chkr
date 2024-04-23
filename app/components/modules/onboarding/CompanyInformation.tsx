import React from 'react'
import Image from 'next/image'
import subscriptionIcon from "@/app/assets/icons/subscription-plan.svg"
import companyIcon from "@/app/assets/icons/company.svg"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Button } from "@/app/components/ui/button"
import { UserRound } from 'lucide-react';
import user from '@/app/assets/icons/user.svg'
import building from '@/app/assets/icons/building.svg'
import phone from '@/app/assets/icons/phone.svg'
import location from '@/app/assets/icons/location.svg'


const CompanyInformation = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='xl:font-semibold lg:text-2xl md:font-semibold md:text-3xl text-center'>Welcome Aboard! Let's Complete Your Profile.</h1>
      <p className='lg:text-lg md:text-lg md:font-medium text-center text-gray-400 mt-6'>Please Provide required Information about your company</p>
      <div className='flex mt-10 gap-6 text-lg'>
        <div className='flex items-center '>
          <Image src={companyIcon} alt="Company Icon"
            className='w-[4rem] h-[4rem]' />
          <span >Company Information</span>
        </div>
        <div className='flex items-center '>
          <Image src={subscriptionIcon} alt='subscription icon'
            className='w-[4rem] h-[4rem]' />
          <span className='text-gray-400'>Subscription Plan</span>
        </div>
      </div>
      <div className='flex flex-col w-[60%] justify-center items-center'>
        <form className="bg-white w-full shadow-md rounded-3xl px-8 pt-6 pb-8 my-10">
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="companyName"
              className="md:text-lg text-sm font-semibold"
            >
              Company Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Image src={user} alt='user' />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="companyName"
                type="text"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="companyType"
              className="md:text-lg text-sm font-semibold"
            >
              Company Type
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Image src={building} alt='building' />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="companyType"
                type="text"
                placeholder="Company Type"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="phone"
              className="md:text-lg text-sm font-semibold"
            >
              Phone Number
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Image src={phone} alt='phone' />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="phone"
                type="text"
                placeholder="+123 456 789"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="location"
              className="md:text-lg text-sm font-semibold"
            >
              Location
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Image src={location} alt='location' />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="location"
                type="text"
                placeholder="abc Road, xyz Town"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="location"
              className="md:text-lg text-sm font-semibold"
            >
              Location
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Image src={location} alt='country' />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="country"
                type="text"
                placeholder="Country Name"
              />
            </div>
          </div>
        </form>
        <div className="flex w-full items-center justify-end mt-6 gap-6">
          <button
            className="bg-gray-300 text-white font-bold py-2 px-4 rounded-3xl"
            type="submit"
          >
            Cancel
          </button>
          <button
            className="bg-primary  text-white font-bold py-2 px-4 rounded-3xl"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default CompanyInformation

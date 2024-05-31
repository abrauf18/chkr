import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Calendar from '@/assets/icons/calendar'
import TotalJobs from '@/assets/icons/TotalJobs'
import OngoingJobs from '@/assets/icons/OngoingJobs'
import PendingJobs from '@/assets/icons/PendingJobs'
import Employees from '@/assets/icons/Employees'
import AssignedJobCard from './assigned-job-card'
import { ChevronDown, Bell, CircleArrowRight } from 'lucide-react';
import DashboardHeader from '@/components/shared/dashboard-header'
import Header from '@/components/shared/header'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader
        title='Welcome, Ayesha Khan!' />
      <Header title='Dashboard' />

      {/* Job Cards */}
      <div className='flex md:flex-row flex-col w-full gap-6 mt-4'>
        <div className='flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6'>
          <TotalJobs className='mr-4' />
          <div className='flex flex-col w-3/4'>
            <h1 className='font-bold text-3xl'>40</h1>
            <p className='text-gray-500 text-lg md:leading-5 md:mt-2'>Total Jobs</p>
          </div>
        </div>
        <div className='flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6'>
          <OngoingJobs className='mr-4' />
          <div className='flex flex-col w-3/4'>
            <h1 className='font-bold text-3xl'>25</h1>
            <p className='text-gray-500 text-lg md:leading-5 md:mt-2'>Ongoing Jobs</p>
          </div>
        </div>
        <div className='flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6'>
          <PendingJobs className='h-14 mr-4' />
          <div className='flex flex-col w-3/4'>
            <h1 className='font-bold text-3xl'>15</h1>
            <p className='text-gray-500 text-lg md:leading-5 md:mt-2'>Pending Jobs</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-white mt-6 rounded-3xl gap-4 py-6'>
        <div className='flex justify-start px-6'>
          <Employees className='mr-4' />
          <div className='flex flex-col'>
            <h1 className='font-bold text-3xl'>30</h1>
            <p className='text-gray-500 text-lg'>Total No. of employees</p>
          </div>
        </div>
        <hr className="h-0.5 bg-gray-200 mx-8 px-4" />
        <div className='flex md:flex-row flex-col mx-8 justify-between'>
          <div className='flex md:gap-2 gap-3 items-center'>
            <div className="w-3 h-3 bg-[#8AE569] rounded-full"></div>
            <h1 className='font-bold text-2xl'>18</h1>
            <p className='text-gray-500 text-base'>Assigned</p>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <h1 className='font-bold text-2xl'>12</h1>
            <p className='text-gray-500 text-base'>Un-assigned</p>
          </div>
          <div className='flex items-center mt-4 md:mt-0'>
            <h1 className='text-sm whitespace-nowrap'>See Employees</h1>
            <Link href='/company-admin/employees'>
            <div>
              <CircleArrowRight className='ml-2' />
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center my-6'>
          <span className='text-xl font-semibold'>Recent Assigned Jobs</span>
          <Link href='/company-admin/jobs'><Button className='rounded-3xl text-white'>View All</Button></Link>
        </div>
        <AssignedJobCard userName="Guy Hawkins"
          location="4140 Parker Rd. Allentown, New Mexico 31134"
          status="Checked-in"
          phoneNumber="(603) 555-0123"
          dateTime="15 March 2023 7:00 pm"
          service="Room Cleaning"
          payment="230.00"
          employeeName="Ralph Edwards"
          imageurl='/images/user.jpeg' />
        <AssignedJobCard userName="Albert Flores"
          location="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
          status="Checked-out"
          phoneNumber="(603) 555-0123"
          dateTime="24 May 2024 8:00 pm"
          service="Room Cleaning"
          payment="260.00"
          employeeName="Roy Edwards"
          imageurl='/images/user.jpeg' />
      </div>
    </div>
  )
}

export default Dashboard
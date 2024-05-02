import React from 'react'
import Image from 'next/image'
import BellIcon from '@/assets/icons/bell-icon'
import { Button } from '@/components/ui/button'
import Calendar from '@/assets/icons/calendar'
import TotalJobs from '@/assets/icons/TotalJobs'
import OngoingJobs from '@/assets/icons/OngoingJobs'
import PendingJobs from '@/assets/icons/PendingJobs'
import Employees from '@/assets/icons/Employees'
import CircleArrowRight from '@/assets/icons/circle-arrow-right'
import AssignedJobCard from './AssignedJobCard'
import { ChevronDown, Import } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:ml-24 md:w-3/4 w-full border border-black my-10 ">
      <div className='flex  items-center'>
        <h1 className='text-3xl font-bold'>Here’s a quick overview to all your insights</h1>
        <div className='flex items-center'>
          {/* <Image src={bell} alt='bell'
            className='h-10' /> */}
          <BellIcon />
          <div className='flex items-center bg-white rounded-3xl w-full pr-20 py-4'>
            <div>
              <BellIcon />
            </div>
            <div className='flex flex-col'>
              <h1>Ayesha Khan</h1>
              <p>Employee</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex justify-between items-center md:px-0 px-4'>
        <h1 className='text-xl font-bold'>Dashboard!</h1>
        <div className="flex justify-center items-center gap-2">
          <Button className="md:w-[90%] w-1/2 bg-white rounded-3xl p-6">
            Select Date
            {/* <Image
              src={calender}
              alt="calenderLogo"
              className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]"
            /> */}
            <Calendar />
          </Button>
          <Button className="md:w-[90%] w-1/2 bg-white rounded-3xl p-6">
            Filter
            <ChevronDown
              className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]"
            />
          </Button>
        </div>
      </div>
      {/* Job Cards */}
      <div className='flex md:flex-row flex-col w-full gap-6 mt-10 px-4 md:px-0'>
        <div className='flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-4'>
          <TotalJobs />
          {/* <Image src={totalJobs} alt='total-Jobs'
            className='h-14 w-1/4 mr-4' /> */}
          <div className='flex flex-col w-3/4'>
            <h1 className='font-bold text-3xl'>40</h1>
            <p className='text-gray-500 text-lg'>Total Jobs</p>
          </div>
        </div>
        <div className='flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-4'>
          {/* <Image src={ongoingJobs} alt='Ongoing-Jobs'
            className='h-14 w-1/4 mr-4' /> */}
          <OngoingJobs />
          <div className='flex flex-col w-3/4'>
            <h1 className='font-bold text-3xl'>25</h1>
            <p className='text-gray-500 text-lg'>Ongoing Jobs</p>
          </div>
        </div>
        <div className='flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-4'>
          {/* <Image src={pendingJobs} alt='pending-Jobs'
            className='h-14 w-1/4 mr-4' /> */}
          <PendingJobs />
          <div className='flex flex-col w-3/4'>
            <h1 className='font-bold text-3xl'>15</h1>
            <p className='text-gray-500 text-lg'>Pending Jobs</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-white mt-10 rounded-3xl gap-4 py-6 px-3 mx-4 md:mx-0'>
        <div className='flex justify-start gap-4 px-4'>
          <div>
            {/* <Image src={employees} alt='employees'
              className='h-14 mr-4' /> */}
            <Employees />
          </div>
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
            <div>
              <CircleArrowRight />
              {/* <Image src={righticon} alt='right-icon' className='h-6 ml-2' /> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center p-4'>
          <span className='text-xl font-medium'>Recent Assigned Jobs</span>
          <Button className='rounded-3xl text-white'>View All</Button>
        </div>
        <AssignedJobCard />
      </div>
    </div>
  )
}

export default Dashboard
import React from 'react';
import Image from 'next/image';
import { Bell, ChevronDown } from 'lucide-react';

// Interface to define the type of props accepted by the component
interface DashboardHeaderProps {
  title: string; // Type is string to ensure a valid title
}

export default function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <>
      <div className='flex w-full justify-between items-center pt-2'>
        <div className='md:w-[60%]'><h1 className='text-xl xl:text-3xl font-bold'>{title}</h1></div>
        <div className='flex mobile:hidden items-center gap-3 md:w-[40%] justify-end'>
          <div className='flex justify-center items-center bg-white rounded-full h-14 w-14'>
            <Bell />
          </div>
          <div className='flex items-center bg-white rounded-3xl p-2'>
            <div>
              <Image src="/images/user.jpeg" height={8} width={8} alt='user' className='w-8 h-8 rounded-full ' />
            </div>
            <div className='flex flex-col mx-3'>
              <h1 className='text-sm lg:text-base whitespace-nowrap'>Ayesha Khan</h1>
              <p className='text-sm text-gray-500'>Employee</p>
            </div>
            <ChevronDown className='m-2' />
          </div>
        </div>
      </div>
      <hr className='my-3' />
    </>
  );
}

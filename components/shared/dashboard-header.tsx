import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import UserOptions from './user-options';

// Interface to define the type of props accepted by the component
interface DashboardHeaderProps {
  title: string; // Type is string to ensure a valid title
}

export default function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <>
      <div className='flex w-full justify-between items-center mt-3'>
        <div className='md:w-[60%]'><h1 className='text-xl xl:text-3xl font-bold'>{title}</h1></div>
        <div className='flex mobile:hidden items-center gap-3 md:w-[40%] justify-end'>
          <div className='flex justify-center items-center bg-white rounded-full h-14 w-14'>
            <Bell />
          </div>
          <UserOptions/>
        </div>
      </div>
      <hr className='mt-2' />
    </>
  );
}

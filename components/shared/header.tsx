import React from 'react';
import { Calendar, CalendarDays, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <div className='flex mobile:flex-col justify-between items-center'>
        <h1 className='text-xl font-base whitespace-nowrap w-full'>{title}</h1>
        <div className="flex items-center gap-2 mobile:w-full mobile:mt-2">
          <Button className="md:w-[90%] bg-white hover:bg-white rounded-3xl p-6 text-sm lg:text-base">
            <CalendarDays className='mr-2' color='#FF2600' />
            <span className='mobile:hidden'>March 11 - March 17, 2024</span>
            <span className='md:hidden'>Select Date</span>
            <ChevronDown className='ml-2' />
          </Button>
          <Button className="md:w-[90%] bg-white rounded-3xl p-6 text-sm lg:text-base">
            Filter
            <ChevronDown className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]" />
          </Button>
        </div>
      </div>
    </>
  );
}
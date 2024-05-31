import React from 'react';
import { Calendar, CalendarDays, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <div className='flex mobile:flex-col justify-between items-center mt-3'>
        <h1 className='text-xl font-bold w-full'>{title}</h1>
        <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-end mobile:justify-start w-full ">
          <Button className="bg-white hover:bg-white rounded-3xl py-6 text-sm lg:text-base flex gap-2">
            <CalendarDays className="ml-2 w-4 h-4" color="#FF2600" />
            <span>Select Date</span>
            <ChevronDown className='w-4 h-4' />
          </Button>
          <Button className="bg-white rounded-3xl py-6 text-sm lg:text-base flex gap-2 items-center justify-center">
            Filter
            <ChevronDown className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-base'>{title}</h1>
        <div className="flex justify-center items-center gap-2">
          <Button className="md:w-[90%] w-1/2 bg-white rounded-3xl p-6 text-sm lg:text-base">
            Select Date
            <Calendar className='ml-2' />
          </Button>
          <Button className="md:w-[90%] w-1/2 bg-white rounded-3xl p-6 text-sm lg:text-base">
            Filter
            <ChevronDown
              className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
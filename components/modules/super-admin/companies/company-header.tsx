import Filter from '@/components/shared/filter';
import { Button } from '@/components/ui/button'
import { CalendarDays, ChevronDown } from 'lucide-react'
import React from 'react'

interface HeaderProps {
  title: string;
}

export default function CompanyHeader({ title }: HeaderProps) {
  return (
    <div className='flex flex-row mobile:flex-col md:justify-between items-center mt-2'>
      <h1 className='flex w-full text-xl font-base'>{title}</h1>
      <div className="flex md:justify-end gap-1 items-center w-full mobile:mt-2">
        <Button className=" bg-white hover:bg-white rounded-3xl py-6 text-sm lg:text-base">
          <CalendarDays className='mr-2 w-5 h-5' color='#FF2600' />
          <span>Joined Date</span>
          <ChevronDown className='ml-2' />
        </Button>
        <Filter />
      </div>
    </div>
  )
}

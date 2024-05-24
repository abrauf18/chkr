import Filter from '@/components/shared/filter';
import { Button } from '@/components/ui/button'
import { CalendarDays, ChevronDown } from 'lucide-react'
import React from 'react'

interface HeaderProps {
  title: string;
}

export default function CompanyHeader({ title }: HeaderProps) {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl font-base'>{title}</h1>
      <div className="flex justify-center items-center gap-2">
        <Button className="md:w-[90%] w-1/2 bg-white hover:bg-white rounded-3xl p-6 text-sm lg:text-base mobile:hidden">
          <CalendarDays className='mr-2 w-5 h-5' color='#FF2600' />
          Joined Date
          <ChevronDown className='ml-2' />
        </Button>
        <Filter />
        <Button>
          Add new Company
        </Button>
      </div>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { CalendarDays, ChevronDown } from 'lucide-react'
import React from 'react'
import AddAdmin from './add-admin'

export default function AdminHeader() {
  return (
    <div className="flex lg:flex-row justify-between mobile:flex-col md:flex-col items-center my-2">
      <div className="flex w-full">
        <h1 className="text-xl font-bold">Admins</h1>
      </div>
      <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-start lg:w-[80%] mobile:w-full md:w-full ">
        <Button className="md:w-3/4 bg-white hover:bg-white rounded-3xl md:p-6 text-sm lg:text-base ">
          <CalendarDays className="mr-2 mobile:hidden" color="#FF2600" />
          <span className="mobile:hidden"> March 11 - March 17, 2024</span>
          <span className="md:hidden">Select Date</span>
          <ChevronDown className="ml-2 mobile:hidden" />
          <CalendarDays className="ml-2 md:hidden w-4 h-4" color="black" />
        </Button>
        <Button className="md:w-1/2 bg-white rounded-3xl md:p-6 text-sm lg:text-base">
          Filter
          <ChevronDown className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]" />
        </Button>
        <AddAdmin />
      </div>
    </div>
  )
}

import React from 'react'
import EarningsOverview from './earnings-overview'
import DashboardHeader from '@/components/shared/dashboard-header'
import { TransactionHistory } from './transaction-history'
import { Button } from '@/components/ui/button'
import { CalendarDays, ChevronDown } from 'lucide-react'
import Header from '@/components/shared/header'

export default function Payments() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardHeader
        title='Payments' />
      <Header title='My Earnings Overview' />
      <EarningsOverview />
      <div className='flex justify-between items-center'>
        <h1 className='text-base md:text-xl font-base'>Transaction History</h1>
        <div className="flex justify-center items-center gap-2">
          <Button className="md:w-[90%] w-1/2 bg-white hover:bg-white rounded-3xl p-6 text-sm lg:text-base mobile:hidden">
            <CalendarDays className='mr-2' color='#FF2600' />
            March 11 - March 17, 2024
            <ChevronDown className='ml-2' />
          </Button>
          <Button className="w-full md:w-[90%] bg-white rounded-3xl p-6 text-sm lg:text-base">
            Filter
            <ChevronDown className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]" />
          </Button>
        </div>
      </div>
      <TransactionHistory />
    </div>
  )
}

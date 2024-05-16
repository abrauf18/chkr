import React from 'react'
import { Receipt, MoveUpRight, CircleArrowRight, CircleChevronRight } from 'lucide-react';

export default function OverviewCard() {
  return (
    <div className='flex flex-col md:w-[32%] bg-white rounded-3xl py-8 px-6 gap-4'>
      <div className='flex items-center gap-9'>
        <div className='bg-blue-300 w-16 h-16 rounded-full flex items-center justify-center'><Receipt /></div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl text-gray-700'>$ 120.8K</h1>
          <p className='text-gray-400 text-xl'>Total Earnings</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <MoveUpRight className='h-4 w-4' />
          <span>1.20%</span>
          <span className='text-gray-400 ml-2'>since last month</span>
        </div>
        <div className='flex items-center gap-1'>
          <span>See Jobs</span>
          <button><CircleChevronRight className='h-4 w-4' /></button>
        </div>
      </div>
    </div>
  )
}

import { ChevronDown, CircleAlert } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
export default function Summary() {
  return (
    <div className='bg-white rounded-xl p-6'>
      <div className='flex md:flex-row flex-col justify-between'>
        <div className='flex items-center gap-2'>
          <span>Total Earnings</span>
          <CircleAlert color='gray' />
        </div>
        <div className='flex md:flex-row flex-col gap-4 xl:gap-6 md:items-center '>
          <div className='flex gap-2 mobile:mt-2 mt-0'>
            <div className='flex gap-2 items-baseline'>
              <div className='bg-primary w-12 h-1 rounded-xl'></div>
              <span className='text-xs md:text-sm text-gray-500'>Earnings</span>
            </div>
            <div className='flex gap-2 items-baseline'>
              <div className='bg-gray-700 w-12 h-1 rounded-xl'></div>
              <span className='text-xs md:text-sm text-gray-500'>No. of Completed Jobs</span>
            </div>
          </div>
          <div className='flex items-center border border-black rounded-3xl p-3 gap-1 mobile:w-[35%]'>
            <span className='text-sm whitespace-nowrap'>This Year</span>
            <ChevronDown className='h-4 w-4' />
          </div>
        </div>
      </div>
      <Image
        src='/images/summary-graph.svg'
        alt='summary-graph'
        width={10}
        height={10} />
    </div>
  )
}

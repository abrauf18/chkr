import React from 'react'
import Image from 'next/image'
import Location from '@/assets/icons/location-icon'
import EditIcon from '@/assets/icons/edit-icon'
import DeleteIcon from '@/assets/icons/delete-icon'
import user from "@/public/images/user.svg"

const AssignedJobCard = () => {
  return (
    <div className='mt-4 bg-white px-8 rounded-3xl py-10 px-4'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-xl mb-3'>Guy Hawkins</h1>
          <div className='flex'>
            <Location />
            <span className='font-medium ml-2'>4140 Parker Rd. Allentown, New Mexico 31134</span>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='flex items-center bg-gray-100 rounded-3xl px-3'>
            <div className='bg-primary rounded-full h-2 w-2'></div>
            <span>Checked-in</span>
          </div>
          <DeleteIcon />
          <EditIcon />
        </div>
      </div>
      <div className='flex mt-6 justify-between'>
        <div className="flex gap-4 ">
          <div className='flex flex-col'>
            <span className='font-bold'>Phone number:</span>
            <span className='bg-gray-100 rounded-2xl py-3 px-6 mt-2'>(603) 555-0123</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>Date & Time:</span>
            <span className='bg-gray-100 rounded-2xl py-3 px-6 mt-2'>15 March 2023 7:00 pm</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>Service:</span>
            <span className='bg-gray-100 rounded-2xl py-3 px-6 mt-2'>Room Cleaning</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>To Pay:</span>
            <span className='bg-gray-100 rounded-2xl py-3 px-6 mt-2'>$ 230.00 USD</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Assigned To:</span>
          <div className='flex mt-2'>
            <Image src={user} alt='user-image' height={6} width={6} className='rounded-full border border-black' />
            <span className='mt-2 whitespace-nowrap ml-2 font-semibold'>Ayesha Rashid</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignedJobCard
import React from 'react'
import Image from 'next/image'
import Location from '@/assets/icons/location-icon'
import EditIcon from '@/assets/icons/edit-icon'
import DeleteIcon from '@/assets/icons/delete-icon'

const AssignedJobCard = () => {
  return (
    <div className='mt-4 bg-white px-8 rounded-3xl py-10 px-4'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-xl mb-3'>Guy Hawkins</h1>
          <div className='flex'>
            <Location />
            {/* <div>
              <Image src={locationIcon} alt="Location Icon"
                className='h-6' />
            </div> */}
            <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
          </div>
        </div>
        <div className='flex'>
          <div className='flex bg-gray-100 rounded-3xl'>
            <div className='bg-primary rounded-full h-2 w-2'></div>
            <div><span>Checked-in</span></div>
          </div>
          {/* <div>
            <Image src={editIcon} alt="Location Icon"
              className='h-10' />
          </div> */}
          <DeleteIcon />
          {/* <div>
            <Image src={deleteIcon} alt="Location Icon"
              className='h-10' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AssignedJobCard
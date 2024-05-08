import React from 'react'
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from "@/components/ui/input";
import { DollarSign } from 'lucide-react';
const users: { username: string; status: string }[] = [
  { username: 'John oe', status: 'Available' },
  { username: 'Jane Smith', status: 'Assigned' },
  { username: 'Michael Lee', status: 'Available' },
  { username: 'Ayesha Lee', status: 'Assigned' },
  { username: 'Doe', status: 'Available' },
  { username: ' Smith', status: 'Assigned' },
  { username: ' Lee', status: 'Available' },
  { username: 'Ayesha ', status: 'Assigned' },
  // Add more users as needed
];
export default function JobPayment() {
  return (
    <div className='overflow-y-auto max-h-[400px] mt-10 border-2 rounded-xl'>
      {users.map((user) => (
        <div key={user.username} className=' px-4'>
          <div className='flex mobile:gap-4 justify-between py-2 px-4'>
            <div className='flex items-center'>  <Checkbox /></div>
            <div className='flex mobile:justify-start md:justify-between flex-row mobile:flex-col w-[90%]'>
              <div className='flex items-center py-4 gap-3'>
                <div className='rounded-full w-12 h-12 mr-2'>
                  <Image src="/images/avatar.svg" alt='user' width={3} height={3} />
                </div>
                <span className='font-semibold whitespace-nowrap'>{user.username}</span>
              </div>
              <div className="relative flex justify-center items-center">
                <span className="absolute left-5 top-[55%] transform -translate-y-1/2 h-5 w-5 text-gray-400">
                  <DollarSign color='#232324' className='h-4 w-4' />
                </span>
                <Input
                  className="pl-10 bg-[#F9F8F8]"
                  id="amount"
                  type="text"
                  placeholder="Enter amount"
                // {...register("amount")}
                />
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}
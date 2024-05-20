"use client"
import { Button } from '@/components/ui/button';
import { Check, MapPinned } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import SelectStatus from './select-status';
import MarkAsComplete from './mark-as-complete';


interface CardProps {
  name: string;
  address: string;
  zipCode: string;
  dateTime: string;
  service: string;
  paymentStatus: string;
  amount: string;
}

const OngoingJobCard: React.FC<CardProps> = ({
  name,
  address,
  zipCode,
  dateTime,
  service,
  paymentStatus,
  amount,
}) => {

  return (
    <div className="w-full mx-auto bg-white shadow-xl rounded-xl overflow-hidden p-6">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-3">{name}</h1>
          <div className="flex items-center gap-2">
            <MapPinned className="h-5 w-5" />
            <span className="font-semibold md:text-lg text-gray-700">
              {address}
              <Link href='company-employee/dashboard'
                className='text-primary text-sm md:text-base font-semibold ml-2'>
                View Direction
              </Link>
            </span>

          </div>
        </div>
        <div className="flex gap-2 h-3/4 mt-4 xl:mt-0">
          <MarkAsComplete />
          <SelectStatus />
        </div>
      </div>
      <p className="mt-4 text-base text-gray-600">
        Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. Laborem tempor Lorem incididunt. Sed fermentum eget velit sit amet sagittis. Sed egestas egestas arcu, quis fermentum justo laoreet non. Maecenas sapien quam, mollis vitae blandit a, blandit vel lectus.
      </p>
      <div className="flex mt-6 justify-between lg:flex-row flex-col lg:gap-0 gap-5">
        <div className="flex flex-wrap xl:gap-10 gap-4">
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold md:text-lg">Zip Code:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {zipCode}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Date & Time:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {dateTime}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Service:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base ">
              {service}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Payment:</span>
            <div className="bg-gray-100 flex items-center rounded-2xl py-3 px-6 mt-2 md:text-base ">
              <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
              {paymentStatus}
            </div>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap mr-4 mt-1">
          <span className="font-bold text-xl md:text-3xl">${amount} USD</span>
        </div>
      </div>
    </div>
  );
};

export default OngoingJobCard;
"use client"
import React, { useState } from 'react';
import { CircleChevronRight, MailPlus, MoveDownLeft, MoveDownRight, MoveUpLeft, MoveUpRight, Receipt, StickyNote } from 'lucide-react';
import JobRequestCard from './job-request-card';
import Summary from './summary';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const jobRequests = [
  // Populate with your job requests data
  {
    name: "Guy Hawkins",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    name: "Ayesha",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    name: "Joe",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    name: "Zyaima",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    name: "Usama",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Delivery",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    name: "Ali",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  // Add more job requests here
];

const ITEMS_PER_PAGE = 2;

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = jobRequests.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jobRequests.length / ITEMS_PER_PAGE);

  return (
    <div className='flex flex-col mx-auto gap-4'>
      <h1 className='text-xl font-semibold mt-2'>Overview</h1>
      <div className='flex flex-col lg:flex-row gap-4 w-full mx-auto'>
        {/* Overview cards here */}
        <div className='flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6'>
          <div className='flex items-center xl:gap-9 gap-2 w-full'>
            <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center'>
              <Receipt color='#3498DB' />
            </div>
            <div className='flex flex-col w-[40%]'>
              <h1 className='font-bold text-3xl lg:text-2xl text-gray-700 whitespace-nowrap'>$ 120.8K</h1>
              <p className='text-gray-400 text-xl mobile:whitespace-nowrap'>Total Earnings</p>
            </div>
          </div>
          <div className='flex'>
            <div className='flex items-center gap-1 text-green-500'>
              <MoveUpRight className='h-4 w-4' />
              <span className='text-xs xl:text-sm font-bold'>1.20%</span>
              <span className='text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base'>since last month</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6'>
          <div className='flex items-center xl:gap-9 gap-2 w-full'>
            <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center '>
              <StickyNote color='#BB6BD9' />
            </div>
            <div className='flex flex-col w-[40%]'>
              <h1 className='font-bold text-2xl xl:text-3xl text-gray-700'>18</h1>
              <p className='text-gray-400 text-xl xl:whitespace-nowrap mobile:whitespace-nowrap'>Completed Jobs</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex xl:flex-row flex-col items-center gap-1 text-red-500'>
              <div className='flex items-center gap-1 text-left w-full'>
                <MoveDownRight className='h-4 w-4' />
                <span className='text-xs xl:text-sm font-bold'>2.84%</span></div>
              <span className='text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base'>since last month</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-sm whitespace-nowrap'>See Jobs</span>
              <button><CircleChevronRight className='h-4 w-4' /></button>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6'>
          <div className='flex items-center xl:gap-9 gap-2'>
            <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center'>
              <MailPlus color='#F2994A' />
            </div>
            <div className='flex flex-col w-[40%]'>
              <h1 className='font-bold text-3xl text-gray-700'>02</h1>
              <p className='text-gray-400 text-xl xl:whitespace-nowrap mobile:whitespace-nowrap'>New Requests</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex xl:flex-row flex-col items-center gap-1 text-green-500'>
              <div className='flex items-center w-full gap-1'>
                <MoveUpRight className='h-4 w-4' />
                <span className='text-xs xl:text-sm font-bold'>3.64%</span>
              </div>
              <span className='text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base'>since last month</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='whitespace-nowrap lg:text-sm text-base'>See Requests</span>
              <button><CircleChevronRight className='h-4 w-4' /></button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-semibold my-4'>Jobs & Earning Summary</h1>
        <Summary />
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <h1 className='text-xl font-semibold'>Job Requests</h1>
        {currentItems.map((jobRequest, index) => (
          <JobRequestCard
            key={index}
            name={jobRequest.name}
            address={jobRequest.address}
            zipCode={jobRequest.zipCode}
            dateTime={jobRequest.dateTime}
            service={jobRequest.service}
            paymentStatus={jobRequest.paymentStatus}
            amount={jobRequest.amount}
          />
        ))}
      </div>
      <Pagination className='bg-white p-2 rounded-xl my-2 shadow-xl'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

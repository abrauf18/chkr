"use client"
import DashboardHeader from '@/components/shared/dashboard-header'
import { Button } from '@/components/ui/button'
import { CalendarDays, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import OngoingJobCard from './ongoing-job-card'
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

export default function MyJobs() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = jobRequests.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jobRequests.length / ITEMS_PER_PAGE);
  return (
    <div className='flex flex-col mx-auto gap-3'>
      <DashboardHeader title='My Jobs' />
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>All Jobs</h1>
        <div className="flex justify-center items-center gap-2">
          <Button className="md:w-[90%] w-1/2 bg-white hover:bg-white rounded-3xl p-6 text-sm lg:text-base mobile:hidden">
            <CalendarDays className='mr-2' color='#FF2600' />
            March 11 - March 17, 2024
            <ChevronDown className='ml-2' />
          </Button>
          <Button className="md:w-[90%] w-1/2 bg-white rounded-3xl p-6 text-sm lg:text-base mobile:hidden">
            Filter
            <ChevronDown
              className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]"
            />
          </Button>
        </div>
      </div>
      {currentItems.map((jobRequest, index) => (
        <OngoingJobCard
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
  )
}

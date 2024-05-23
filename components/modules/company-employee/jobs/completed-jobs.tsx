"use client"
import React, { useState } from 'react';
import CompletedJobCard from './completed-job-card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const DUMMY_DATA = [
  {
    userName: 'Ayesha Khan',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    service: 'Delivery',
    dateTime: '15 March 2023 7:00 pm',
    status: 'completed',
    zipCode: '3333',
    payment: '360.00',
    paymentStatus: 'Received',
  },
  {
    userName: 'Ayesha Khan',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    service: 'Delivery',
    dateTime: '15 March 2023 7:00 pm',
    status: 'completed',
    zipCode: '3333',
    payment: '360.00',
    paymentStatus: 'Received',
  },
  {
    userName: 'Ayesha Khan',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    service: 'Delivery',
    dateTime: '15 March 2023 7:00 pm',
    status: 'completed',
    zipCode: '3333',
    payment: '360.00',
    paymentStatus: 'Received',
  },
  {
    userName: 'Ayesha Khan',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    service: 'Delivery',
    dateTime: '15 March 2023 7:00 pm',
    status: 'completed',
    zipCode: '3333',
    payment: '360.00',
    paymentStatus: 'Received',
  },
  {
    userName: 'Ayesha Khan',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    service: 'Delivery',
    dateTime: '15 March 2023 7:00 pm',
    status: 'completed',
    zipCode: '3333',
    payment: '360.00',
    paymentStatus: 'Received',
  },
  {
    userName: 'Ayesha Khan',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    service: 'Delivery',
    dateTime: '15 March 2023 7:00 pm',
    status: 'completed',
    zipCode: '3333',
    payment: '360.00',
    paymentStatus: 'Received',
  },
  {
    userName: 'Ayesha Khan',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    service: 'Delivery',
    dateTime: '15 March 2023 7:00 pm',
    status: 'completed',
    zipCode: '3333',
    payment: '360.00',
    paymentStatus: 'Received',
  },
];

export default function CompletedJobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const totalPages = Math.ceil(DUMMY_DATA.length / jobsPerPage);

  const handleClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayedJobs = DUMMY_DATA.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div>
      {displayedJobs.map((job) => (
        <CompletedJobCard
          key={job.userName}
          {...job}
        />
      ))}
      <Pagination className='bg-white my-6 rounded-xl p-4'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousPage} />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink onClick={() => handleClickPage(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
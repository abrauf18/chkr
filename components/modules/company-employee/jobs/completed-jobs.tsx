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

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
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
      <Pagination className='bg-white my-6 rounded-xl p-4' >
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationEllipsis
            hidden={totalPages <= 5}
          />
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

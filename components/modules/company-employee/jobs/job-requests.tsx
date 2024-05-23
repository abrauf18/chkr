"use client"
import React, { useState } from 'react';
import JobRequestCard from '../dashboard/job-request-card';
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
    name: 'Jerome Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380  View Direction',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
  {
    name: 'Chris Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380  View Direction',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
  {
    name: 'Joe Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380  View Direction',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
  {
    name: ' Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380  View Direction',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
];

export default function JobRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;

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
      <div className='flex flex-col gap-6'>
        {displayedJobs.map((job) => (
          <JobRequestCard key={job.name} {...job} />
        ))}
      </div>
      <Pagination className='bg-white my-6 rounded-xl p-4'>
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
            hidden={totalPages <= 5} // Hide ellipsis if total pages <= 5
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

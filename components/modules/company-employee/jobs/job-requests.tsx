"use client"
import React, { useState } from 'react';
import JobRequestCard from '../dashboard/job-request-card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const DUMMY_DATA = [
  {
    name: 'Jerome Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
  {
    name: 'Chris Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
  {
    name: 'Joe Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
  {
    name: ' Bell',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    service: 'ihdd',
    paymentStatus: 'done',
    dateTime: '15 March 2023 7:00 pm',
    zipCode: '10010',
    amount: '990',
  },
];

export default function JobRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(DUMMY_DATA.length / itemsPerPage);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = DUMMY_DATA.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className='flex flex-col gap-6'>
        {paginatedData.map((job) => (
          <JobRequestCard key={job.name} {...job} />
        ))}
      </div>
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

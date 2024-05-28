import React, { useState, useEffect } from 'react';
import OngoingJobCard from './ongoing-job-card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const OngoingJobsData = [
  {
    id: 1,
    name: "Guy Hawkins",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    id: 2,
    name: "Ayesha",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    id: 3,
    name: "Joe",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    id: 4,
    name: "Zyaima",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    id: 5,
    name: "Usama",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Delivery",
    paymentStatus: "Verified",
    amount: "230.00"
  },
  {
    id: 6,
    name: "Ali",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    zipCode: "10001",
    dateTime: "15 March 2023 7:00 pm",
    service: "Room Cleaning",
    paymentStatus: "Verified",
    amount: "230.00"
  },
];

const ITEMS_PER_PAGE = 2;

export default function OngoingJobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const totalPages = Math.ceil(OngoingJobsData.length / jobsPerPage);

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

  const [completedJobIds, setCompletedJobIds] = useState<number[]>([]);

  useEffect(() => {
    const storedCompletedJobs = localStorage.getItem('completedJobIds');
    if (storedCompletedJobs) {
      setCompletedJobIds(JSON.parse(storedCompletedJobs));
    }
  }, []);

  const displayedJobs = OngoingJobsData.filter((job) => !completedJobIds.includes(job.id)).slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div className='flex flex-col mx-auto gap-4'>
      {displayedJobs.map((job) => (
        <OngoingJobCard
          key={job.id}
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
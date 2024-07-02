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


interface JobsProps {
  jobs: any[];
}

const OngoingJobs: React.FC<JobsProps> = ({ jobs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const filteredJobs = jobs.filter(job => job.job.status === 'ongoing');

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

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
  const paginatedData = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  // const [completedJobIds, setCompletedJobIds] = useState<number[]>([]);

  // useEffect(() => {
  //   const storedCompletedJobs = localStorage.getItem('completedJobIds');
  //   if (storedCompletedJobs) {
  //     setCompletedJobIds(JSON.parse(storedCompletedJobs));
  //   }
  // }, []);

  // const displayedJobs = OngoingJobsData.filter((job) => !completedJobIds.includes(job.id)).slice(
  //   (currentPage - 1) * jobsPerPage,
  //   currentPage * jobsPerPage
  // );

  return (
    <div className='flex flex-col mx-auto gap-4'>
      {paginatedData.map((job) => (
        <OngoingJobCard
          key={job.job.id}
          id={job.job.id}   
          customer_name={job.job.customer_name}
          location={job.job.location}
          description={job.job.description}
          status={job.request_status}
          date_time={job.job.date_time}
          service={job.job.service.service_name}
          price={job.price}      
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

export default OngoingJobs;

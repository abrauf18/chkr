"use client";
import React, { useState } from "react";
import CompletedJobCard from "./completed-job-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface JobsProps {
  jobs: any[];
}
const CompletedJobs: React.FC<JobsProps> = ({ jobs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const filteredJobs = jobs.filter((job) => job.job.status === "completed");

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
  const paginatedData = filteredJobs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {filteredJobs.length === 0 ? (
        <div className="text-center mt-12">No jobs to show</div>
      ) : (
        <div>
          {paginatedData.map((job) => (
            <CompletedJobCard
              key={job.job.id}
              id={job.job.id}
              customer_name={job.job.customer_name}
              location={job.job.location.name}
              description={job.job.description}
              status={job.job.status}
              date_time={job.job.date_time}
              service={job.job.service.service_name}
              price={job.price}
              payment_status={job?.job?.payment_status}
            />
          ))}
          {paginatedData?.length > itemsPerPage && (
            <Pagination className="bg-white my-6 rounded-xl p-4">
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
          )}
        </div>
      )}
    </>
  );
};

export default CompletedJobs;


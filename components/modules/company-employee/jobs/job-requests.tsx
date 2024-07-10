"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";

interface JobRequestsProps {
  jobs: any[];
  isDashboard?: boolean;
}

const JobRequestCard = dynamic(() => import("../dashboard/job-request-card"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
});

const JobRequests: React.FC<JobRequestsProps> = ({ jobs, isDashboard }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const filteredJobs = jobs.filter((job) => job.request_status === "pending");
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
    <div>
      {filteredJobs.length === 0 ? (
        <p className="text-center mt-12">No jobs to display</p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {paginatedData.map((job) => (
              <JobRequestCard
                key={job.job.id}
                job_id={job.job.id}
                customer_name={job.job.customer_name}
                location={job.job.location}
                description={job.job.description}
                status={job.request_status}
                date_time={job.job.date_time}
                service={job.job.service.service_name}
                price={job.price}
              />
            ))}
          </div>
          {!isDashboard && (
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
        </>
      )}
    </div>
  );
};

export default JobRequests;


"use client";
import React, { useState } from "react";
import AssignedJobCard from "../dashboard/assigned-job-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AdminHeader from "@/components/shared/admin-header";

const ITEMS_PER_PAGE = 3;

interface JobsProps {
  jobs: any[];
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginate = (data: any[], currentPage: number, itemsPerPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const filterJobsByStatus = (status: string) => {
    if (status === "cancelled") {
      return jobs.filter(job =>
        job.assigned_jobs.some((assignedJob: { request_status: string; }) => assignedJob.request_status === status)
      );
    } else {
      return jobs.filter(job => job.status === status);
    }
  };

  const allJobs = jobs;
  const ongoingJobs = filterJobsByStatus("ongoing");
  const completedJobs = filterJobsByStatus("completed");
  const cancelledJobs = filterJobsByStatus("cancelled");

  const tabData = [
    { id: 1, text: "All Jobs", content: allJobs },
    { id: 2, text: "Ongoing", content: ongoingJobs },
    { id: 3, text: "Completed", content: completedJobs },
    { id: 4, text: "Cancelled", content: cancelledJobs },
  ];

  const activeTabData = tabData.find((tab) => tab.id === activeTab)?.content || [];
  const paginatedData = paginate(activeTabData, currentPage, ITEMS_PER_PAGE);
  const totalPages = Math.ceil(activeTabData.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col w-full">
      <AdminHeader title="All Jobs" isAdmin={true} isSuperAdmin={false} page="createJob" />
      <div className="flex gap-2 items-center my-3 w-full mx-auto">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center bg-white rounded-2xl py-2 px-6 gap-2 cursor-pointer ${activeTab === tab.id ? "bg-primary border-b-2 border-primary" : ""
              } ${tab.text === "Cancelled" ? "mobile:hidden" : ""}`}
          >
            {activeTab === tab.id && (
              <div className="rounded-full w-2 h-2 bg-primary" />
            )}
            <div>
              <span
                className={`whitespace-nowrap mobile:text-sm ${activeTab === tab.id ? "font-bold" : "font-medium"
                  } `}
              >
                {tab.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      {activeTabData.length === 0 ? (
        <p className="text-center text-gray-700 mt-6">No jobs to show</p>
      ) : (
        <div>
          {paginatedData.map((job, index) => (
            <AssignedJobCard
              key={index}
              customer_name={job.customer_name}
              location={job.location}
              status={job.status}
              phone_number={job.phone_number}
              date_time={job.date_time}
              service={job.service.service_name}
              price={job.price}
              assignedUsers={job.assigned_jobs.map((assignedJob: { user: any; }) => assignedJob.user)}
            />
          ))}
        </div>
      )}
      {activeTabData.length > 0 && (
        <Pagination className="bg-white my-6 rounded-xl p-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default Jobs;

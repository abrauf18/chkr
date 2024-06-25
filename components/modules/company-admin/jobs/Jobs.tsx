"use client";
import React, { useEffect, useState } from "react";
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
import { GetJobsAction } from "@/actions/jobs/job-action";

const ITEMS_PER_PAGE = 3;

const Jobs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobData, setJobData] = useState<any[]>([]);

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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await GetJobsAction();
        console.log(response);
        setJobData(response);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    fetchJobs();
  }, []);

  const filterJobsByStatus = (status: string) => {
    if (status === "cancelled") {
      return jobData.filter(job =>
        job.assigned_jobs.some((assignedJob: { request_status: string; }) => assignedJob.request_status === status)
      );
    } else {
      return jobData.filter(job => job.status === status);
    }
  };

  const allJobs = jobData;
  const ongoingJobs = filterJobsByStatus("pending");
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
            assignedUsers={job.assigned_jobs.map((assignedJob: { user: any; }) => assignedJob.user)} // Extract users from assigned_jobs
          />
        ))}
      </div>
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
    </div>
  );
};

export default Jobs;

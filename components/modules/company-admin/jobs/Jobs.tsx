"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AssignedJobCard from "../dashboard/assigned-job-card";
import { ChevronDown, CalendarDays } from "lucide-react";
import DashboardHeader from "@/components/shared/dashboard-header";
import CreateJob from "./create-job";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 2;

const Jobs = () => {
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

  const allJobsData = [
    {
      userName: "Guy Hawkins",
      location: "4140 Parker Rd. Allentown, New Mexico 31134",
      status: "Checked-in",
      phoneNumber: "(603) 555-0123",
      dateTime: "15 March 2023 7:00 pm",
      service: "Room Cleaning",
      payment: "230.00",
      employeeName: "Ralph Edwards",
      imageurl: "/images/user.jpeg",
    },
    {
      userName: "Albert Flores",
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      status: "Checked-out",
      phoneNumber: "(603) 555-0123",
      dateTime: "24 May 2024 8:00 pm",
      service: "Room Cleaning",
      payment: "260.00",
      employeeName: "Roy Edwards",
      imageurl: "/images/user.jpeg",
    },
    {
      userName: "Jane Smith",
      location: "5678 Oak St. Springfield, IL 62702",
      status: "Ongoing",
      phoneNumber: "(987) 654-3210",
      dateTime: "25 May 2024 10:00 am",
      service: "Office Cleaning",
      payment: "200.00",
      employeeName: "John Doe",
      imageurl: "/images/user.jpeg",
    },
  ];

  const ongoingJobsData = [
    {
      userName: "John Doe",
      location: "1234 Elm St. Springfield, IL 62701",
      status: "Ongoing",
      phoneNumber: "(123) 456-7890",
      dateTime: "25 May 2024 9:00 am",
      service: "House Cleaning",
      payment: "150.00",
      employeeName: "Jane Smith",
      imageurl: "/images/user.jpeg",
    },
    {
      userName: "Jane Smith",
      location: "5678 Oak St. Springfield, IL 62702",
      status: "Ongoing",
      phoneNumber: "(987) 654-3210",
      dateTime: "25 May 2024 10:00 am",
      service: "Office Cleaning",
      payment: "200.00",
      employeeName: "John Doe",
      imageurl: "/images/user.jpeg",
    },
  ];

  const pendingJobsData = [
    {
      userName: "Jane Smith",
      location: "5678 Oak St. Springfield, IL 62702",
      status: "Ongoing",
      phoneNumber: "(987) 654-3210",
      dateTime: "25 May 2024 10:00 am",
      service: "Office Cleaning",
      payment: "200.00",
      employeeName: "John Doe",
      imageurl: "/images/user.jpeg",
    },
  ];

  const cancelledJobsData = [
    {
      userName: "Jane Smith",
      location: "5678 Oak St. Springfield, IL 62702",
      status: "Ongoing",
      phoneNumber: "(987) 654-3210",
      dateTime: "25 May 2024 10:00 am",
      service: "Office Cleaning",
      payment: "200.00",
      employeeName: "John Doe",
      imageurl: "/images/user.jpeg",
    },
    {
      userName: "Jane Smith",
      location: "5678 Oak St. Springfield, IL 62702",
      status: "Ongoing",
      phoneNumber: "(987) 654-3210",
      dateTime: "25 May 2024 10:00 am",
      service: "Office Cleaning",
      payment: "200.00",
      employeeName: "John Doe",
      imageurl: "/images/user.jpeg",
    },
  ];

  const tabData = [
    { id: 1, text: "All Jobs", content: allJobsData },
    { id: 2, text: "Ongoing", content: ongoingJobsData },
    { id: 3, text: "Pending", content: pendingJobsData },
    { id: 4, text: "Cancelled", content: cancelledJobsData },
  ];

  const activeTabData = tabData.find((tab) => tab.id === activeTab)?.content || [];
  const paginatedData = paginate(activeTabData, currentPage, ITEMS_PER_PAGE);
  const totalPages = Math.ceil(activeTabData.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col w-full">
      <DashboardHeader title="Here’s all completed & ongoing Jobs !" />
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">All Jobs</h1>
        <div className="flex justify-end items-center gap-2 md:w-[87%]">
          <Button className="bg-white hover:bg-white rounded-3xl py-6 text-sm lg:text-base mobile:hidden">
            <CalendarDays className="mr-2" color="#FF2600" />
            March 11 - March 17, 2024
            <ChevronDown className="ml-2" />
          </Button>
          <Button className="bg-white rounded-3xl p-6 text-sm lg:text-base mobile:hidden">
            Filter
            <ChevronDown className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]" />
          </Button>
          <CreateJob />
        </div>
      </div>
      <div className="flex gap-2 items-center my-3 w-full mx-auto">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center bg-white rounded-2xl py-2 px-6 gap-2 cursor-pointer ${activeTab === tab.id ? "bg-primary border-b-2 border-primary" : ""
              } ${tab.text === "Cancelled" ? "mobile:hidden" : ""}`}
          >
            <div
              className={`rounded-full w-2 h-2 ${activeTab === tab.id ? "bg-primary" : "bg-white"
                } `}
            ></div>
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
        {paginatedData.map((jobData, index) => (
          <AssignedJobCard
            key={index}
            userName={jobData.userName}
            location={jobData.location}
            status={jobData.status}
            phoneNumber={jobData.phoneNumber}
            dateTime={jobData.dateTime}
            service={jobData.service}
            payment={jobData.payment}
            employeeName={jobData.employeeName}
            imageurl={jobData.imageurl}
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

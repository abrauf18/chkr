"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TotalJobs from "@/assets/icons/TotalJobs";
import OngoingJobs from "@/assets/icons/OngoingJobs";
import PendingJobs from "@/assets/icons/PendingJobs";
import Employees from "@/assets/icons/Employees";
import AssignedJobCard from "../dashboard/assigned-job-card"; // Adjust import path if needed
import { CircleArrowRight } from "lucide-react";
import Header from "@/components/shared/header";
import Link from "next/link";
import { GetJobsAction } from "@/actions/jobs/job-action";

const Dashboard = () => {
  const [assignedJobs, setAssignedJobs] = useState<any[]>([]);

  useEffect(() => {
    const fetchAssignedJobs = async () => {
      try {
        // Assuming GetJobsAction fetches the assigned jobs data
        const response = await GetJobsAction();
        console.log(response); // Verify the structure of response
        setAssignedJobs(response);
      } catch (error) {
        console.error("Error fetching assigned jobs:", error);
      }
    };
    fetchAssignedJobs();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Header title="Dashboard" />

      {/* Job Cards */}
      <div className="flex md:flex-row flex-col w-full gap-6 mt-4">
        <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
          <TotalJobs className="mr-4" />
          <div className="flex flex-col w-3/4">
            <h1 className="font-bold text-3xl">40</h1>
            <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
              Total Jobs
            </p>
          </div>
        </div>
        <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
          <OngoingJobs className="mr-4" />
          <div className="flex flex-col w-3/4">
            <h1 className="font-bold text-3xl">25</h1>
            <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
              Ongoing Jobs
            </p>
          </div>
        </div>
        <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
          <PendingJobs className="h-14 mr-4" />
          <div className="flex flex-col w-3/4">
            <h1 className="font-bold text-3xl">15</h1>
            <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
              Pending Jobs
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white mt-6 rounded-3xl gap-4 py-6">
        <div className="flex justify-start px-6">
          <Employees className="mr-4" />
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">30</h1>
            <p className="text-gray-500 text-lg">Total No. of employees</p>
          </div>
        </div>
        <hr className="h-0.5 bg-gray-200 mx-8 px-4" />
        <div className="flex md:flex-row flex-col mx-8 justify-between">
          <div className="flex md:gap-2 gap-3 items-center">
            <div className="w-3 h-3 bg-[#8AE569] rounded-full"></div>
            <h1 className="font-bold text-2xl">18</h1>
            <p className="text-gray-500 text-base">Assigned</p>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <h1 className="font-bold text-2xl">12</h1>
            <p className="text-gray-500 text-base">Un-assigned</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <h1 className="text-sm whitespace-nowrap">See Employees</h1>
            <Link href="/company-admin/employees">
              <div>
                <CircleArrowRight className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center my-6">
          <span className="text-xl font-semibold">Recent Assigned Jobs</span>
          <Link href="/company-admin/jobs">
            <Button className="rounded-3xl text-white">View All</Button>
          </Link>
        </div>
        {/* Render assigned job cards */}
        {assignedJobs.map((job, index) => (
          <AssignedJobCard
            key={index}
            customer_name={job.customer_name}
            location={job.location}
            status={job.status}
            phone_number={job.phone_number}
            date_time={job.date_time}
            service={job.service.service_name}
            price={job.price}
            assignedUsers={job.assigned_jobs.map(
              (assignedJob: { user: any }) => assignedJob.user
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

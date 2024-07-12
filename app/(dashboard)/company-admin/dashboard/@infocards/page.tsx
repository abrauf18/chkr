import React from "react";
import TotalJobs from "@/assets/icons/TotalJobs";
import OngoingJobs from "@/assets/icons/OngoingJobs";
import PendingJobs from "@/assets/icons/PendingJobs";
import Employees from "@/assets/icons/Employees";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { GetDashboardData } from "@/actions/dashboard/dashboard-action";

const InfoCardPage = async () => {
  const dashboardData = await GetDashboardData();
  return (
    <>
      <div className="flex md:flex-row flex-col w-full gap-6 mt-4">
        <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
          <TotalJobs className="mr-4" />
          <div className="flex flex-col w-3/4">
            <h1 className="font-bold text-3xl">{dashboardData?.totalJobs}</h1>
            <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
              Total Jobs
            </p>
          </div>
        </div>
        <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
          <OngoingJobs className="mr-4" />
          <div className="flex flex-col w-3/4">
            <h1 className="font-bold text-3xl">
              {dashboardData?.ongoingJobsCount}
            </h1>
            <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
              Ongoing Jobs
            </p>
          </div>
        </div>
        <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
          <PendingJobs className="h-14 mr-4" />
          <div className="flex flex-col w-3/4">
            <h1 className="font-bold text-3xl">
              {dashboardData?.pendingJobsCount}
            </h1>
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
            <h1 className="font-bold text-3xl">
              {dashboardData?.employeesCount}
            </h1>
            <p className="text-gray-500 text-lg">Total No. of employees</p>
          </div>
        </div>
        <hr className="h-0.5 bg-gray-200 mx-8 px-4" />
        <div className="flex md:flex-row flex-col mx-8 justify-between">
          <div className="flex md:gap-2 gap-3 items-center">
            <div className="w-3 h-3 bg-[#8AE569] rounded-full"></div>
            <h1 className="font-bold text-2xl">
              {dashboardData?.assignedEmployeesCount}
            </h1>
            <p className="text-gray-500 text-base">Assigned</p>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <h1 className="font-bold text-2xl">
              {" "}
              {dashboardData?.unassignedEmployeesCount}
            </h1>
            <p className="text-gray-500 text-base">Un-assigned</p>
          </div>
          <Link href="/company-admin/employees" className="hover:text-primary">
            <div className="flex items-center mt-4 md:mt-0">
              <h1 className="text-sm whitespace-nowrap">See Employees</h1>
              <div>
                <CircleArrowRight className="ml-2" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoCardPage;


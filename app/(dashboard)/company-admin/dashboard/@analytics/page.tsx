import Employees from "@/assets/icons/Employees";
import Summary from "@/components/modules/company-employee/dashboard/summary";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AnalyticsPage = () => {
  return (
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
  );
};

export default AnalyticsPage;


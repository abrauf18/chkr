"use client";

import React, { useState } from "react";
import { FileKey2Icon, MailPlus, StickyNote } from "lucide-react";
import JobsGraph from "@/components/modules/company-admin/dashboard/jobs-graph";

const DashboardSummary = ({ jobsSummary }: { jobsSummary: any }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setCurrentYear(+e.target.value);
  }
  return (
    <>
      <h1 className="text-xl font-semibold mt-2">Overview</h1>
      <div className="flex flex-col lg:flex-row gap-4 w-full mx-auto">
        <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
          <div className="flex items-center xl:gap-9 gap-2 w-full">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
              <FileKey2Icon color="#3498DB" />
            </div>
            <div className="flex flex-col w-[40%]">
              <h1 className="font-bold text-3xl lg:text-2xl text-gray-700 whitespace-nowrap">
                {jobsSummary?.all_jobs || 0}
              </h1>
              <p className="text-gray-400 text-xl whitespace-nowrap">
                Total Jobs
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
          <div className="flex items-center xl:gap-9 gap-2 w-full">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center ">
              <StickyNote color="#BB6BD9" />
            </div>
            <div className="flex flex-col w-[40%]">
              <h1 className="font-bold text-2xl xl:text-3xl text-gray-700">
                {jobsSummary?.completed_jobs || 0}
              </h1>
              <p className="text-gray-400 text-xl xl:whitespace-nowrap mobile:whitespace-nowrap">
                Completed Jobs
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
          <div className="flex items-center xl:gap-9 gap-2">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
              <MailPlus color="#F2994A" />
            </div>
            <div className="flex flex-col w-[40%]">
              <h1 className="font-bold text-3xl text-gray-700">
                {jobsSummary?.pending_jobs || 0}
              </h1>
              <p className="text-gray-400 text-xl xl:whitespace-nowrap mobile:whitespace-nowrap">
                New Requests
              </p>
            </div>
          </div>
        </div>
      </div>
      {jobsSummary?.completedJobsPerMonth.length > 0 ? (
        <div className="mb-6">
          <div className="flex justify-between items-center my-3">
            <h1 className="text-xl font-semibold my-4">
              Completed Jobs Summary
            </h1>
            <select
              className="select-wrapper"
              onChange={handleChange}
              value={currentYear}
            >
              <option value={new Date().getFullYear()}>
                {new Date().getFullYear()}
              </option>
              <option value={new Date().getFullYear() - 1}>
                {new Date().getFullYear() - 1}
              </option>
              <option value={new Date().getFullYear() - 2}>
                {new Date().getFullYear() - 2}
              </option>
            </select>
          </div>
          <JobsGraph
            data={jobsSummary.completedJobsPerMonth}
            year={currentYear}
          />
        </div>
      ) : (
        <div className="rounded-lg border p-24 mt-5">
          <p className="text-center text-gray-700 mt-6">
            No data to present graph
          </p>
        </div>
      )}
    </>
  );
};

export default DashboardSummary;


import MyJobs from "@/components/modules/company-employee/jobs/my-jobs";
import React, { Suspense } from "react";
import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import { GetUserJobsAction } from "@/actions/jobs/job-action";
import Loader from "@/components/shared/loader";
import JobsPage from "../dashboard/@jobs/page";

export const metadata: Metadata = {
  title: "My Jobs",
  description: "Manage all of your jobs efficiently.",
};

export default async function page() {
  const jobs = await GetUserJobsAction();
  return (
    <>
      <DashboardHeader title="My Jobs" />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96">
            <Loader />
          </div>
        }
      >
        {<JobsPage />}
      </Suspense>
    </>
  );
}


import { GetJobsAction } from "@/actions/jobs/job-action";
import Jobs from "@/components/modules/company-admin/jobs/Jobs";
import DashboardHeader from "@/components/shared/dashboard-header";
import Loader from "@/components/shared/loader";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Manage all your company's jobs on Chkr from one central location. Assign tasks, track progress, and view payment details from your company admin dashboard.",
};

export default async function page() {
  const jobs = await GetJobsAction();
  return (
    <>
      <DashboardHeader title="" />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96">
            <Loader />
          </div>
        }
      >
        <Jobs jobs={jobs} />
      </Suspense>
    </>
  );
}


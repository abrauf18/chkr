import { GetUserJobsAction } from "@/actions/jobs/job-action";
import { signOut } from "@/auth";
import MyJobs from "@/components/modules/company-employee/jobs/my-jobs";
import clsx from "clsx";
import React from "react";

async function JobsPage({ isDashboard }: { isDashboard?: boolean }) {
  const jobs = await GetUserJobsAction();
  return (
    <div className={clsx(isDashboard && "mb-6")}>
      <MyJobs jobs={jobs} isDashboard={isDashboard} />
    </div>
  );
}

export default JobsPage;


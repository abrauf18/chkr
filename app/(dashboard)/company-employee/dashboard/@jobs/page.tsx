import { GetUserJobsAction } from "@/actions/jobs/job-action";
import MyJobs from "@/components/modules/company-employee/jobs/my-jobs";
import clsx from "clsx";
import React from "react";

async function JobsPage({
  isDashboard,
  searchParams = { order: "defaultOrder", sort: "defaultSort" },
}: {
  isDashboard?: boolean;
  searchParams?: { order: string; sort: string };
}) {
  const { order, sort } = searchParams;
  const jobs = await GetUserJobsAction({ order, sort });
  return (
    <div className={clsx(isDashboard && "mb-6")}>
      <MyJobs jobs={jobs} isDashboard={isDashboard} />
    </div>
  );
}

export default JobsPage;


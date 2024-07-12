import { GetJobsAction } from "@/actions/jobs/job-action";
import Jobs from "@/components/modules/company-admin/jobs/Jobs";
import clsx from "clsx";
import React from "react";

async function JobsPage({ isDashboard }: { isDashboard?: boolean }) {
  const jobs = await GetJobsAction();
  return (
    <>
      <div className={clsx(isDashboard && "mb-6")}>
        <Jobs jobs={jobs} isDashboard />
      </div>
    </>
  );
}

export default JobsPage;


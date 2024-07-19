import { GetJobsAction } from "@/actions/jobs/job-action";
import Jobs from "@/components/modules/company-admin/jobs/Jobs";
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
  const jobs = await GetJobsAction({ order, sort });
  return (
    <>
      <div className={clsx(isDashboard && "mb-6")}>
        <Jobs jobs={jobs} isDashboard />
      </div>
    </>
  );
}

export default JobsPage;


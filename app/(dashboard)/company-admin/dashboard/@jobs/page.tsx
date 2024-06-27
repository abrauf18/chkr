import { GetJobsAction } from "@/actions/jobs/job-action";
import Jobs from "@/components/modules/company-admin/jobs/Jobs";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

async function JobsPage({ isDashboard }: { isDashboard?: boolean }) {
  const jobs = await GetJobsAction();
  return (
    <>
     <div className="flex justify-between items-center my-6">
          <span className="text-xl font-semibold">Recent Assigned Jobs</span>
          <Link href="/company-admin/jobs">
            <Button className="rounded-3xl text-white">View All</Button>
          </Link>
        </div>
    <div className={clsx(isDashboard && "mb-6")}>
      <Jobs jobs={jobs} isDashboard/>
    </div>
    </>
  );
}

export default JobsPage;


import { GetJobsAction } from "@/actions/jobs/job-action";
import Jobs from "@/components/modules/company-admin/jobs/Jobs";
import React from "react";

export default async function JobPage() {
  const jobs = await GetJobsAction();
  return <Jobs jobs={jobs} />;
}


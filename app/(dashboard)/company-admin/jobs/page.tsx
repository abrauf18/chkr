import { GetJobsAction } from "@/actions/jobs/job-action";
import Jobs from "@/components/modules/company-admin/jobs/Jobs";
import React from "react";

export default async function JobPage({
  searchParams,
}: {
  searchParams: { order: string; sort: string };
}) {
  const { order, sort } = searchParams;
  const jobs = await GetJobsAction({ order, sort });
  return <Jobs jobs={jobs} />;
}


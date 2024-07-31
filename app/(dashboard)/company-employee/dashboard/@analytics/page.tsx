import { GetJobsSummary } from "@/actions/jobs/job-action";
import DashboardSummary from "@/components/modules/company-admin/dashboard/dashboard-summary";
import React from "react";

const AnalyticsPage = async () => {
  const jobsSummary = await GetJobsSummary();
  return <DashboardSummary jobsSummary={jobsSummary} />;
};

export default AnalyticsPage;


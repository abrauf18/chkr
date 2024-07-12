import React from "react";
import DashboardHeader from "@/components/shared/dashboard-header";
import JobsPage from "../dashboard/@jobs/page";

export default async function page() {
  return (
    <>
      <DashboardHeader title="My Jobs" />
      {<JobsPage />}
    </>
  );
}


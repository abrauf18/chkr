import React from "react";
import DashboardHeader from "@/components/shared/dashboard-header";
import JobsPage from "../dashboard/@jobs/page";

export default async function page({
  searchParams,
}: {
  searchParams: { order: string; sort: string };
}) {
  const { order, sort } = searchParams;
  return (
    <>
      <DashboardHeader title="My Jobs" />
      <JobsPage searchParams={{ order, sort }} />
    </>
  );
}


import Jobs from "@/components/modules/company-admin/jobs/Jobs";
import DashboardHeader from "@/components/shared/dashboard-header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Manage all your company's jobs on Chkr from one central location. Assign tasks, track progress, and view payment details from your company admin dashboard."
};

export default function page() {
  return (
    <>
      <DashboardHeader title="" />
      <Jobs />
    </>
  );
}
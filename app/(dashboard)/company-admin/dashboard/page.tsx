import React from "react";
import Dashboard from "@/components/modules/company-admin/dashboard/Dashboard";
import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage jobs and employees efficiently.",
};

const page = () => {
  return (
    <>
      <DashboardHeader title="Welcome, Ayesha Khan!" />
      <Dashboard />
    </>
  );
};

export default page;


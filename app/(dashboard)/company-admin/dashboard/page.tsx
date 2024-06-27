import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage jobs and employees efficiently.",
};

const page = () => {
  return (
    <>
      <DashboardHeader title="Welcome, Ayesha Khan!" />
      <Header title="Dashboard" />
    </>
  );
};

export default page;


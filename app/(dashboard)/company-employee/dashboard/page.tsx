import DashboardHeader from "@/components/shared/dashboard-header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage job requests and earnings efficiently.",
};

export default function page() {
  return (
    <div>
      <DashboardHeader title="Dashboard" />
    </div>
  );
}


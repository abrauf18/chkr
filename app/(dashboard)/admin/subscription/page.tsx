import Subscription from "@/components/modules/super-admin/subscription/subscription";
import DashboardHeader from "@/components/shared/dashboard-header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Subscription",
  description: "View subscription history.",
};

export default function page() {
  return (
    <>
      <DashboardHeader title="Payments" />
      <Subscription />
    </>
  );
}


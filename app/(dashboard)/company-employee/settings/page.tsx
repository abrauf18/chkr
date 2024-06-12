import DashboardHeader from "@/components/shared/dashboard-header";
import Settings from "@/components/shared/settings";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile settings on CHKR"
};
export default function page() {
  return (
    <>
      <DashboardHeader title="Profile" />
      <Settings/>
      </>
  );
}

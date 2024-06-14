import React, { Suspense } from "react";
import Settings from "@/components/shared/settings";
import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import { UserInfoAction } from "@/actions/settings/settings-action";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile settings on CHKR",
};

export default async function page() {
  const data = await UserInfoAction();
  return (
    <>
      <DashboardHeader title="Profile" />
      <Suspense fallback={<div>Loading...</div>}>
        <Settings isAdmin data={data} />{" "}
      </Suspense>
    </>
  );
}


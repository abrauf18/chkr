import { UserInfoAction } from "@/actions/settings/settings-action";
import DashboardHeader from "@/components/shared/dashboard-header";
import Settings from "@/components/shared/settings";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile settings on CHKR",
};

export default async function SettingsPage() {
  const data = await UserInfoAction();
  return (
    <>
      <DashboardHeader title="Profile" />
      <Suspense fallback={<div>Loading...</div>}>
        <Settings data={data} />{" "}
      </Suspense>
    </>
  );
}


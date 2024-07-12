import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import Header from "@/components/shared/header";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage jobs and employees efficiently.",
};

const page = async () => {
  const session: any = await auth();
  return (
    <>
      <DashboardHeader
        title={`Welcome, ${
          session?.user?.firstName + " " + session?.user?.lastName
        }!`}
      />
      <Header title="Dashboard" hideFilter />
    </>
  );
};

export default page;


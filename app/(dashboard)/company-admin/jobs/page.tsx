import Jobs from "@/components/modules/company-admin/jobs/Jobs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Manage all your company's jobs on Chkr from one central location. Assign tasks, track progress, and view payment details from your company admin dashboard."
};

const page = () => {
  return <Jobs />;
};

export default page;


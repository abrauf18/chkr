import MyJobs from '@/components/modules/company-employee/jobs/my-jobs'
import React from 'react'
import { Metadata } from 'next';
import DashboardHeader from '@/components/shared/dashboard-header';

export const metadata: Metadata = {
  title: "My Jobs",
  description: "Manage all of your jobs efficiently."
};

export default function page() {
  return (
    <>
      <DashboardHeader title="My Jobs" />
      <MyJobs/> 
      </>
  );
}

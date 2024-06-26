import MyJobs from '@/components/modules/company-employee/jobs/my-jobs'
import React from 'react'
import { Metadata } from 'next';
import DashboardHeader from '@/components/shared/dashboard-header';
import { GetUserJobsAction } from '@/actions/jobs/job-action';

export const metadata: Metadata = {
  title: "My Jobs",
  description: "Manage all of your jobs efficiently."
};

export default async function page() {
  const jobs = await GetUserJobsAction();
  return (
    <>
      <DashboardHeader title="My Jobs" />
      <MyJobs jobs = {jobs}/> 
      </>
  );
}

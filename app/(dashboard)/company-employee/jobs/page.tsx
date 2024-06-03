import JobDetails from '@/components/shared/job-details'
import MyJobs from '@/components/modules/company-employee/jobs/my-jobs'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Jobs",
  description: "Manage all of your jobs efficiently."
};

export default function page() {
  return <MyJobs />
}
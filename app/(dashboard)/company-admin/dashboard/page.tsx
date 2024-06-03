import React from 'react'
import Dashboard from '@/components/modules/company-admin/dashboard/Dashboard'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage jobs and employees efficiently."
};

const page = () => {
  return <Dashboard />
}

export default page
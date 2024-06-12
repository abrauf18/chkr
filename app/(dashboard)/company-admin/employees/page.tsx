import React from 'react'
import Employees from '@/components/modules/company-admin/employees/employees'
import { Metadata } from 'next';
import DashboardHeader from '@/components/shared/dashboard-header';

export const metadata: Metadata = {
  title: "Employees",
  description: "Manage your employees on CHKR. View employee information, add employees, and track performance from your company admin dashboard."
};

export default function page() {
  return (
    <>
      <DashboardHeader title=""/>
      <Employees />
    </>
  );
}
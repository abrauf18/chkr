import React, { Suspense } from "react";
import Employees from "@/components/modules/company-admin/employees/employees";
import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import AdminHeader from "@/components/shared/admin-header";
import { UsersAction } from "@/actions/users/user-actions";

export const metadata: Metadata = {
  title: "Employees",
  description:
    "Manage your employees on CHKR. View employee information, add employees, and track performance from your company admin dashboard.",
};

export default async function page() {
  const employees = await UsersAction();
  return (
    <>
      <DashboardHeader title="" />
      <AdminHeader
        title="Employees"
        isAdmin={true}
        isSuperAdmin={false}
        page="addEmployee"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Employees employees={employees} />
      </Suspense>
    </>
  );
}


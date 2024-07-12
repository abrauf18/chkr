import { UsersAction } from "@/actions/users/user-actions";
import Admins from "@/components/modules/super-admin/admins/admins";
import AdminHeader from "@/components/shared/admin-header";
import DashboardHeader from "@/components/shared/dashboard-header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admins",
  description:
    "A central location to manage all admin users within your system. Grant permissions, control access, and oversee admin activity.",
};

export default async function ManageAdminspage({ searchParams }: { searchParams: { order: string, sort: string } }){
  const {order, sort} = searchParams
  const admins = await  UsersAction({ order, sort });
  return (
    <>
      <DashboardHeader title="Manage Admins" />
      <AdminHeader title="Admins" isAdmin={false} isSuperAdmin={true} />
      <Admins admins={admins} />
    </>
  );
}


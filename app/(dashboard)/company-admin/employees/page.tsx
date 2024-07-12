import React from "react";
import Employees from "@/components/modules/company-admin/employees/employees";
import { UsersAction } from "@/actions/users/user-actions";

export default async function page({
  searchParams,
}: {
  searchParams: { order: string; sort: string };
}) {
  const { order, sort } = searchParams;
  const employees = await UsersAction({ order, sort });
  return <Employees employees={employees} />;
}


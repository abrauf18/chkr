import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import AdminHeader from "@/components/shared/admin-header";

export const metadata: Metadata = {
  title: "Employees",
  description:
    "Manage your employees on CHKR. View employee information, add employees, and track performance from your company admin dashboard.",
};
export default async function EmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashboardHeader title="" />
      <AdminHeader
        title="Employees"
        isAdmin={true}
        isSuperAdmin={false}
        page="addEmployee"
      />
      {children}
    </main>
  );
}


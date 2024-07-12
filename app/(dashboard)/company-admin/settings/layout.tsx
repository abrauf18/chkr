import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile settings on CHKR",
};
export default async function EmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashboardHeader title="Profile" />
      {children}
    </main>
  );
}


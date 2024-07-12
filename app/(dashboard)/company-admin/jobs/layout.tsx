import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import AdminHeader from "@/components/shared/admin-header";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Manage all your company's jobs on Chkr from one central location. Assign tasks, track progress, and view payment details from your company admin dashboard.",
};
export default async function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashboardHeader title="Company Jobs" />
      <AdminHeader
        title="All Jobs"
        isAdmin={true}
        isSuperAdmin={false}
        page="createJob"
        hideFilter
      />
      {children}
    </main>
  );
}


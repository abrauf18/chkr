import { Metadata } from "next";
import DashboardHeader from "@/components/shared/dashboard-header";
import AdminHeader from "@/components/shared/admin-header";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Services",
  description: "Manage your services on CHKR.",
};
export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashboardHeader title="Services" />
      <Header title="All Services" isCompanyAdmin hideFilter />
      {children}
    </main>
  );
}


import DashboardHeader from "@/components/shared/dashboard-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit the company information.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardHeader title="Companies" />
      {children}
    </>
  );
}


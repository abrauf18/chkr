import { CompanyDataProvider } from "@/components/modules/super-admin/companies/companydata-context";
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
  return <CompanyDataProvider>{children}</CompanyDataProvider>;
}


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Jobs",
  description: "Manage all of your jobs efficiently.",
};
export default async function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}


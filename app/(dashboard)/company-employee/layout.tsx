import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: any = await auth();
  if (!session) {
    return redirect("/login");
  }
  const role = session?.user?.role;
  if (role === "company-employee") {
    return <main>{children}</main>;
  }
  if (role === "admin" || role === "super-admin") {
    return redirect(`/${role}/subscription`);
  }
  return redirect(`/${role}/dashboard`);
}


import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: any = await auth();
  const role = session?.user?.role;
  if (role === "super-admin") {
    return <main>{children}</main>;
  }
  if (role === "admin" || role === "super-admin") {
    return redirect(`/${role}/subscription`);
  }
  return redirect(`/${role}/dashboard`);
}


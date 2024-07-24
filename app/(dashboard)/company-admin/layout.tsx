import { auth } from "@/auth";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { GetUserCompanyAction } from "@/actions/company/company-action";

const StripePlans = dynamic(() => import("@/components/shared/plans-stripe"), {
  ssr: false,
});
const UpdateSession = dynamic(
  () => import("@/components/modules/company-admin/dashboard/update-session"),
  {
    ssr: false,
  }
);

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

  if (role === "company-admin") {
    if (!session?.user?.company_id) {
      return redirect("/onboarding");
    }

    if (session?.user?.company_plan !== "paid") {
      const result = await GetUserCompanyAction(session.user.company_id || "");
      console.log(result);
      if (result.statusCode === 200 && result?.data?.company_plan === "paid") {
        return <UpdateSession company_plan={result.data.company_plan} />;
      }
      return <StripePlans />;
    }
    return <main>{children}</main>;
  }

  if (role === "admin" || role === "super-admin") {
    return redirect(`/${role}/subscription`);
  }
  return redirect(`/${role}/dashboard`);
}


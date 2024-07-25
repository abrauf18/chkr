import { auth } from "@/auth";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { GetUserCompanyAction } from "@/actions/company/company-action";
import { UserInfoAction } from "@/actions/settings/settings-action";

const StripePlans = dynamic(() => import("@/components/shared/plans-stripe"), {
  ssr: false,
});
const UpdateSession = dynamic(
  () => import("@/components/modules/company-admin/dashboard/update-session"),
  {
    ssr: false,
  }
);

const Stripe = dynamic(() => import("@/components/shared/stripe"), {
  ssr: false,
});

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
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const result = await GetUserCompanyAction(session.user.company_id || "");
      if (result.statusCode === 200 && result?.data?.company_plan === "paid") {
        return <UpdateSession company_plan={result?.data?.company_plan} />;
      }
      return <StripePlans />;
    }
    if (session?.user?.stripe_connect_account_id === null) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const result = await UserInfoAction();
      if (result && result?.stripe_connect_account_id != null) {
        return (
          <UpdateSession
            stripe_connect_account_id={result?.stripe_connect_account_id}
          />
        );
      }
      return <Stripe />;
    }

    return <main>{children}</main>;
  }

  if (role === "admin" || role === "super-admin") {
    return redirect(`/${role}/subscription`);
  }

  return redirect(`/${role}/dashboard`);
}


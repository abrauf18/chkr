import { UserInfoAction } from "@/actions/settings/settings-action";
import { auth } from "@/auth";
import dynamic from "next/dynamic";

import { redirect } from "next/navigation";
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
  if (role === "company-employee") {
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
      return <Stripe open />;
    }
    return <main>{children}</main>;
  }
  if (role === "admin" || role === "super-admin") {
    return redirect(`/${role}/subscription`);
  }
  return redirect(`/${role}/dashboard`);
}


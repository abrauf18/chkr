import { PUBLIC_ROUTES, ROOT } from "@/lib/routes";
import { auth } from "@/auth";

interface IUserInterface {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  contact_number: string;
  role: string;
}

export default auth(async (req) => {
  const { nextUrl } = req;
  const user = req.auth?.user as IUserInterface | undefined;
  const role = user?.role;

  const isAuthenticated = !!req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  const rolePaths = {
    "company-admin": [
      `/${role}/dashboard`,
      `/${role}/settings`,
      `/${role}/jobs`,
      `/${role}/employees`,
    ],
  };

  if (isAuthenticated && role === "company-admin") {
    const token = (req.auth as { token?: string })?.token;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/has-company`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    if (result.statusCode === 200) {
      const dashboardUrl = new URL(`/${role}/dashboard`, nextUrl);
      if (!rolePaths[role].includes(nextUrl.pathname)) {
        return Response.redirect(dashboardUrl);
      }
    } else {
      const onboardingUrl = new URL("/onboarding", nextUrl);
      if (nextUrl.pathname !== onboardingUrl.pathname) {
        return Response.redirect(onboardingUrl);
      }
    }
  }

  if (isPublicRoute && isAuthenticated) {
    const targetUrl = new URL(`/${role}/dashboard`, nextUrl);
    if (role === "admin" || role === "superadmin") {
      targetUrl.pathname = `/${role}/subscription`;
    }
    if (nextUrl.pathname !== targetUrl.pathname) {
      return Response.redirect(targetUrl);
    }
  }

  if (!isAuthenticated && !isPublicRoute) {
    const rootUrl = new URL(ROOT, nextUrl);
    if (nextUrl.pathname !== rootUrl.pathname) {
      return Response.redirect(rootUrl);
    }
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};


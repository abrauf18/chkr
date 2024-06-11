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

export default auth((req) => {
  const { nextUrl } = req;
  const user = req.auth?.user as IUserInterface | undefined;
  const role = user?.role;

  const isAuthenticated = !!req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated) {
    if (role === "admin" || role === "superadmin") {
      return Response.redirect(new URL(`/${role}/subscription`, nextUrl));
    }
    return Response.redirect(new URL(`/${role}/dashboard`, nextUrl));
  }
  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(ROOT, nextUrl));
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};


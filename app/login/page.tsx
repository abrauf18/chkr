import Login from "@/components/modules/auth/login";
import Navbar from "@/components/shared/navbar";
import AuthLeftSide from "@/components/shared/auth-left-side";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Log in securely to your CHKR account.",
};

export default function LoginPage() {
  return (
    <>
    <div className="bg-gray-100">
      <Navbar
        buttonText="Sign Up"
        textBeforeButton="Don't have an account?"
        url="signup"
      />
      <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:mx-6 md:p-4">
        <AuthLeftSide
          heading1="YOUR HUB"
          heading2="FOR FINDING THE BEST"
          heading3="SERVICE PROVIDERS"
          url="/images/loginLeftSide.jpg"
        />
        <Login />
      </div>
      </div>
    </>
  );
}


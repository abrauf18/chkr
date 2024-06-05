import ForgetPassword from "@/components/modules/auth/forget-password";
import Navbar from "@/components/shared/navbar";
import AuthLeftSide from "@/components/shared/auth-left-side";
import { Metadata } from "next";
import { Suspense } from "react";
import Loader from "@/components/shared/loader";

export const metadata: Metadata = {
  title: "Forgot Password",
  description:
    "Forgot your password? Enter your email address and we'll guide you through the recovery process.",
};

export default function page() {
  return (
    <>
      <Navbar
        buttonText="Register Now"
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
        <Suspense fallback={<Loader size={12} />}>
          <ForgetPassword />
        </Suspense>
      </div>
    </>
  );
}


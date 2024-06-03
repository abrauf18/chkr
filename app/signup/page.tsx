import Signup from "@/components/modules/auth/signup";
import Navbar from "@/components/shared/navbar";
import AuthLeftSide from "@/components/shared/auth-left-side";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for a free account today",
};


export default function SignupPage() {
  return (
    <>
    <div className="bg-gray-100">
      <Navbar buttonText="Sign In"
        textBeforeButton="Already have an account?"
        url="login" />
      <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:mx-6 md:p-4">
        <AuthLeftSide
          heading1="YOUR GATEWAY"
          heading2="TO EXCEPTIONAL"
          heading3="SERVICE PROVIDERS"
          url="/images/SignUpLeftSide.svg"
        />
        <Signup />
      </div>
      </div>
    </>
  );
}


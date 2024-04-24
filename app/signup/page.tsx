import Signup from "@/components/modules/auth/signup";
import Navbar from "@/components/shared/navbar";
import AuthLeftSide from "@/components/shared/auth-left-side";
import leftSideImg from "@/assets/images/SignUpLeftSide.svg";

export default function SignupPage() {
  return (
    <>
      <Navbar buttonText="Login" textBeforeButton="Already have an account?" />
      <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:mx-6 md:p-4">
        <AuthLeftSide
          heading1="YOUR GATEWAY"
          heading2="TO EXCEPTIONAL"
          heading3="SERVICE PROVIDERS"
          url={leftSideImg}
        />
        <Signup />
      </div>
    </>
  );
}


import Signup from "@/app/components/modules/auth/Signup";
import AuthLeftSide from "@/app/components/shared/AuthLeftSide";

export default function SignupPage() {
  return (
    <>
      <AuthLeftSide
        heading1="YOUR GATEWAY"
        heading2="TO EXCEPTIONAL"
        heading3="SERVICE PROVIDERS"
      />
      <Signup />;
    </>
  );
}

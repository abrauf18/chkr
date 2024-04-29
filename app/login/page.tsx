import Login from "@/components/modules/auth/login";
import Navbar from "@/components/shared/navbar";
import AuthLeftSide from "@/components/shared/auth-left-side";

export default function LoginPage() {
  return (
    <>
      <Navbar
        buttonText="Register Now"
        textBeforeButton="Don't have an account?"
        Link="signup"
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
    </>
  );
}


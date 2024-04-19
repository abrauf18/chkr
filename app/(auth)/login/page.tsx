import Login from "@/app/components/modules/auth/Login";
import AuthLeftSide from "@/app/components/shared/AuthLeftSide";

export default function LoginPage() {
  return (
    <>
      <AuthLeftSide
        heading1="YOUR HUB"
        heading2="FOR FINDING THE BEST"
        heading3="SERVICE PROVIDERS"
      />
      <Login />;
    </>
  );
}

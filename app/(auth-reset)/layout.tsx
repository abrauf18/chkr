import Navbar from "@/app/components/shared/Navbar";
import React from "react";
import AuthLeftSide from "@/app/components/shared/AuthLeftSide";
import leftSideImg from "@/app/assets/images/loginLeftSide.jpg";


const ResetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar buttonText="Login" textBeforeButton="Already have an account?" />
      <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:mx-6 md:p-4">
        <AuthLeftSide
          heading1="YOUR HUB"
          heading2="FOR FINDING THE BEST"
          heading3="SERVICE PROVIDERS"
          url={leftSideImg}
        />
        {children}
      </div>
    </main>
  );
};
export default ResetLayout;

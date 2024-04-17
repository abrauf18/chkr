import AuthLeftSide from "@/app/components/shared/AuthLeftSide";
import Navbar from "@/app/components/shared/Navbar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className=" md:grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:mx-6 md:p-4">
        <AuthLeftSide
          heading1="YOUR GATEWAY"
          heading2="TO EXCEPTIONAL"
          heading3="SERVICE PROVIDERS" />
        {children}
      </div>
    </main>
  );
};
export default AuthLayout;

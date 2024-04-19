import Navbar from "@/app/components/shared/Navbar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div >
        {children}
      </div>
    </main>
  );
};
export default AuthLayout;

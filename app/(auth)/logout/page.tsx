"use client";

import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

function LogoutPage() {
  useEffect(() => {
    signOut({
      redirect: true,
      callbackUrl: "/login",
    });
  }, []);
  return <div></div>;
}

export default LogoutPage;


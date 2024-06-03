import React from "react";
import Settings from "@/components/shared/settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile settings on CHKR"
};

export default function page() {
  return <Settings isAdmin />;
}


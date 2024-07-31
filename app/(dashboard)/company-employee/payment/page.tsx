import { AccountDetails } from "@/actions/payment/payment-action";
import Payments from "@/components/modules/company-employee/payment/payments";
import DashboardHeader from "@/components/shared/dashboard-header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Payments",
  description:
    "Track your earnings, view payment history, and manage your payment details on CHKR sfrom the company-employee/payments page.",
};

export default async function page() {
  const results = await AccountDetails();
  return (
    <>
      <DashboardHeader title="Payments" />
      <Payments results={results} />
    </>
  );
}


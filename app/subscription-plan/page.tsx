import React from "react";
import SubscriptionPlan from "@/components/modules/onboarding/subscription-plan";
import Navbar from "../../components/shared/navbar";

export default function page() {
  return (
    <>
      <Navbar buttonText="Login " textBeforeButton="Already have an account" Link="login" />
      <SubscriptionPlan />
    </>
  );
}


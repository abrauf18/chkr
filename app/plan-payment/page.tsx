import React from "react";
import SubscriptionPlanPayment from "../../components/modules/onboarding/plan-payment";
import Navbar from "../../components/shared/navbar";

export default function page() {
  return (
    <>
      <Navbar buttonText="Login " textBeforeButton="Already have an account" />
      <SubscriptionPlanPayment />
    </>
  );
}


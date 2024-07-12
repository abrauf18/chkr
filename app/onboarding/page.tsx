import OnboardingSteps from "@/components/modules/company-admin/onboarding/onboarding";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Complete our personalized onboarding and unlock the full potential of CHKR",
};


const OnboardingPage = () => {
  return <OnboardingSteps />;
};

export default OnboardingPage;


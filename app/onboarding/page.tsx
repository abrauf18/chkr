"use client";

import React from "react";
import CompanyInformation from "@/components/modules/onboarding/company-information";
import Navbar from "@/components/shared/navbar";
import useOnboardingStore, { Steps } from "@/store/onboarding-store";
import SubscriptionPlan from "@/components/modules/onboarding/subscription-plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Onboarding, OnboardingSchema } from "@/lib/types";

export default function OnboardingPage() {
  const { currentStep, setCurrentStep, onboardingData, setOnboardingData } =
    useOnboardingStore();
  const handleNextStep = () => {
    switch (currentStep) {
      case Steps.COMPANY_DETAILS:
        setCurrentStep(Steps.PLAN);
        break;
      case Steps.PLAN:
        setCurrentStep(Steps.COMPANY_DETAILS);
        break;
      default:
        setCurrentStep(Steps.COMPANY_DETAILS);
        break;
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case Steps.COMPANY_DETAILS:
        return <CompanyInformation handleNextStep={handleNextStep} />;
      case Steps.PLAN:
        return (
          <SubscriptionPlan
          // handleNextStep={handleNextStep}
          />
        );
      default:
        return null;
    }
  };
  const methods = useForm({
    resolver: zodResolver(OnboardingSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: onboardingData,
  });
  const onSubmit = (data: Onboarding) => {
    console.log(data);
  };
  return (
    <>
      <Navbar
        buttonText="Login "
        textBeforeButton="Already have an account"
        Link="/login"
      />
      <FormProvider {...methods}>
        <form id="onboarding-form" onSubmit={methods.handleSubmit(onSubmit)}>
          {renderStep()}
        </form>
      </FormProvider>
    </>
  );
}


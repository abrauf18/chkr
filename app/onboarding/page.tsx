"use client";

import React from "react";
import CompanyInformation from "@/components/modules/onboarding/company-information";
import Navbar from "@/components/shared/navbar";
import useOnboardingStore, { Steps } from "@/store/onboarding-store";
import SubscriptionPlan from "@/components/modules/onboarding/subscription-plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Onboarding, OnboardingSchema } from "@/lib/types";
import Company from "@/assets/icons/company-icon";

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

  const handlePreviousStep = () => {
    setCurrentStep(Steps.COMPANY_DETAILS);
  };
  const renderStep = () => {
    switch (currentStep) {
      case Steps.COMPANY_DETAILS:
        return <CompanyInformation handleNextStep={handleNextStep} />;
      case Steps.PLAN:
        return (
          <SubscriptionPlan
            // handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
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
        url="/login"
      />
      <div className="flex flex-col justify-center items-center my-10 mx-20">
        <h1 className="font-semibold lg:text-2xl md:text-3xl text-2xl text-center">
          Welcome Aboard! Let's Complete Your Profile.
        </h1>
        <p className="lg:text-lg md:text-lg md:font-medium text-center text-gray-400 mt-6">
          Please Provide required Information about your company
        </p>
        <div className="flex flex-col md:flex-row mt-10 gap-6 text-lg">
          <div className="flex items-center ">
            <Company className="w-[4rem] h-[4rem]" />
            <span>Company Information</span>
          </div>
          <div className="flex items-center ">
            <Company className="w-[4rem] h-[4rem]" />
            <span className="text-gray-400">Subscription Plan</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <FormProvider {...methods}>
          <form
            id="onboarding-form"
            onSubmit={methods.handleSubmit(onSubmit)}
            className="md:w-[70%] bg-white w-[90%] shadow-md rounded-3xl md:px-8 pt-6 pb-8 my-10"
          >
            {renderStep()}
          </form>
        </FormProvider>
      </div>
    </>
  );
}


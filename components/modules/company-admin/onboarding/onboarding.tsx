"use client";

import React from "react";
import CompanyInformation from "@/components/modules/company-admin/onboarding/company-information";
import useOnboardingStore, { Steps } from "@/store/onboarding-store";
import SubscriptionPlan from "@/components/modules/company-admin/onboarding/subscription-plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Onboarding, OnboardingSchema } from "@/lib/types";
import PlanIcon from "@/assets/icons/plan-icon";
import CompanyBuilding from "@/assets/icons/company-building";
import clsx from "clsx";

export default function OnboardingSteps() {
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
      <div className="flex flex-col justify-center items-center mt-10 mx-20">
        <h1 className="font-semibold lg:text-2xl md:text-3xl text-2xl text-center">
          Welcome Aboard! Let's Complete Your Profile.
        </h1>
        <p className="lg:text-lg md:text-lg md:font-medium text-center text-gray-400 mt-6">
          Please Provide required Information about your company
        </p>
        <div className="flex flex-col md:flex-row mt-8 gap-6 text-lg">
          <div className="flex items-center ">
            <div
              className={clsx(
                "h-14 w-14 rounded-full relative",
                currentStep === Steps.COMPANY_DETAILS
                  ? "bg-primary"
                  : "bg-white"
              )}
            >
              <CompanyBuilding
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                color={
                  currentStep === Steps.COMPANY_DETAILS ? "white" : "#FF2600"
                }
              />
            </div>
            <span
              className={clsx(
                currentStep === Steps.COMPANY_DETAILS
                  ? "text-black"
                  : "text-gray-400",
                "ml-2"
              )}
            >
              Company Information
            </span>
          </div>
          <div className="flex items-center ">
            <div
              className={clsx(
                "h-14 w-14 rounded-full relative",
                currentStep === Steps.COMPANY_DETAILS
                  ? "bg-white"
                  : "bg-primary"
              )}
            >
              <PlanIcon
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                color={
                  currentStep === Steps.COMPANY_DETAILS ? "#FF2600" : "white"
                }
              />
            </div>
            <span
              className={clsx(
                currentStep === Steps.PLAN ? "text-black" : "text-gray-400",
                "ml-2"
              )}
            >
              Subscription Plan
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <FormProvider {...methods}>
          <form
            id="onboarding-form"
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex items-center justify-center w-[90%] md:w-[60%] bg-white shadow-md rounded-3xl md:px-8 pt-6 pb-8 my-10"
          >
            {renderStep()}
          </form>
        </FormProvider>
      </div>
    </>
  );
}


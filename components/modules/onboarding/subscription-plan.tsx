import React from "react";
import PlanIcon from "@/assets/icons/plan-icon";
import CompanyInfoWhite from "@/assets/icons/companyinfo-icon";
import Link from "next/link";
import PlanCard from "./plan-card";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useOnboardingStore from "@/store/onboarding-store";

const SubscriptionPlan = ({
  handlePreviousStep,
}: {
  handlePreviousStep: () => void;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  return (
    <div className="flex flex-col justify-center items-center my-20 mx-10">
      <div className="flex flex-col md:w-[60%] w-full justify-center items-center">
        <div className="bg-white w-full shadow-md rounded-3xl px-8 pt-6 pb-8 my-10 gap-6">
          <div>
            <input
              type="radio"
              placeholder="Monthly Plan"
              id="montly-plan"
              value="monthly"
              defaultChecked={onboardingData.plan === "monthly"}
              {...register("plan")}
            />
            <label htmlFor="montly-plan">Montly Plan</label>
          </div>
          <div>
            <input
              type="radio"
              placeholder="Yearly Plan"
              id="yearly-plan"
              value="yearly"
              {...register("plan")}
            />
            <label htmlFor="yearly-plan">Yearly Plan</label>
          </div>
          <p className="text-sm text-red-500">
            {" "}
            <ErrorMessage errors={errors} name="plan" />
          </p>
          {/* <PlanCard
            title="Monthly Plan"
            price={189.0}
            features={[
              " Curabitur pulvinar nunc nisl, vitae  orci pellentesque.",
              "Curabitur pulvinar nunc orci pellentesque.",
              "Curabitur pulvinar  pellentesque.",
            ]}
            timePeriod="month"
          />
          <PlanCard
            title="Yearly Plan"
            price={699.0}
            features={[
              " Curabitur pulvinar nunc nisl, vitae  orci pellentesque.",
              "Curabitur pulvinar nunc orci pellentesque.",
              "Curabitur pulvinar  pellentesque.",
            ]}
            timePeriod="year"
          /> */}
        </div>
        <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-6">
          <button
            className="w-full lg:w-[10rem] bg-gray-300 font-medium py-3 px-10 rounded-3xl"
            type="button"
            onClick={handlePreviousStep}
          >
            Previous
          </button>
          <button
            className="w-full lg:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
            type="submit"
            id="onboarding-form"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;


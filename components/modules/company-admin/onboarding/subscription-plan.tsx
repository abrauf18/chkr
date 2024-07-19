import React, { useEffect, useState } from "react";
import PlanCard from "./plan-card";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useOnboardingStore from "@/store/onboarding-store";
import { PlanInterface } from "@/lib/interfaces";
import {
  ConfirmPlanAction,
  PlansAction,
} from "@/actions/payment/payment-action";
import Loader from "@/components/shared/loader";
import { useRouter } from "next/navigation";

const SubscriptionPlan = ({
  handlePreviousStep,
}: {
  handlePreviousStep: () => void;
}) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { onboardingData } = useOnboardingStore();
  const [plans, setPlans] = useState<PlanInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const response = await PlansAction();
        setPlans(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const getTimePeriod = (productName: string) => {
    if (productName.toLowerCase().includes("monthly")) {
      return "month";
    } else if (productName.toLowerCase().includes("yearly")) {
      return "year";
    }
    return "";
  };

  const handleNextClick = async () => {
    try {
      setIsLoading(true);
      const selectedPlanId = getValues("plan");
      const result = await ConfirmPlanAction(selectedPlanId);
      router.push(result);
    } catch (error) {
      console.error("Error confirming plan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {isLoading ? (
        <div className="flex items-center justify-center h-96">
          <Loader />
        </div>
      ) : (
        <>
          <div className="bg-white w-full shadow-md rounded-3xl px-8 pt-2 pb-8 my-10 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex items-baseline hover:border-2 p-2 hover:rounded-3xl hover:border-primary focus:border-2 focus:border-primary"
              >
                <input
                  type="radio"
                  placeholder={plan.plan_type}
                  id={`plan-${plan.id}`}
                  value={plan.id}
                  defaultChecked={onboardingData.plan === plan.plan_type}
                  {...register("plan")}
                />
                <PlanCard
                  title={plan.productName}
                  price={plan.price}
                  timePeriod={getTimePeriod(plan.productName)}
                  features={[]}
                  description={plan.productDescription}
                />
              </div>
            ))}
            <p className="text-sm text-red-500">
              <ErrorMessage errors={errors} name="plan" />
            </p>
          </div>
          <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-6 px-4">
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
              disabled={getValues("loading")}
              onClick={(e) => {
                e.preventDefault();
                handleNextClick();
              }}
            >
              {getValues("loading") ? <Loader size={6} /> : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SubscriptionPlan;


import React, { useEffect, useState } from "react";
import PlanCard from "./plan-card";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useOnboardingStore from "@/store/onboarding-store";
import { PlanInterface } from "@/lib/interfaces";
import { OnboardingAction, PlanAction } from "@/actions/onboard/onboard-action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SubscriptionPlan = ({
  handlePreviousStep,
}: {
  handlePreviousStep: () => void;
}) => {
  const {
    register,
    reset,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { onboardingData, removeOnboardingData } = useOnboardingStore();
  const [plans, setPlans] = useState<PlanInterface[]>([]);
  const { push } = useRouter();
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response: PlanInterface[] = await PlanAction();
        const detailedPlans = response.map((plan) => ({
          ...plan,
          features: [
            "Curabitur pulvinar nunc nisl, vitae orci pellentesque.",
            "Curabitur pulvinar nunc orci pellentesque.",
            "Curabitur pulvinar pellentesque.",
          ],
          timePeriod: plan.plan_type === "monthly" ? "month" : "year",
        }));
        setPlans(detailedPlans);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };
    fetchPlans();
  }, []);

  const changeNextStep = async () => {
    const isValid = await trigger([
      "company-name",
      "company-type",
      "phone-number",
      "location",
      "country",
      "logo",
      "plan",
    ]);
    if (isValid) {
      const data = getValues([
        "company-name",
        "company-type",
        "phone-number",
        "location",
        "country",
        "logo",
        "plan",
      ]);

      const formData = new FormData();
      formData.set("company_name", data[0]),
        formData.set("firm_id", data[1]),
        formData.set("phone_number", data[2]),
        formData.set("location", data[3]),
        formData.set("country", data[4]),
        formData.set("plan_id", data[6]);

      const logoFileList = data[5];
      if (logoFileList instanceof FileList && logoFileList.length > 0) {
        formData.set("file", logoFileList[0]);
      }
      try {
        const result = await OnboardingAction(formData);
        if (result.statusCode === 201) {
          toast.success(result.message);
          return push("/company-admin/dashboard");
        }
        reset();
        removeOnboardingData();
        return toast.error(result.message);
      } catch (error) {
        console.error("Error storing company information:", error);
      }
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
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
              title={
                plan.plan_type === "monthly" ? "Monthly Plan" : "Yearly Plan"
              }
              price={plan.amount}
              features={plan.features}
              timePeriod={plan.timePeriod}
            />
          </div>
        ))}
        <p className="text-sm text-red-500">
          {" "}
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
          onClick={changeNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;


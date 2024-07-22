"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlanInterface } from "@/lib/interfaces";
import { PlansAction } from "@/actions/payment/payment-action";
import Loader from "./loader";
import PlanCard from "../modules/company-admin/onboarding/plan-card";
import { usePathname } from "next/navigation";
import { OctagonAlert } from "lucide-react";

export default function StripePlans() {
  const [plans, setPlans] = useState<PlanInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const response = await PlansAction();
        setPlans(response);
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

  return (
    <Dialog>
      <DialogTrigger>Stripe Plans</DialogTrigger>
      <DialogContent className="bg-white md:max-w-[80%] lg:max-w-[65%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader className="flex flex-col gap-3 items-center justify-center">
          <DialogTitle>
            {pathname.startsWith("/company-admin") ? (
              <p> Connect with Stripe</p>
            ) : (
              <></>
            )}
          </DialogTitle>
          <DialogDescription>
            {pathname.startsWith("/company-admin") ? (
              <p> Please complete your payment process to onboard.</p>
            ) : (
              <></>
            )}
          </DialogDescription>
        </DialogHeader>
        {pathname.startsWith("/company-admin") ? (
          <div className="flex flex-col w-full justify-center items-center">
            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <Loader />
              </div>
            ) : (
              <>
                <div>
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className="flex items-baseline hover:border-2 p-2 hover:rounded-3xl hover:border-primary focus:border-2 focus:border-primary"
                    >
                      <input
                        type="radio"
                        className="cursor-pointer"
                        placeholder={plan.plan_type}
                        id={`plan-${plan.id}`}
                        value={plan.id}
                        // defaultChecked={onboardingData.plan === plan.plan_type}
                        // {...register("plan")}
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
                  {/* <p className="text-sm text-red-500">
                  <ErrorMessage errors={errors} name="plan" />
                </p> */}
                  <div className="flex items-center justify-center ">
                    <button
                      className="w-full lg:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
                      type="submit"
                      // id="onboarding-form"
                      // disabled={getValues("loading")}
                    >
                      Submit
                      {/* {getValues("loading") ? <Loader size={6} /> : "Next"} */}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center mb-7">
            <OctagonAlert size={100} color="#FF2600" />
            <p className="text-center text-gray-500">
              Your company admin has not subscribed to any payment plan, so you
              cannot proceed to jobs.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}


"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PlanCard from "../modules/company-admin/onboarding/plan-card";
import Loader from "./loader";
import { usePathname, useRouter } from "next/navigation";
import { OctagonAlert } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlanInterface } from "@/lib/interfaces";
import {
  CancelSubscription,
  ConfirmPlanAction,
  PlansAction,
  UpdateSubscription,
} from "@/actions/payment/payment-action";
import { ErrorMessage } from "@hookform/error-message";
import { stripePlanySchema } from "@/lib/types";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { toast } from "react-toastify";

export default function StripePlans({
  open,
  setOpen,
  isView,
}: {
  open: boolean;
  setOpen?: (value: boolean) => void;
  isView?: boolean;
}) {
  const [plans, setPlans] = useState<PlanInterface>();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const pathname = usePathname();
  const session: any = useSession();
  const { push } = useRouter();

  const methods = useForm({
    resolver: zodResolver(stripePlanySchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const response = await PlansAction(isView);
        setPlans(response);
        if (response.plans.length > 0) {
          setValue("plan", response.plans[0].id.toString()); // Set default value
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlans();
  }, [setValue]);

  const onSubmit = async (data: any) => {
    try {
      setButtonLoader(true);
      if (isView) {
        const planType = plans?.plans.find((plan) => plan.id === data?.plan);
        const result = await UpdateSubscription(
          data?.plan,
          planType?.productName || ""
        );
        if (result?.statusCode === 200) {
          setOpen && setOpen(false);
          return toast.success(result?.message);
        }
      } else {
        const url = await ConfirmPlanAction({
          productId: data.plan,
          companyId: session.data.user.company_id,
        });
        return push(url);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setButtonLoader(false);
    }
  };

  const handleCancelSubscription = async () => {
    const result = await CancelSubscription();
    if (result?.statusCode === 200) {
      toast.success(result?.message);
      return push("/logout");
    }
    return toast.error(result?.message);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white md:max-w-[80%] lg:max-w-[65%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader className="flex flex-col gap-2 items-center justify-center">
          <DialogTitle>
            {pathname.startsWith("/company-admin") ? (
              isView ? (
                <p>
                  Current Plan:{" "}
                  {plans ? plans?.company["plan.plan_type"] : "loading..."}
                </p>
              ) : (
                <p>Connect with Stripe</p>
              )
            ) : (
              <></>
            )}
          </DialogTitle>
          <DialogDescription>
            {pathname.startsWith("/company-admin") ? (
              <>
                {isView ? (
                  <p>You can upgrade/downgrade, and cancel subscription</p>
                ) : (
                  <p>Please complete your payment process to onboard.</p>
                )}
              </>
            ) : (
              <></>
            )}
          </DialogDescription>
        </DialogHeader>
        {pathname.startsWith("/company-admin") ? (
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-col w-full justify-center items-center">
                {isLoading ? (
                  <div className="flex items-center justify-center h-96">
                    <Loader />
                  </div>
                ) : (
                  <>
                    <div className="bg-white w-full shadow-md rounded-3xl px-8 pt-2 pb-8 my-2 gap-6">
                      {plans?.plans?.map((plan: any) => (
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
                            {...register("plan")}
                          />
                          <PlanCard
                            title={plan.productName}
                            price={plan.price}
                            description={plan.productDescription}
                          />
                        </div>
                      ))}
                      <p className="text-sm text-red-500">
                        <ErrorMessage errors={errors} name="plan" />
                      </p>
                    </div>
                    <div
                      className={clsx("flex items-center w-full mt-4 gap-2", {
                        "justify-center": !isView,
                        "justify-between": isView,
                      })}
                    >
                      {isView && (
                        <button
                          className="w-full lg:w-1/3 bg-gray-200 text-black font-medium py-3 px-10 rounded-3xl"
                          type="button"
                          onClick={handleCancelSubscription}
                        >
                          Cancel Subscription
                        </button>
                      )}
                      <button
                        className={clsx(
                          "bg-primary text-white font-medium py-3 px-10 rounded-3xl",
                          {
                            "w-full lg:w-1/3": isView,
                            "w-[10rem]": !isView,
                          }
                        )}
                        type="submit"
                        disabled={buttonLoader}
                      >
                        {buttonLoader ? (
                          <Loader size={6} />
                        ) : isView ? (
                          "Upgrade/Downgrade"
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </FormProvider>
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


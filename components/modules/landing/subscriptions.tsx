"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PlanCard from "./plan-card";
import clsx from "clsx";
import Link from "next/link";

// Define enum for plans
enum Plan {
  Monthly = "Monthly",
  Annually = "Annually",
}

const Subscriptions = () => {
  const [activeButton, setActiveButton] = useState<Plan>(Plan.Monthly); // Update state type

  const handleButtonClick = (buttonName: Plan) => {
    // Update argument type
    setActiveButton(buttonName);
  };

  return (
    <div id="subscription" className="bg-white mb-12">
      <div className="flex flex-col xl:mx-24 md:mx-10 justify-center items-center gap-6 mt-32">
        <h1 className="xl:font-semibold text-5xl md:font-semibold text-center">
          Our Subscriptions
        </h1>
        <p className="lg:text-2xl font-normal text-[#232324] text-center mb-4">
          Empower your business with seamless employee management and tracking.
        </p>
        <div className="flex gap-2 bg-gray-200 p-2 rounded-3xl">
          <Button
            className={clsx("w-[7rem] py-4", {
              "bg-primary text-white": activeButton === Plan.Monthly,
              "bg-transparent text-black": activeButton !== Plan.Monthly,
              "hover:bg-primary hover:text-white":
                activeButton === Plan.Monthly,
              "rounded-3xl": true,
            })}
            onClick={() => handleButtonClick(Plan.Monthly)}
          >
            Monthly
          </Button>
          <Button
            className={clsx("w-[7rem] py-4", {
              "bg-primary text-white": activeButton === Plan.Annually,
              "bg-transparent text-black": activeButton !== Plan.Annually,
              "hover:bg-primary hover:text-white":
                activeButton === Plan.Annually,
              "rounded-3xl": true,
            })}
            onClick={() => handleButtonClick(Plan.Annually)}
          >
            Annually
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 md:mx-24 xl:mx-36 gap-6 my-16">
        <Link href="/login">
          <PlanCard
            monthlyHeading="Standard Plan"
            monthlyPrice="$99.99 per month"
            buttonText="Buy Standard Subscription Plan"
            description="Maximum of 10 users in a company"
          />
        </Link>
        <Link href="/login">
          <PlanCard
            monthlyHeading="Premium Plan"
            monthlyPrice="$124.99 per month"
            buttonText="Buy Premium Subscription Plan"
            description="Unlimited users in a company"
          />
        </Link>
      </div>
    </div>
  );
};

export default Subscriptions;


import React from "react";
import PlanCard from "./plan-card";
import Link from "next/link";

const Subscriptions = () => {
  return (
    <div id="subscription" className="bg-white mb-12">
      <div className="flex flex-col xl:mx-24 md:mx-10 justify-center items-center gap-6 mt-32">
        <h1 className="xl:font-semibold text-5xl md:font-semibold text-center">
          Our Subscriptions
        </h1>
        <p className="lg:text-2xl font-normal text-[#232324] text-center mb-4">
          Empower your business with seamless employee management and tracking.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 md:mx-24 xl:mx-36 gap-6 my-16">
        <Link href="/login">
          <PlanCard
            monthlyHeading="Standard Plan"
            monthlyPrice="$99.99 per month"
            buttonText="Buy Standard Subscription Plan"
            description="Maximum of 10 users in a Company"
          />
        </Link>
        <Link href="/login">
          <PlanCard
            monthlyHeading="Premium Plan"
            monthlyPrice="$124.99 per month"
            buttonText="Buy Premium Subscription Plan"
            description="Unlimited users in a Company"
          />
        </Link>
      </div>
    </div>
  );
};

export default Subscriptions;


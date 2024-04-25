import React from "react";
import Image from "next/image";
import SubscriptionIcon from "@/assets/icons/subPlanOrange";
import CompanyInfoWhite from "@/assets/icons/CompanyInfoWhite";
import Link from "next/link";
import PlanCard from "./plan-card";

const SubscriptionPlan = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 mx-10">
      <h1 className="font-semibold lg:text-2xl md:text-3xl text-2xl text-center">
        Welcome Aboard! Let's Complete Your Profile.
      </h1>
      <p className="lg:text-lg md:text-lg md:font-medium text-center text-gray-400 mt-6">
        Select Subscription Plan Which Suits Best for you!
      </p>
      <div className="flex flex-col md:flex-row mt-10 gap-6 text-lg">
        <div className="flex items-center ">
          <CompanyInfoWhite className="w-[4rem] h-[4rem]" />
          <span>Company Information</span>
        </div>
        <div className="flex items-center ">
          <SubscriptionIcon className="w-[4rem] h-[4rem]" />
          <span className="text-gray-400">Subscription Plan</span>
        </div>
      </div>
      <div className="flex flex-col md:w-[60%] w-full justify-center items-center">
        <div className="bg-white w-full shadow-md rounded-3xl px-8 pt-6 pb-8 my-10 gap-6">
          <PlanCard
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
          />
        </div>
        <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-6">
          <button
            className="w-full lg:w-[10rem] bg-gray-300 font-medium py-3 px-10 rounded-3xl"
            type="submit"
          >
            Cancel
          </button>
          <Link href="/plan-payment">
            <button
              className="w-full lg:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
              type="submit"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;


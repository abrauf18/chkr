import React from "react";
import Image from "next/image";
import SubscriptionIcon from "@/assets/icons/subscriptionPlan";
import Company from "@/assets/icons/Company";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import UploadIcon from "@/assets/icons/upload";
import User from "@/assets/icons/user";
import BuildingIcon from "@/assets/icons/BuildingIcon";
import Phone from "@/assets/icons/phone";
import Location from "@/assets/icons/location";

const CompanyInformation = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 mx-10">
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
          <SubscriptionIcon className="w-[4rem] h-[4rem]" />
          <span className="text-gray-400">Subscription Plan</span>
        </div>
      </div>
      <div className="flex flex-col md:w-[60%] w-full justify-center items-center">
        <form className="bg-white w-full shadow-md rounded-3xl px-8 pt-6 pb-8 my-10">
          <div className="mb-4">
            <Label
              htmlFor="companyName"
              className="md:text-lg text-sm font-semibold"
            >
              Upload Logo
            </Label>
            <div className="w-full h-40 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center">
              <Button className="bg-transparent">
                <UploadIcon className="w-8 h-8" />
              </Button>
              <h5 className="text-lg font-medium mt-3 text-gray-700">
                Upload Logo
              </h5>
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="companyName"
              className="md:text-lg text-sm font-semibold"
            >
              Company Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <User />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="companyName"
                type="text"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="companyType"
              className="md:text-lg text-sm font-semibold"
            >
              Company Type
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <BuildingIcon />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="companyType"
                type="text"
                placeholder="Company Type"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label htmlFor="phone" className="md:text-lg text-sm font-semibold">
              Phone Number
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Phone />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="phone"
                type="text"
                placeholder="+123 456 789"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="location"
              className="md:text-lg text-sm font-semibold"
            >
              Location
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Location />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="location"
                type="text"
                placeholder="abc Road, xyz Town"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="location"
              className="md:text-lg text-sm font-semibold"
            >
              Location
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Location />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="country"
                type="text"
                placeholder="Country Name"
              />
            </div>
          </div>
        </form>
        <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-6">
          <button
            className="w-full lg:w-[10rem] bg-gray-300 font-medium py-3 px-10 rounded-3xl"
            type="submit"
          >
            Cancel
          </button>
          <button
            className="w-full lg:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;


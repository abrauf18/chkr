"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import User from "@/assets/icons/user-icon";
import BuildingIcon from "@/assets/icons/building-icon";
import Phone from "@/assets/icons/phone-icon";
import Location from "@/assets/icons/location-icon";
import Upload from "@/assets/icons/upload-icon";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useOnboardingStore from "@/store/onboarding-store";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const countries = [
  "USA",
  "Canada",
  "UK",
  "Australia",
  "Pakistan",
  "Germany",
  "India",
];
const companyTypes = ["Type A", "Type B", "Type C", "Type D"]; // Example list of company types

const CompanyInformation = ({
  handleNextStep,
}: {
  handleNextStep: () => void;
}): JSX.Element => {
  const { setOnboardingData } = useOnboardingStore();
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();
  const changeNextStep = async () => {
    const isValid = await trigger([
      "company-name",
      "company-type",
      "phone-number",
      "location",
      "country",
      "video",
    ]);
    if (isValid) {
      const data = getValues([
        "company-name",
        "company-type",
        "phone-number",
        "location",
        "country",
        "logo",
      ]);
      setOnboardingData({
        "company-name": data[0],
        "company-type": data[1],
        "phone-number": data[2],
        location: data[3],
        country: data[4],
        logo: data[5],
        plan: "monthly",
      });
      handleNextStep();
    }
  };
  return (
    <div className="flex flex-col justify-center items-center my-10 mx-10">
      <div className="mb-4 w-full">
        <label
          htmlFor="fileInput"
          className="md:text-lg text-sm font-semibold w-full"
        >
          Upload Logo
          <input
            type="file"
            id="fileInput"
            accept=".pdf, .jpg, .jpeg, .png, .gif"
            {...register("logo")}
            className="hidden"
          />
          <div className="w-full h-40 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center mt-4">
            <Upload width={30} height={30} />
            <span className="text-sm font-medium mt-3">Upload Logo</span>
          </div>
        </label>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="logo" />
        </p>
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
            {...register("company-name")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="company-name" />
        </p>
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
          <select
            id="companyType"
            {...register("company-type")}
            className="w-full pl-10 pr-10 py-2 bg-[#F9F8F8] border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:border-2 appearance-none"
          >
            <option value="">Select Company Type</option>
            {companyTypes.map((companyTypes) => (
              <option key={companyTypes} value={companyTypes}>
                {companyTypes}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown />
          </div>
          {/* <Input
            className="pl-10 bg-[#F9F8F8]"
            id="companyType"
            type="text"
            placeholder="Company Type"
            {...register("company-type")}
          /> */}
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="company-type" />
        </p>
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
            {...register("phone-number")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="phone-number" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="location" className="md:text-lg text-sm font-semibold">
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
            {...register("location")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="location" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="location" className="md:text-lg text-sm font-semibold">
          Country
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <Location />
          </span>
          <select
            id="country"
            {...register("country")}
            className="w-full pl-10 pr-12 py-2 bg-[#F9F8F8] border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:border-2 appearance-none"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
        <p className="text-sm text-red-500">
          <ErrorMessage errors={errors} name="country" />
        </p>
      </div>

      <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-4 px-4 md:px-0">
        <Link href="/" className="hover:text-primary">
          <button
            className="w-full bg-gray-300 font-medium py-3 px-10 rounded-3xl whitespace-nowrap	"
            type="button"
          >
            Back to Home
          </button>
        </Link>
        <button
          className="w-full lg:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
          type="button"
          onClick={changeNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CompanyInformation;


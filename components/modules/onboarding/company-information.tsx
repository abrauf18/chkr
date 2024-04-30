import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import User from "@/assets/icons/user-icon";
import BuildingIcon from "@/assets/icons/building-icon";
import Phone from "@/assets/icons/phone-icon";
import Location from "@/assets/icons/location-icon";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Upload } from "lucide-react";
import useOnboardingStore from "@/store/onboarding-store";

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
    <div className="flex flex-col justify-center items-center my-20 mx-10">
      <div>
        <label
          htmlFor="fileInput"
          className=" rounded-full bg-green-50 p-2 mb-2"
        >
          <input
            type="file"
            id="fileInput"
            accept=".pdf, .jpg, .jpeg, .png, .gif"
            {...register("logo")}
            className="hidden"
          />
          <Upload size={30} color="#7AA43E" />
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
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="companyType"
            type="text"
            placeholder="Company Type"
            {...register("company-type")}
          />
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
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="country"
            type="text"
            placeholder="Country Name"
            {...register("country")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="country" />
        </p>
      </div>
      <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-6">
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


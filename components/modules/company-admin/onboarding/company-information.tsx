"use client";
import React, { useEffect, useState } from "react";
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
import { ChevronDown, File } from "lucide-react";
import { CountryAction, FirmsAction } from "@/actions/onboard/onboard-action"; // Import the OnboardingAction
import { FirmInterface } from "@/lib/interfaces";

interface CompanyInformationProps {
  handleNextStep: () => void;
}

const CompanyInformation = ({
  handleNextStep,
}: CompanyInformationProps): JSX.Element => {
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const {
    register,
    trigger,
    watch,
    formState: { errors },
    getValues,
  } = useFormContext();
  const [companyTypes, setCompanyTypes] = useState<FirmInterface[]>([]);
  const [countries, setCountries] = useState([]);

  const changeNextStep = async () => {
    const isValid = await trigger([
      "logo",
      "company-name",
      "company-type",
      "phone-number",
      "location",
      "country",
    ]);
    if (isValid) {
      const data = getValues([
        "logo",
        "company-name",
        "company-type",
        "phone-number",
        "location",
        "country",
      ]);
      setOnboardingData({
        ...onboardingData,
        logo: data[0],
        "company-name": data[1],
        "company-type": data[2],
        "phone-number": data[3],
        location: data[4],
        country: data[5],
      });
      handleNextStep();
    }
  };

  useEffect(() => {
    const fetchCompanyTypes = async () => {
      try {
        const response: FirmInterface[] = await FirmsAction();
        setCompanyTypes(response);
      } catch (error) {
        console.error("Error fetching company types:", error);
      }
    };
    fetchCompanyTypes();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await CountryAction();
        setCountries(response);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const selectedFile = watch("logo");

  return (
    <div className="flex flex-col w-full justify-center items-center my-4 mx-10">
      <div className="mb-4 w-full">
        <label
          htmlFor="fileInput"
          className="md:text-lg text-sm font-semibold w-full"
        >
          Upload Logo
          <input
            type="file"
            id="fileInput"
            accept=".jpg, .jpeg, .png"
            {...register("logo")}
            className="hidden"
          />
          {!selectedFile ? (
            <div className="w-full h-40 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center mt-4 cursor-pointer">
              <Upload width={30} height={30} />
              <span className="text-sm font-medium mt-3">Upload Logo</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 h-20 w-full mt-4 rounded-2xl border-dashed border-2 border-gray-300 p-4">
              <File />
              {/* <Image src={URL.createObjectURL(selectedFile[0])} alt="logo" width={5} height={5} className="h-20 w-20"/> */}
              <span className="whitespace-nowrap text-sm">
                {selectedFile[0].name}
              </span>
            </div>
          )}
        </label>
        <p className="text-sm text-red-500 mt-1">
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
        <p className="text-sm text-red-500 mt-1">
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
            required
            id="companyType"
            {...register("company-type")}
            className="w-full pl-10 pr-10 py-2 bg-[#F9F8F8] text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:border-2 appearance-none"
          >
            <option className="text-gray-200 " disabled hidden value="">
              Select Company Type
            </option>
            {companyTypes?.map((companyType) => (
              <option
                key={companyType.id}
                value={companyType.id}
                selected={companyType.id === +onboardingData["company-type"]}
              >
                {companyType.firm_name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
        <p className="text-sm text-red-500">
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
        <p className="text-sm text-red-500 mt-1">
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
            placeholder="Abc Road, xyz Town"
            {...register("location")}
          />
        </div>
        <p className="text-sm text-red-500 mt-1">
          <ErrorMessage errors={errors} name="location" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="country" className="md:text-lg text-sm font-semibold">
          Country
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <Location />
          </span>
          <select
            required
            id="country"
            {...register("country")}
            className="w-full pl-10 pr-12 py-2 bg-[#F9F8F8] text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:border-2 appearance-none"
          >
            <option value="" disabled hidden>
              Select Country
            </option>
            {countries.map((country) => (
              <option
                key={country}
                value={country}
                selected={country === onboardingData["country"]}
              >
                {country}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
        <p className="text-sm text-red-500 mt-1">
          <ErrorMessage errors={errors} name="country" />
        </p>
      </div>

      <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-4 px-4 md:px-0">
        <button
          className="w-full mobile:w-[10rem] md:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
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


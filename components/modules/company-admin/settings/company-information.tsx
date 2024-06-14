"use client";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Label } from "@radix-ui/react-label";
import {
  MapPinned,
  User,
  BuildingIcon,
  ChevronDown,
  Phone,
} from "lucide-react";
import { SettingsCompanyInfoSchema, SettingsCompany } from "@/lib/types";
import { CountryAction, FirmsAction } from "@/actions/onboard/onboard-action";
import { EditCompanyInformationAction } from "@/actions/settings/settings-action";
import { FirmInterface } from "@/lib/interfaces";
import { toast } from "react-toastify";
import Loader from "@/components/shared/loader";
import clsx from "clsx";
import action from "@/app/action";
import { camelToSnakeCase } from "@/lib/utils";

export default function CompanyInformation({
  companyinfo,
  currentImage,
}: {
  companyinfo: {
    company_name: string;
    firm_name: string;
    phone_number: string;
    location: string;
    country: string;
    company_logo: string;
  };
  currentImage: string;
}) {
  const [defaultValues, setDefaultValues] = useState<SettingsCompany | null>(
    null
  );
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [companyTypes, setCompanyTypes] = useState<FirmInterface[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<SettingsCompany>({
    resolver: zodResolver(SettingsCompanyInfoSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const currentValues = useWatch({ control });

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

  useEffect(() => {
    const getUserData = async () => {
      try {
        setDefaultValues({
          companyName: companyinfo.company_name,
          companyType: companyinfo.firm_name,
          phoneNumber: companyinfo.phone_number,
          location: companyinfo.location,
          country: companyinfo.country,
        });
        reset({
          companyName: companyinfo.company_name,
          companyType: companyinfo.firm_name,
          phoneNumber: companyinfo.phone_number,
          location: companyinfo.location,
          country: companyinfo.country,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    getUserData();
  }, [reset]);

  const changedFields: any = {};
  const getChangedFields = (initialValues: any, currentValues: any) => {
    const changedFields: any = {};
    for (const key in initialValues) {
      if (
        initialValues[key] !== currentValues[key] &&
        currentValues[key] !== ""
      ) {
        changedFields[key] = currentValues[key];
      }
    }
    return changedFields;
  };

  const onSubmit = async (data: SettingsCompany) => {
    try {
      setIsLoading(true);
      const firmId = getFirmIdByName(data.companyType);
      if (!firmId) {
        throw new Error("Invalid company type");
      }
      const changedFields = getChangedFields(defaultValues, data);

      const formData = new FormData();
      Object.keys(changedFields).forEach((key) => {
        formData.append(camelToSnakeCase(key), changedFields[key]);
      });

      // Append firm_id instead of companyType
      formData.append("firm_id", firmId.toString());

      if (typeof currentImage !== "string") {
        formData.append("file", currentImage);
      } else if (currentImage !== companyinfo.company_logo) {
        formData.append("company_logo", currentImage);
      }
      const result = await EditCompanyInformationAction(formData);
      if (result.statusCode === 200) {
        action("userInfo");
        return toast.success(result.message);
      }
      return toast.error(result.message);
    } catch (error) {
      toast.error("Failed to update company information");
    } finally {
      setIsLoading(false);
    }
  };

  if (!defaultValues) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const getFirmIdByName = (firmName: string): number | undefined => {
    const firm = companyTypes.find((type) => type.firm_name === firmName);
    return firm ? firm.id : undefined;
  };

  const hasChanges =
    JSON.stringify(defaultValues) !== JSON.stringify(currentValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full justify-center items-center my-4">
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
            <input
              className="w-full p-3 pl-10 bg-neutral-100 rounded-2xl focus:outline-none"
              type="text"
              placeholder="Company Name"
              {...register("companyName")}
            />
          </div>
          <p className="text-sm text-red-500">
            <ErrorMessage errors={errors} name="companyName" />
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
              {...register("companyType")}
              className="w-full p-3 pl-10 bg-neutral-100 rounded-2xl focus:outline-none appearance-none"
            >
              <option value="">Select Company Type</option>
              {companyTypes?.map((companytype) => (
                <option
                  key={companytype.id}
                  value={companytype.firm_name}
                  selected={companytype.firm_name === defaultValues.companyType}
                >
                  {companytype.firm_name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown />
            </div>
          </div>
          <p className="text-sm text-red-500">
            <ErrorMessage errors={errors} name="companyType" />
          </p>
        </div>

        <div className="mb-4 w-full relative">
          <Label
            htmlFor="phoneNumber"
            className="md:text-lg text-sm font-semibold"
          >
            Phone Number
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
              <Phone />
            </span>
            <input
              className="w-full p-3 pl-10 bg-neutral-100 rounded-2xl focus:outline-none"
              type="text"
              placeholder="+123 456 789"
              {...register("phoneNumber")}
            />
          </div>
          <p className="text-sm text-red-500">
            <ErrorMessage errors={errors} name="phoneNumber" />
          </p>
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
              <MapPinned />
            </span>
            <input
              className="w-full p-3 pl-10 bg-neutral-100 rounded-2xl focus:outline-none"
              type="text"
              placeholder="abc Road, xyz Town"
              {...register("location")}
            />
          </div>
          <p className="text-sm text-red-500">
            <ErrorMessage errors={errors} name="location" />
          </p>
        </div>

        <div className="mb-4 w-full relative">
          <Label htmlFor="country" className="md:text-lg text-sm font-semibold">
            Country
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
              <MapPinned />
            </span>
            <select
              {...register("country")}
              className="w-full p-3 pl-10 bg-neutral-100 rounded-2xl focus:outline-none appearance-none"
            >
              <option value="" disabled hidden>
                Select Country
              </option>
              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                  selected={country === defaultValues.country}
                >
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

        <div className="flex w-full justify-between mt-4">
          <button
            type="button"
            className="py-3 px-6 bg-gray-200 text-gray-700 rounded-3xl text-sm"
            onClick={() => reset(defaultValues)}
          >
            Discard Changes
          </button>
          <button
            type="submit"
            className={clsx(
              "mobile:w-full w-36 py-2 px-4 rounded-3xl cursor-pointer hover:bg-primaryHover hover:text-white transition duration-300 ease-in-out",
              {
                "bg-primary text-white":
                  hasChanges || currentImage !== companyinfo.company_logo,
                "bg-gray-200 text-gray-700":
                  !hasChanges || currentImage === companyinfo.company_logo,
              }
            )}
            disabled={currentImage === companyinfo.company_logo && !hasChanges}
          >
            {isloading ? <Loader size={6} /> : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
}


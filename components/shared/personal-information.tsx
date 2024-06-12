"use client";
import React, { useState, useEffect } from "react";
import { SettingPersonalInfosSchema, Settings } from "@/lib/types";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Contact, Eye, EyeOff } from "lucide-react";
import {
  UserInfoAction,
  EditUserinfoAction,
} from "@/actions/settings/settings-action";
import { CompanyAdminInterface } from "@/lib/interfaces";
import { toast } from "react-toastify";
import Loader from "./loader";
import clsx from "clsx";

const PersonalInformation: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [defaultValues, setDefaultValues] = useState<Settings | null>(null);
  const [isloading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Settings>({
    resolver: zodResolver(SettingPersonalInfosSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      password: "",
    },
  });

  const currentValues = useWatch({ control });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData: CompanyAdminInterface = await UserInfoAction();
        const initialValues = {
          firstName: userData.first_name,
          lastName: userData.last_name,
          email: userData.email,
          contactNumber: userData.contact_number,
          password: "",
        };
        setDefaultValues(initialValues);
        reset(initialValues);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    getUserData();
  }, [reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const { firstName, lastName, email, contactNumber, password } = data;
      let result;
      if (password === "") {
        result = await EditUserinfoAction({
          first_name: firstName,
          last_name: lastName,
          email,
          contact_number: contactNumber,
        });
      } else {
        result = await EditUserinfoAction({
          first_name: firstName,
          last_name: lastName,
          email,
          contact_number: contactNumber,
          password,
        });
      }
      if (result.statusCode === 200) {
        return toast.success(result.message);
      }
      return toast.error(result.message);
    } catch (error) {
      toast.error("Failed to update user data");
    } finally {
      setIsLoading(false);
    }
  });

  if (!defaultValues) {
    return (
      <div className="flex justify-center item-center">
        <Loader />
      </div>
    );
  }

  const hasChanges =
    JSON.stringify(defaultValues) !== JSON.stringify(currentValues);

  return (
    <form onSubmit={onSubmit} className="w-full mx-auto">
      <div className="flex mobile:flex-col flex-row md:gap-4">
        <div className="mb-4 w-full">
          <label className="text-base font-semibold">First Name</label>
          <div className="relative">
            <input
              {...register("firstName")}
              className="w-full p-3 pr-10 bg-neutral-100 rounded-2xl focus:outline-none"
            />
            <User className="absolute right-3 top-3 text-gray-500" />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="mb-4 w-full">
          <label className="text-base font-semibold">Last Name</label>
          <div className="relative">
            <input
              {...register("lastName")}
              className="w-full p-3 pr-10 bg-neutral-100 rounded-2xl focus:outline-none"
            />
            <User className="absolute right-3 top-3 text-gray-500" />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="text-base font-semibold">Email Address</label>
        <div className="relative">
          <input
            {...register("email")}
            className="w-full p-3 pr-10 bg-neutral-100 rounded-2xl focus:outline-none"
          />
          <Mail className="absolute right-3 top-3 text-gray-500" />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="text-base font-semibold">Contact Number</label>
        <div className="relative">
          <input
            {...register("contactNumber")}
            className="w-full p-3 pr-10 bg-neutral-100 rounded-2xl focus:outline-none"
          />
          <Contact className="absolute right-3 top-3 text-gray-500" />
        </div>
        {errors.contactNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.contactNumber.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label className="text-base font-semibold">Password</label>
        <div className="relative">
          <input
            {...register("password")}
            id="password"
            type={showPassword ? "password" : "text"}
            placeholder="********"
            className="w-full p-3 pr-10 bg-neutral-100 rounded-2xl focus:outline-none"
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="flex gap-2 justify-between">
        <button
          type="button"
          className="mobile:w-full w-36 py-2 px-4 bg-gray-200 text-gray-700 rounded-3xl hover:bg-primaryHover hover:text-white transition duration-300 ease-in-out"
          onClick={() => reset(defaultValues)}
        >
          Discard
        </button>
        <button
          type="submit"
          className={clsx(
            "mobile:w-full w-36 py-2 px-4 rounded-3xl cursor-pointer hover:bg-primaryHover hover:text-white transition duration-300 ease-in-out",
            {
              "bg-primary text-white": hasChanges,
              "bg-gray-200 text-gray-700": !hasChanges,
            }
          )}
          disabled={!hasChanges}
        >
          {isloading ? <Loader size={6} /> : "Save"}
        </button>
      </div>
    </form>
  );
};

export default PersonalInformation;


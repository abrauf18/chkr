"use client";
import React, { useState } from "react";
import { SettingPersonalInfosSchema, Settings } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, Contact, Eye, EyeOff } from "lucide-react";

const PersonalInformation: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Settings>({
    resolver: zodResolver(SettingPersonalInfosSchema),
    defaultValues: {
      firstName: "Ayesha",
      lastName: "Rashid Khan",
      email: "ayesha@example.com",
      contactNumber: "+1234 685 8594",
      password: "helo123",
    },
  });

  const onSubmit = (data: Settings) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
      <div className="flex mobile:flex-col flex-row md:gap-4">
        <div className="mb-4 w-full">
          <label className="md:text-lg text-sm font-semibold">First Name</label>
          <div className="relative mt-2">
            <input
              {...register("firstName")}
              className="w-full p-3 pr-10 bg-neutral-100 rounded-2xl focus:outline-none"
            />
            <User className="absolute right-3 top-3 text-gray-500" />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div className="mb-4 w-full">
          <label className="md:text-lg text-sm font-semibold">Last Name</label>
          <div className="relative mt-2">
            <input
              {...register("lastName")}
              className="w-full p-3 pr-10 bg-neutral-100 rounded-2xl focus:outline-none"
            />
            <User className="absolute right-3 top-3 text-gray-500" />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="md:text-lg text-sm font-semibold">
          Email Address
        </label>
        <div className="relative mt-2">
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
        <label className="md:text-lg text-sm font-semibold">
          Contact Number
        </label>
        <div className="relative mt-2">
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
        <label className="md:text-lg text-sm font-semibold">Password</label>
        <div className="relative mt-2">
          <input
            {...register("password")}
            id="password"
            type={showPassword ? "password" : "text"}
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
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-4 bg-gray-200 text-gray-700 rounded-2xl"
        >
          Discard Changes
        </button>
        <button
          type="submit"
          className="py-2 px-4 bg-primary text-white rounded-2xl"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default PersonalInformation;

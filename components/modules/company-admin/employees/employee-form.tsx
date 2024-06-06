"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchema } from "@/lib/types";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";
import { InviteUserAction } from "@/actions/auth/auth-action";
import { toast } from "react-toastify";

export default function EmployeeForm() {
  const [isloading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EmployeeSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const { employeeFirstName, employeeLastName, email, phoneNumber } = data;
      const result = await InviteUserAction({
        first_name: employeeFirstName,
        last_name: employeeLastName,
        email,
        contact_number: phoneNumber,
      });
      if (result.statusCode === 200) {
        return toast.success(result.message);
      }
      return toast.error(result.message);
    } catch (error) {
      return toast.error((error as Error)?.message);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col text-black">
        <div className="flex mobile:flex-col flex-row items-center md:gap-4">
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="employeeFirstName"
              className="flex md:text-medium text-sm font-semibold"
            >
              First Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                <User color="#636363" className="h-4 w-4" />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="employeeFirstName"
                type="text"
                placeholder="Employee first name"
                {...register("employeeFirstName")}
              />
            </div>
            <p className="mobile:text-xs text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="employeeFirstName" />
            </p>
          </div>
          <div className="mb-4 w-full relative">
            <Label
              htmlFor="employeeLastName"
              className="flex md:text-medium text-sm font-semibold"
            >
              Last Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                <User color="#636363" className="h-4 w-4" />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="employeeLastName"
                type="text"
                placeholder="Employee last name"
                {...register("employeeLastName")}
              />
            </div>
            <p className="mobile:text-xs text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="employeeLastName" />
            </p>
          </div>
        </div>
        <div className="mb-4 w-full relative">
          <Label
            htmlFor="email"
            className="flex md:text-medium text-sm font-semibold"
          >
            Email
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
              <Mail color="#636363" className="h-4 w-4" />
            </span>
            <Input
              className="pl-10 bg-[#F9F8F8]"
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>
          <p className="mobile:text-xs text-sm text-red-500 mt-1  text-left">
            {" "}
            <ErrorMessage errors={errors} name="email" />
          </p>
        </div>
        <div className="mb-4 w-full relative">
          <Label
            htmlFor="phoneNumber"
            className="flex md:text-medium text-sm font-semibold"
          >
            Phone Number
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
              <Phone color="#636363" className="h-4 w-4" />
            </span>
            <Input
              className="pl-10 bg-[#F9F8F8]"
              id="phoneNumber"
              type="text"
              placeholder="Enter Phone Number"
              {...register("phoneNumber")}
            />
          </div>
          <p className="mobile:text-xs text-sm text-red-500 mt-1 text-left">
            {" "}
            <ErrorMessage errors={errors} name="phoneNumber" />
          </p>
        </div>
        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            className="text-white rounded-3xl flex items-center gap-2"
          >
            <span>Send Invite</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}


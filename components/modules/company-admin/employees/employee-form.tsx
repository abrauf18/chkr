"use client";
import React, { useEffect, useState } from "react";
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
import Loader from "@/components/shared/loader";
import { Users } from "@/lib/interfaces";
import { EditUserAction } from "@/actions/users/user-actions";
import action from "@/app/action";

export default function EmployeeForm({
  isEdit,
  currentUser,
  handleSetState,
}: {
  isEdit?: boolean;
  currentUser?: Users;
  handleSetState?: (value: boolean) => void;
}) {
  const [isloading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<any>({});
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EmployeeSchema),
  });

  const setUserValue = () => {
    const initialData = {
      employeeFirstName: currentUser?.first_name,
      employeeLastName: currentUser?.last_name,
      email: currentUser?.email,
      phoneNumber: currentUser?.contact_number,
    };
    setValue("employeeFirstName", initialData.employeeFirstName);
    setValue("employeeLastName", initialData?.employeeLastName);
    setValue("email", initialData?.email);
    setValue("phoneNumber", initialData?.phoneNumber);
    setInitialValues(initialData);
  };
  useEffect(() => {
    if (isEdit && currentUser) {
      setUserValue();
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      if(isEdit && currentUser){
        const changes: any = {};
        const currentValues = getValues()
     

      const fieldMapping: any = {
        employeeFirstName: "first_name",
        employeeLastName: "last_name",
        email: "email",
        phoneNumber: "contact_number",
      };

      Object.keys(currentValues).forEach((key)=> {
        const mappedKey = fieldMapping[key];
        if (currentValues[key] !== initialValues[key]) {
          changes[mappedKey] = currentValues[key];
        }
      });

      if (Object.keys(changes).length === 0) {
        setIsLoading(false);
        return toast.error("No changes detected.");
      }

        const result = await EditUserAction(currentUser.id, changes);
        if (result.statusCode === 200) {
          action("allUsers");
          return toast.success(result.message);
        }
        return toast.error(result.message);
      }
    
      const { employeeFirstName, employeeLastName, email, phoneNumber } = data;
      const result = await InviteUserAction({
        first_name: employeeFirstName,
        last_name: employeeLastName,
        email,
        contact_number: phoneNumber,
      });
      if (result.statusCode === 200) {
        action("allUsers")
        return toast.success(result.message);
      }
      return toast.error(result.message);
    } catch (error) {
      return toast.error((error as Error)?.message);
    } finally {
      handleSetState && handleSetState(false);
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
        {!isEdit && (
          <div className="flex justify-end mt-6">
            <Button type="submit" className="text-white rounded-3xl w-32">
              {isloading ? <Loader size={6} /> : "Send Invite"}
              {!isloading && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        )}
        {isEdit && (
          <div className="flex justify-between items-center mt-3">
            <Button
              className="bg-gray-100 text-black rounded-3xl"
              type="button"
              onClick={() => {
                setUserValue();
                handleSetState && handleSetState(false);
              }}
            >
              Discard Changes
            </Button>
            <Button className="rounded-3xl text-white" type="submit">
              {isloading ? <Loader size={6} /> : "Save Changes"}
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}


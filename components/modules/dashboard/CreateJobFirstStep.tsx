"use client";
import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, MapPinned, Phone, CalendarClock, CircleDollarSign, MoveRight, ChevronDown } from 'lucide-react';
import useJobStore from '@/store/job-store';
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const service = ["A", "B", " C", "D"]; // Example list of company types
interface Props {
  handleNextStep: () => void;
}
const CreateJobFirstStep = ({
  handleNextStep,
}: Props): JSX.Element => {
  const { setJobData } = useJobStore();
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();

  const changeNextStep = async () => {
    console.log("next")
    const isValid = await trigger([
      "customer-name",
      "payment",
      "phone-number",
      "date-time",
      "location",
      "service",
      "description"
    ]);
    if (isValid) {
      const data = getValues([
        "customer-name",
        "payment",
        "phone-number",
        "date-time",
        "location",
        "service",
        "description"

      ]);
      setJobData({
        "customer-name": data[0],
        "payment": data[1],
        "phone-number": data[2],
        "date-time": data[3],
        location: data[4],
        service: data[5],
        "description": data[6],
      });
      handleNextStep();
    }
  };

  return (
    <>
      <div className="mb-4 w-full relative">
        <div className="relative flex items-center">
          <select
            id="service"
            {...register("service")}
            className="w-full pl-3 pr-10 py-2 bg-[#F9F8F8] border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:border-2 appearance-none"
          >
            <option value="">Select Service</option>
            {service.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
        {/* <p className="text-sm text-red-500">
        {" "}
        <ErrorMessage errors={errors} name="company-type" />
      </p> */}
      </div>
      <div className="mb-4 w-full relative">
        <Label
          htmlFor="customerName"
          className="md:text-lg text-sm font-semibold"
        >
          Customer Name
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <User color='#636363' />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="customerName"
            type="text"
            placeholder="Enter customer fullname"
            {...register("customer-name")}
          />
        </div>
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="location" className="md:text-lg text-sm font-semibold">
          Location
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <MapPinned color='#636363' />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="location"
            type="text"
            placeholder="Customer location"
            {...register("location")}
          />
        </div>
        {/* <p className="text-sm text-red-500">
        {" "}
        <ErrorMessage errors={errors} name="location" />
        </p> */}
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="phone" className="md:text-lg text-sm font-semibold">
          Phone Number
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <Phone color='#636363' />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="phone"
            type="text"
            placeholder="Enter Phone Number"
            {...register("phone-number")}
          />
        </div>
        {/* <p className="text-sm text-red-500">
      {" "}
    <ErrorMessage errors={errors} name="phone-number" />
      </p> */}
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="Date&Time" className="md:text-lg text-sm font-semibold">
          Select Date&Time
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <CalendarClock color='#636363' />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="Date and time"
            type="text"
            placeholder="Select Date&Time"
            {...register("date-time")}
          />
        </div>
        {/* <p className="text-sm text-red-500">
        {" "}
        <ErrorMessage errors={errors} name="Date&Time" />
      </p> */}
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="Payment" className="md:text-lg text-sm font-semibold">
          Payment
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <CircleDollarSign color='#636363' />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="Payment"
            type="text"
            placeholder="Enter amount"
            {...register("payment")}
          />
        </div>
        {/* <p className="text-sm text-red-500">
        {" "}
        <ErrorMessage errors={errors} name="Payment" />
      </p> */}
      </div>
      <button
        className="w-full mobile:w-[10rem] md:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
        type="button"
        onClick={changeNextStep}
      >
        Next
      </button>
    </>
  )
};

export default CreateJobFirstStep;
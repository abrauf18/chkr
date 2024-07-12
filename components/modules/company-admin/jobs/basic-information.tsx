import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Phone,
  CalendarClock,
  CircleDollarSign,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import useJobStore from "@/store/job-store";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ServiceAction } from "@/actions/jobs/job-action";
import { ServicesInterface } from "@/lib/interfaces";
import AutoLocation from "@/components/shared/auto-location";

interface Props {
  handleNextStep: () => void;
}

const CreateJobFirstStep = ({ handleNextStep }: Props): JSX.Element => {
  const [services, setServices] = useState<ServicesInterface[]>([]);
  const { setJobData } = useJobStore();
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();

  const changeNextStep = async () => {
    const isValid = await trigger([
      "customer_name",
      "price",
      "phone_number",
      "date_time",
      "location",
      "service_id",
    ]);
    if (isValid) {
      const data = getValues([
        "customer_name",
        "price",
        "phone_number",
        "date_time",
        "location",
        "service_id",
      ]);

      setJobData({
        customer_name: data[0],
        price: data[1],
        phone_number: data[2],
        date_time: data[3],
        location: data[4],
        service_id: data[5],
        description: "",
        selected_users: [],
      });

      handleNextStep();
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await ServiceAction();
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      <div className="mb-4 w-full relative">
        <div className="relative flex items-center">
          <select
            id="service"
            {...register("service_id")}
            className="w-full pl-3 pr-10 py-2 bg-[#F9F8F8] border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:border-2 appearance-none"
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option
                key={service.id}
                value={service.id}
                selected={service.id === +getValues("service_id")}
              >
                {service.service_name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="service_id" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label
          htmlFor="customerName"
          className="flex w-full md:text-lg text-sm font-semibold"
        >
          Customer Name
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
            <User color="#636363" className="h-4 w-4" />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="customerName"
            type="text"
            placeholder="Enter customer fullname"
            {...register("customer_name")}
          />
        </div>
        <p className="text-sm text-red-500 mt-1">
          {" "}
          <ErrorMessage errors={errors} name="customer_name" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label
          htmlFor="location"
          className="flex w-full md:text-lg text-sm font-semibold"
        >
          Location
        </Label>
        <div className="flex items-center relative">
          <AutoLocation name="location" />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="location" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label
          htmlFor="phone"
          className="flex w-full md:text-lg text-sm font-semibold"
        >
          Phone Number
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-20">
            <Phone color="#636363" className="h-4 w-4" />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="phone"
            placeholder="Enter Phone Number"
            {...register("phone_number")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="phone_number" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label
          htmlFor="Date&Time"
          className="flex w-full md:text-lg text-sm font-semibold"
        >
          Date & Time
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
            <CalendarClock color="#636363" className="h-4 w-4" />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="Date and time"
            type="datetime-local"
            placeholder="Select Date&Time"
            {...register("date_time")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="date_time" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label
          htmlFor="Payment"
          className="flex w-full md:text-lg text-sm font-semibold"
        >
          Payment
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
            <CircleDollarSign color="#636363" className="w-4 h-4" />
          </span>
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="Payment"
            type="number"
            placeholder="Enter amount"
            {...register("price")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="price" />
        </p>
      </div>
      <div className="flex justify-end mt-10">
        <button
          className="flex gap-2 items-center justify-center bg-primary text-white font-medium py-3 px-5 rounded-3xl"
          type="button"
          onClick={changeNextStep}
        >
          Next
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default CreateJobFirstStep;


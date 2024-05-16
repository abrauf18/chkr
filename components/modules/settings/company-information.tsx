import { ErrorMessage } from '@hookform/error-message'
import { Label } from '@radix-ui/react-label'
import { MapPinned, User, BuildingIcon, ChevronDown, Phone, Link } from 'lucide-react'
import { Input } from '@/components/ui/input'
import React from 'react'
import { SettingsSchema, Settings } from '@/lib/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

const countries = [
  "USA",
  "Canada",
  "UK",
  "Australia",
  "Pakistan",
  "Germany",
  "India",
];
const companyTypes = ["Type A", "Type B", "Type C", "Type D"];

export default function CompanyInformation() {

  const { register, handleSubmit, formState: { errors } } = useForm<Settings>({
    resolver: zodResolver(SettingsSchema),
  });

  const onSubmit = (data: Settings) => {
    console.log(data);
  };
  return (
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
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="companyName"
            type="text"
            placeholder="Company Name"
            {...register("companyName")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
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
            id="companyType"
            {...register("companyType")}
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
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="companyType" />
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
            {...register("phoneNumber")}
          />
        </div>
        <p className="text-sm text-red-500">
          {" "}
          <ErrorMessage errors={errors} name="phoneNumber" />
        </p>
      </div>
      <div className="mb-4 w-full relative">
        <Label htmlFor="location" className="md:text-lg text-sm font-semibold">
          Location
        </Label>
        <div className="relative flex items-center">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <MapPinned />
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
            <MapPinned />
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
      <div className="flex w-full justify-between mt-4">
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
    </div>
  )
}

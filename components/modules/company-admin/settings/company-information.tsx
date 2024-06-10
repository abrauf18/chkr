'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { Label } from '@radix-ui/react-label';
import { MapPinned, User, BuildingIcon, ChevronDown, Phone } from 'lucide-react';
import { SettingsCompanyInfoSchema, SettingsCompany } from '@/lib/types';
import { CompanyAdminAction, CountryAction, FirmsAction } from '@/actions/auth/auth-action';
import { FirmInterface } from '@/lib/interfaces';


export default function CompanyInformation() {
  const [defaultValues, setDefaultValues] = useState<SettingsCompany | null>(null);
  const [countries, setCountries] = useState([]);
  const [companyTypes, setCompanyTypes] = useState<FirmInterface[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SettingsCompany>({
    resolver: zodResolver(SettingsCompanyInfoSchema),
  });

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
        const userData = await CompanyAdminAction();
        console.log(userData)
        setDefaultValues({
          companyName: userData.company_name,
          companyType: userData.firm_name,
          phoneNumber: userData.phone_number,
          location: userData.location,
          country: userData.country,
        });
        reset({
          companyName: userData.company_name,
          companyType: userData.firm_name,
          phoneNumber: userData.phone_number,
          location: userData.location,
          country: userData.country,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    getUserData();
  }, [reset]);

  const onSubmit = (data: SettingsCompany) => {
    console.log(data);
  };

  if (!defaultValues) {
    return <div>Loading...</div>; 
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full justify-center items-center my-4">
        <div className="mb-4 w-full relative">
          <Label htmlFor="companyName" className="md:text-lg text-sm font-semibold">
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
          <Label htmlFor="companyType" className="md:text-lg text-sm font-semibold">
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
                <option key={companytype.id} value={companytype.firm_name}>
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
          <Label htmlFor="phoneNumber" className="md:text-lg text-sm font-semibold">
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
          <Label htmlFor="location" className="md:text-lg text-sm font-semibold">
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
            className="py-3 px-6 bg-gray-200 text-gray-700 rounded-3xl text-sm"
          >
            Discard Changes
          </button>
          <button
            type="submit"
            className="py-3 px-6 bg-primary text-white rounded-3xl text-sm"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
}

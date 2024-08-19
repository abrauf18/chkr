"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ServicesSchema } from "@/lib/types";
import { Box, ArrowRight } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
import Loader from "@/components/shared/loader";
import { Services } from "@/lib/interfaces";
import {
  CreateServiceAction,
  UpdateServiceAction,
} from "@/actions/services/service-action";
import action from "@/app/action";

export default function ServiceForm({
  isEdit,
  handleSetState,
  initialData,
}: {
  isEdit?: boolean;
  handleSetState?: (value: boolean) => void;
  initialData?: Services;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Services>({
    resolver: zodResolver(ServicesSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setValue("id", initialData.id);
      setValue("service_name", initialData.service_name);
    }
  }, [isEdit, initialData, setValue]);

  const onSubmit = handleSubmit(async (data: Services) => {
    try {
      const serviceData: any = {
        id: data.id,
        serviceName: data.service_name,
      };
      setIsLoading(true);

      if (isEdit && initialData?.id) {
        const response = await UpdateServiceAction(initialData.id, serviceData);
        action("getServices");
      } else {
        const result = await CreateServiceAction(serviceData);
        action("getServices");
        if (result.statusCode === 200) {
          reset();
          handleSetState && handleSetState(false);
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      }
    } catch (error) {
      toast.error((error as Error)?.message || "An error occurred");
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
              htmlFor="service_name"
              className="flex md:text-medium text-sm font-semibold"
            >
              Service Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                <Box color="#636363" className="h-4 w-4" />
              </span>
              <Input
                className="pl-10 bg-[#F9F8F8]"
                id="service_name"
                type="text"
                placeholder="Service name"
                {...register("service_name")}
              />
            </div>
            <p className="mobile:text-xs text-sm text-red-500 mt-1">
              <ErrorMessage errors={errors} name="service_name" />
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button type="submit" className="text-white rounded-3xl w-36">
            {isLoading ? (
              <Loader size={6} />
            ) : isEdit ? (
              "Update Service"
            ) : (
              "Add Service"
            )}
            {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    </form>
  );
}


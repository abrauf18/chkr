"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import useJobStore from "@/store/job-store";
import { ErrorMessage } from "@hookform/error-message";
import { ArrowRight } from "lucide-react";

export default function CreateJobSecondStep({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { jobData, setJobData } = useJobStore();

  const handleDescriptionChange = async () => {
    const isValid = await trigger(["description"]);
    if (isValid) {
      const data = getValues("description");
      setJobData({ ...jobData, description: data });
      handleNextStep();
    }
  };
  return (
    <div className="flex flex-col w-full mx-4">
      <Label htmlFor="description" className="md:text-lg text-sm font-semibold">
        Description
      </Label>
      <textarea
        id="description"
        placeholder="Write Something..."
        rows={4}
        cols={50}
        maxLength={500}
        style={{ resize: "none" }}
        {...register("description")}
        className="border rounded-xl mr-4 bg-gray-50 p-2 h-[25vh]"
      />
      <p className="text-red-500 text-sm">
        <ErrorMessage errors={errors} name="description" />
      </p>
      <div className="flex justify-end mt-10 mx-4">
        <button
          className="flex justify-center items-center gap-2 w-full mobile:w-[10rem] md:w-[35%] bg-primary text-white font-medium py-3 px-10 rounded-3xl "
          type="button"
          onClick={handleDescriptionChange}
        >
          Continue & Assign
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}


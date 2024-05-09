"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import useJobStore from "@/store/job-store";
import { ErrorMessage } from "@hookform/error-message";

export default function CreateJobSecondStep({
  handlePreviousStep,
  handleNextStep,
}: {
  handlePreviousStep: () => void;
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
      const data = getValues(["description"]);
      setJobData({ ...jobData, description: data[0] });
      handleNextStep();
    }
  };
  return (
    <div className="mb-4 w-full relative">
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
      />
      <p className="text-red-500 text-sm">
        <ErrorMessage errors={errors} name="description" />
      </p>
      <button
        className="w-full lg:w-[10rem] bg-gray-300 font-medium py-3 px-10 rounded-3xl"
        type="button"
        onClick={handlePreviousStep}
      >
        Previous
      </button>
      <button
        className="w-full mobile:w-[10rem] md:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
        type="button"
        onClick={handleDescriptionChange}
      >
        Next
      </button>
    </div>
  );
}


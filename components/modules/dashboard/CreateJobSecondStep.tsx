"use client";
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { useFormContext } from 'react-hook-form';
import useJobStore from '@/store/job-store';
import { Input } from '@/components/ui/input';

export default function CreateJobSecondStep({
  handlePreviousStep,
  handleNextStep,
}: {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
}) {
  // const [description, setDescription] = useState<string>('');

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { jobData, setJobData } = useJobStore();

  // const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const value = event.target.value;
  //   if (value.length <= 500) {
  //     setDescription(value);
  //   }
  // };

  return (
    <div className="mb-4 w-full relative">
      {/* <Label
        htmlFor="description"
        className="md:text-lg text-sm font-semibold"
      >
        Description
      </Label>
      <textarea
        id="description"
        placeholder='Write Something...'
        rows={4}
        cols={50}
        value={description}
        // onChange={handleDescriptionChange}
        maxLength={500}
        style={{ resize: 'none' }}
        {...register("description")}
      />
      <div>{description.length}/500 characters</div> */}
      <div className="mb-4 w-full relative">
        <Label
          htmlFor="description"
          className="md:text-lg text-sm font-semibold"
        >
          Desc
        </Label>
        <div className="relative flex items-center">
          {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <User color='#636363' />
          </span> */}
          <Input
            className="pl-10 bg-[#F9F8F8]"
            id="description"
            type="text"
            placeholder="Enter customer fullname"
            {...register("description")}
          />
        </div>
      </div>
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
        onClick={handleNextStep}
      >
        Next
      </button>
    </div>
  );
}

import React from 'react'
import { Button } from '@/components/ui/button';
import { User, CirclePlus, MoveRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import CreateJobFirstStep from './CreateJobFirstStep';
import CreateJobSecondStep from './CreateJobSecondStep';
import AssignJob from './AssignJob';
import JobPayment from './JobPayment';
import JobDetails from './JobDetails';
import useJobStore, { Steps } from '@/store/job-store';
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Jobs, JobSchema } from "@/lib/types";


export default function CreateJob() {
  const { currentStep, setCurrentStep, jobData, setJobData } =
    useJobStore();

  const handleNextStep = () => {
    switch (currentStep) {
      case Steps.Create_Job_First_Step:
        setCurrentStep(Steps.Create_Job_Second_Step);
        break;
      case Steps.Create_Job_Second_Step:
        setCurrentStep(Steps.Assign_Job);
        break;
      case Steps.Assign_Job:
        setCurrentStep(Steps.Payment);
        break;
      case Steps.Payment:
        setCurrentStep(Steps.Job_Details);
        break;
      default:
        setCurrentStep(Steps.Create_Job_First_Step);
        break;
    }
  };

  const handlePreviousStep = () => {
    switch (currentStep) {
      case Steps.Create_Job_First_Step:
        // Handle previous step from the first step
        break;
      case Steps.Create_Job_Second_Step:
        setCurrentStep(Steps.Create_Job_First_Step);
        break;
      case Steps.Assign_Job:
        setCurrentStep(Steps.Create_Job_Second_Step);
        break;
      case Steps.Payment:
        setCurrentStep(Steps.Assign_Job);
        break;
      case Steps.Job_Details:
        setCurrentStep(Steps.Payment);
        break;
      default:
        setCurrentStep(Steps.Create_Job_First_Step); // Reset to first step
        break;
    }
  };


  const renderStep = () => {
    switch (currentStep) {
      case Steps.Create_Job_First_Step:
        return (
          <CreateJobFirstStep handleNextStep={handleNextStep} />
        );
      case Steps.Create_Job_Second_Step:
        return (
          <CreateJobSecondStep
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case Steps.Assign_Job:
        return (
          <AssignJob
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case Steps.Payment:
        return (
          <JobPayment
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case Steps.Job_Details:
        return (
          <JobDetails
            // handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      default:
        return null;
    }
  };
  const methods = useForm({
    resolver: zodResolver(JobSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: jobData,
  });
  const onSubmit = (data: Jobs) => {
    console.log(data);
    // removeOnboardingData();
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className='flex items-center rounded-3xl text-white bg-primary p-2 whitespace-nowrap'><CirclePlus className='mr-2 h-5' />Create new job</div>
        </DialogTrigger>
        <DialogContent className='bg-white md:max-w-[65%] xl:max-w-[50%] max-h-[80vh] overflow-y-auto overflow-x-hidden'>
          <DialogHeader>
            <DialogTitle>
              <span>Create new job</span>
              <hr className='my-6' />
            </DialogTitle>
            <DialogDescription className='text-black'>
              <FormProvider  {...methods}>
                {renderStep()}
              </FormProvider>
            </DialogDescription>
          </DialogHeader>
          {/* <DialogFooter>
            <Button type="submit" className='rounded-3xl text-white'>Next<MoveRight className='ml-2'
              onSubmit={methods.handleSubmit(onSubmit)} /></Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </>
  )
}

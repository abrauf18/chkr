import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateJobFirstStep from "./create-job-first-step";
import CreateJobSecondStep from "./create-job-second-step";
import AssignJob from "./assign-job";
import JobPayment from "./job-payment";
import JobDetails from "./job-details";
import useJobStore, { Steps } from "@/store/job-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Jobs, JobSchema } from "@/lib/types";

export default function CreateJob() {
  const { currentStep, setCurrentStep, jobData, removeOnboardingData } =
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

  const getStepHeading = () => {
    switch (currentStep) {
      case Steps.Create_Job_First_Step:
        return "Create New Job - Step 1";
      case Steps.Create_Job_Second_Step:
        return "Create New Job - Step 2";
      case Steps.Assign_Job:
        return "Assign Job";
      case Steps.Payment:
        return "Job Payment";
      case Steps.Job_Details:
        return "Job Details";
      default:
        return "Create New Job";
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case Steps.Create_Job_First_Step:
        return <CreateJobFirstStep handleNextStep={handleNextStep} />;
      case Steps.Create_Job_Second_Step:
        return <CreateJobSecondStep handleNextStep={handleNextStep} />;
      case Steps.Assign_Job:
        return <AssignJob handleNextStep={handleNextStep} />;
      case Steps.Payment:
        return (
          <JobPayment
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case Steps.Job_Details:
        return <JobDetails handlePreviousStep={handlePreviousStep} />;
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
    methods.reset();
    removeOnboardingData();
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="flex items-center rounded-3xl text-white bg-primary p-2 whitespace-nowrap">
            <CirclePlus className="mr-2 h-5" />
            Create new job
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white md:max-w-[65%] xl:max-w-[50%] max-h-[80vh] overflow-y-auto overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>
              <div className="flex justify-start items-center">
                <Button
                  type="button"
                  onClick={handlePreviousStep}
                  className="bg-transparent hover:bg-transparent"
                >
                  <ArrowLeft />
                </Button>
                <span className="whitespace-nowrap">{getStepHeading()}</span>
              </div>
              <hr className="my-6" />
            </DialogTitle>
            <DialogDescription className="text-black">
              <FormProvider {...methods}>
                <form
                  id="create-job-form"
                  onSubmit={methods.handleSubmit(onSubmit)}
                >
                  {renderStep()}
                </form>
              </FormProvider>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { format, parseISO } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CreateJobFirstStep from "./basic-information";
import CreateJobSecondStep from "./description";
import AssignJob from "./assign-job";
import JobPayment from "./job-payment";
import useJobStore, { Steps } from "@/store/job-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { JobSchema } from "@/lib/types";
import {
  CreateJobAction,
  GetJobByIDAction,
  UpdateJobAction,
} from "@/actions/jobs/job-action";
import { toast } from "react-toastify";
import action from "@/app/action";
import Loader from "@/components/shared/loader";

export default function CreateJob({
  jobId,
  open,
  onClose,
}: {
  jobId?: number;
  open: boolean;
  onClose: any;
}) {
  const { currentStep, setCurrentStep, jobData, removeCreateJobData } =
    useJobStore();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    resolver: zodResolver(JobSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: jobData,
  });

  useEffect(() => {
    if (jobId) {
      const fetchJobData = async () => {
        try {
          setIsLoading(true);
          methods.reset();
          removeCreateJobData();
          const companyData = await GetJobByIDAction(jobId);
          const parsedDate = parseISO(companyData.date_time);
          const formattedDateString = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
          const formattedAssignedJobs = companyData.assigned_jobs.map(
            (assignedJob: any) => ({
              id: assignedJob.user.id,
              first_name: assignedJob.user.first_name,
              last_name: assignedJob.user.last_name,
              picture: assignedJob.user.picture,
              price: assignedJob.price,
            })
          );
          methods.setValue("customer_name", companyData.customer_name);
          methods.setValue("price", companyData.price);
          methods.setValue("phone_number", companyData.phone_number);
          methods.setValue("date_time", formattedDateString.toUpperCase());
          methods.setValue("location", companyData.location);
          methods.setValue(
            "service_id",
            companyData.service_id.toString() as string
          );
          methods.setValue("description", companyData.description);
          methods.setValue("selected_users", formattedAssignedJobs);
        } catch (error) {
          console.error("Error fetching job data:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchJobData();
    }
  }, []);

  const { handleSubmit } = methods;

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
        return "Job Information";
      case Steps.Create_Job_Second_Step:
        return "Job Description";
      case Steps.Assign_Job:
        return "Assign Job";
      case Steps.Payment:
        return "Job Payment";
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
      default:
        return null;
    }
  };

  const onSubmit = async (data: any) => {
    try {
      methods.setValue("loading", true);
      if (jobId) {
        // Update existing job
        const result = await UpdateJobAction(jobId, data);
        if (result && result.statusCode === 200) {
          action("getJobs");
          toast.success(result.message);
        } else {
          toast.error(result?.message || "Failed to update job.");
        }
      } else {
        // Create new job
        const result = await CreateJobAction(data);
        if (result && result.statusCode === 201) {
          action("getJobs");
          toast.success(result.message);
        } else {
          toast.error(result?.message || "Failed to create job.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while processing the request.");
    } finally {
      await methods.reset();
      removeCreateJobData();
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent
          className="bg-white md:max-w-[65%] xl:max-w-[50%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <DialogHeader>
            <DialogTitle>
              <div className="flex justify-start items-center">
                {currentStep !== Steps.Create_Job_First_Step && (
                  <Button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-transparent hover:bg-transparent"
                  >
                    <ArrowLeft />
                  </Button>
                )}
                <span className="whitespace-nowrap">{getStepHeading()}</span>
              </div>
              <hr className="my-6" />
            </DialogTitle>
            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <Loader />
              </div>
            ) : (
              <DialogDescription className="text-black">
                <FormProvider {...methods}>
                  <form id="create-job-form" onSubmit={handleSubmit(onSubmit)}>
                    {renderStep()}
                  </form>
                </FormProvider>
              </DialogDescription>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}


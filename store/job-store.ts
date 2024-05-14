import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Jobs } from "@/lib/types";

export const Steps = {
  Create_Job_First_Step: "Create_Job_First_Step",
  Create_Job_Second_Step: "Create_Job_Second_Step",
  Assign_Job: "Assign_Job",
  Payment: "Payment",
  Job_Details: "Job_Details",
};

interface JobStore {
  currentStep: string;
  jobData: Jobs;
  setCurrentStep: (step: string) => void;
  setJobData: (data: Partial<Jobs>) => void;
  removeOnboardingData: () => void;
}

const useJobStore = create(
  persist<JobStore>(
    (set) => ({
      currentStep: Steps.Create_Job_First_Step,
      jobData: {
        "customer-name": "",
        payment: "",
        "phone-number": "",
        "date-time": "",
        location: "",
        service: "",
        description: "",
        selectedUsers: [],
      },
      setCurrentStep: (step: string) => set({ currentStep: step }),
      setJobData: (data: Partial<Jobs>) => {
        set((state) => ({
          jobData: { ...state.jobData, ...data },
        }));
      },
      removeOnboardingData: () =>
        set({
          currentStep: Steps.Create_Job_First_Step,
          jobData: {
            "customer-name": "",
            payment: "",
            "phone-number": "",
            "date-time": "",
            location: "",
            service: "",
            description: "",
            selectedUsers: [],
          },
        }),
    }),
    {
      name: "job-store",
      getStorage: () => localStorage,
    }
  )
);

export default useJobStore;


import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Jobs } from "@/lib/types";
import { JobSchema } from "@/lib/types"; // Import your validation schema

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
        selectedUsers: [], // Initialize selected users as an empty array
      },
      setCurrentStep: (step: string) => set({ currentStep: step }),
      setJobData: (data: Partial<Jobs>) => {
        try {
          // Validate data against JobSchema
          JobSchema.parse(data);
          set((state) => ({
            jobData: { ...state.jobData, ...data },
          }));
        } catch (error) {
          console.error("Validation error:", error);
          // Handle validation error (e.g., display message to user)
        }
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

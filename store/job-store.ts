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
  removeCreateJobData: () => void;
}

const useJobStore = create(
  persist<JobStore>(
    (set) => ({
      currentStep: Steps.Create_Job_First_Step,
      jobData: {
        customer_name: "",
        price: 0,
        phone_number: "",
        date_time: "",
        location: {
          name: "",
          lat: 0,
          lng: 0,
        },
        service_id: "",
        description: "",
        selected_users: [],
        loading: false,
      },
      setCurrentStep: (step: string) => set({ currentStep: step }),
      setJobData: (data: Partial<Jobs>) => {
        set((state) => ({
          jobData: { ...state.jobData, ...data },
        }));
      },
      removeCreateJobData: () =>
        set({
          currentStep: Steps.Create_Job_First_Step,
          jobData: {
            customer_name: "",
            price: 0,
            phone_number: "",
            date_time: "",
            location: {
              name: "",
              lat: 0,
              lng: 0,
            },
            service_id: "",
            description: "",
            selected_users: [],
            loading: false,
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


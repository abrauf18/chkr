import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Onboarding } from "@/lib/types";

export const Steps = {
  COMPANY_DETAILS: "COMPANY_DETAILS",
  PLAN: "PLAN",
};

interface OnBoardingStore {
  currentStep: string;
  onboardingData: Onboarding;
  setCurrentStep: (step: string) => void;
  setOnboardingData: (data: Onboarding) => void;
  removeOnboardingData: () => void;
}

const useOnboardingStore = create(
  persist<OnBoardingStore>(
    (set) => ({
      currentStep: Steps.COMPANY_DETAILS,
      onboardingData: {
        logo: null,
        "company-name": "",
        "company-type": "",
        "phone-number": "",
        location: "",
        country: "",
        plan: "monthly",
      },
      setCurrentStep: (step: string) => set({ currentStep: step }),
      setOnboardingData: (data: Partial<Onboarding>) =>
        set((state) => ({
          onboardingData: { ...state.onboardingData, ...data },
        })),
      removeOnboardingData: () =>
        set({
          currentStep: Steps.COMPANY_DETAILS,
          onboardingData: {
            logo: null,
            "company-name": "",
            "company-type": "",
            "phone-number": "",
            location: "",
            country: "",
            plan: "monthly",
          },
        }),
    }),
    {
      name: "onboarding-store",
      getStorage: () => localStorage,
    }
  )
);

export default useOnboardingStore;


import { z } from "zod";

export const OnboardingSchema = z.object({
  logo: z.nullable(
    z.instanceof(FileList).refine(
      (fileList) => {
        // Check if any file exceeds the size limit
        for (let i = 0; i < fileList.length; i++) {
          if (fileList[i].size > 5 * 1024 * 1024) {
            return false;
          }
        }
        return true;
      },
      { message: "File size must be less than 5MB" }
    )
  ),
  "company-name": z
    .string()
    .min(1, { message: "Company name must not be empty" }),
  "company-type": z
    .string()
    .min(1, { message: "Company type must not be empty" }),
  "phone-number": z
    .string()
    .min(1, { message: "Phone number must not be empty" }),
  location: z.string().min(1, { message: "Location must not be empty" }),
  country: z.string().min(1, { message: "Country must not be empty" }),
  plan: z.string().min(1, { message: "Plan must not be empty" }),
});

export type Onboarding = z.infer<typeof OnboardingSchema>;


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

export const SignUpSchema = z
  .object({
    firstname: z.string().min(2).max(50).min(1),
    lastname: z.string().min(2).max(50).min(1),
    email: z.string().email().min(1),
    password: z.string().min(8).min(1),
    confirmPassword: z.string().min(8).min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email().min(1),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" }),
});

export const ForgetPasswordSchema = z.object({
  email: z.string().email().min(1),
});

interface FormData {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data: FormData) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });


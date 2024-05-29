import { z } from "zod";
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const OnboardingSchema = z.object({
  logo: z.any().refine((val) => val?.length === 1, {
    message: "Logo is required",
  }),
  "company-name": z
    .string()
    .min(1, { message: "Company name must not be empty" }),
  "company-type": z
    .string()
    .min(1, { message: "Company type must not be empty" }),
  "phone-number": z
    .string()
    .min(1, { message: "Phone number must not be empty" })
    .regex(phoneRegex, "Invalid Number!")
    .min(1, { message: "Phone number must not be empty" })
    .regex(phoneRegex, "Invalid Number!"),
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
    contactNumber: z
      .string()
      .min(1, { message: "Phone number must not be empty" })
      .regex(phoneRegex, "Invalid Number!")
      .min(1, { message: "Phone number must not be empty" })
      .regex(phoneRegex, "Invalid Number!"),
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

export const EmployeeSchema = z.object({
  employeeFirstName: z
    .string()
    .max(50)
    .min(1, { message: "Employee name must not be empty" }),
  employeeLastName: z
    .string()
    .max(50)
    .min(1, { message: "Employee name must not be empty" }),
  email: z.string().email().min(1, { message: "Email must not be empty" }),
  phoneNumber: z
    .string()
    .min(8, { message: "Phone Number must contain at least 8 numbers" }),
});

export const FeedbackSchema = z.object({
  comment: z.string().max(50).min(1, { message: "Comment must not be empty" }),
  // rating: z.number().min(1, { message: "Rating is required" })
  //   .max(5, { message: "Rating must be between 1 and 5" }),
});
export const JobSchema = z.object({
  "customer-name": z
    .string()
    .min(1, { message: "Company name must not be empty" }),
  payment: z.coerce
    .number()
    .positive()
    .min(1, { message: "Payment must not be empty" }),
  "phone-number": z
    .string()
    .min(1, { message: "Phone number must not be empty" })
    .regex(phoneRegex, "Invalid Number!"),
  "date-time": z
    .string()
    .min(1, { message: "Date and time must not be empty" }),
  location: z.string().min(1, { message: "Location must not be empty" }),
  service: z.string().min(1, { message: "Select a service" }),
  description: z.string().min(1, { message: "Description must not be empty" }),
  selectedUsers: z
    .array(
      z.object({
        id: z.number(),
        username: z.string(),
        status: z.string(),
        amount: z.number().optional(),
      })
    )
    .min(1, { message: "Select at least one user" }),
});

export type Jobs = z.infer<typeof JobSchema>;

export const SettingPersonalInfosSchema = z.object({
  fullName: z
    .string()
    .max(50)
    .min(1, { message: "Employee name must not be empty" }),
  email: z.string().email().min(1, { message: "Email must not be empty" }),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export type Settings = z.infer<typeof SettingPersonalInfosSchema>;

const phoneRegexx = /^(\+?\d{1,4}[-.\s]?(\(?\d{1,3}\)?)[-.\s]?)?(\d{1,4}[-.\s]?)*\d{1,4}$/;

export const SettingsCompanyInfoSchema = z.object({
  companyName: z
    .string()
    .min(1, { message: "Company name must not be empty" }),
  companyType: z
    .string()
    .min(1, { message: "Company type must not be empty" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number must not be empty" })
    .regex(phoneRegexx, { message: "Invalid Number!" }),
  location: z.string().min(1, { message: "Location must not be empty" }),
  country: z.string().min(1, { message: "Country must not be empty" }),
});

export type SettingsCompany = z.infer<typeof SettingsCompanyInfoSchema>;

export const AdminSchema = z.object({
  adminFirstName: z
    .string()
    .max(50)
    .min(1, { message: "Admin first name must not be empty" }),
  adminLastName: z
    .string()
    .max(50)
    .min(1, { message: "Admin last name must not be empty" }),
  email: z.string().email().min(1, { message: "Email must not be empty" }),
});
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

const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/; 

export const SignUpSchema = z
  .object({
    firstName: z.string()
      .min(1, { message: "First name is required" })
      .max(50, { message: "First name can have a maximum of 50 characters" }),
    lastName: z.string()
      .min(1, { message: "Last name is required" })
      .max(50, { message: "Last name can have a maximum of 50 characters" }),
    email: z.string()
      .min(1, { message: "Email is required" })
      .email({ message: "Email is invalid" }),
    contactNumber: z.string()
      .min(1, { message: "Phone number is required" })
      .regex(phoneRegex, { message: "Invalid Number!" }),
    password: z.string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" })
      .regex(passwordRegex, { message: "Password must contain at least one uppercase letter and one special character" }),
    confirmPassword: z.string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must have 8 characters" })
      .regex(passwordRegex, { message: "Password must contain at least one uppercase letter and one special character" }),
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
  email: z.string()
  .min(1, {message: "Email is required"})
  .email({ message: "Email is invalid" }),
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
    .max(20, { message: "Name must no longer than 20 characters" })
    .min(1, { message: "Employee first name is required" }),
  employeeLastName: z
    .string()
    .max(20, { message: "Name must no longer than 20 characters" })
    .min(1, { message: "Employee last name is required" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" })
  ,
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
  firstName: z
    .string()
    .max(20, { message: "Name must no longer than 20 characters" })
    .min(1, { message: "First name is required" }),
  lastName: z
    .string()
    .max(20, { message: "Name must no longer than 20 characters" })
    .min(1, { message: "Last name is required" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" })
  ,
  contactNumber: z
    .string()
    .min(8, { message: "Phone Number must contain at least 8 numbers" }),
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
    .min(1, { message: "Company name is required" }),
  companyType: z
    .string()
    .min(1, { message: "Please select a company type" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(phoneRegexx, { message: "Invalid Number!" }),
  location: z.string().min(1, { message: "Location is required" }),
  country: z.string().min(1, { message: "Please select a country" }),
});

export type SettingsCompany = z.infer<typeof SettingsCompanyInfoSchema>;

export const AdminSchema = z.object({
  adminFirstName: z
    .string()
    .max(20, { message: "Name must no longer than 20 characters" })
    .min(1, { message: "Admin first name is required" }),
  adminLastName: z
    .string()
    .max(20, { message: "Name must no longer than 20 characters" })
    .min(1, { message: "Admin last name is required" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(8, { message: "Phone Number must contain at least 8 numbers" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" })
  ,
});
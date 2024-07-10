import { z } from "zod";
const phoneRegex = new RegExp(
  "^(\\+\\d{1,2}\\s?)?(\\d{3})?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$"
);

export const OnboardingSchema = z.object({
  logo: z
    .any()
    .refine((val) => val?.length === 1, {
      message: "Logo is required",
    })
    .refine((val) => val?.[0]?.type?.includes("image"), {
      message: "Logo must be an image",
    })
    .refine((val) => val?.[0]?.size < 1000000, {
      message: "Logo must be less than 1MB",
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
    .min(8, { message: "Phone Number must contain at least 8 numbers" })
    .regex(phoneRegex, "Invalid Number!"),
  location: z.string().min(1, { message: "Location must not be empty" }),
  country: z.string().min(1, { message: "Country must not be empty" }),
  plan: z.string().min(1, { message: "Plan must not be empty" }),
});

export type Onboarding = z.infer<typeof OnboardingSchema>;

const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

export const SignUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .max(50, { message: "First name can have a maximum of 50 characters" }),
    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .max(50, { message: "Last name can have a maximum of 50 characters" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Email is invalid" }),
    contactNumber: z
      .string()
      .min(1, { message: "Phone number is required" })
      .min(8, { message: "Phone Number must contain at least 8 numbers" })
      .regex(phoneRegex, { message: "Invalid Number!" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter and one special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must have 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must contain at least 8 characters" }),
});

export const ForgetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
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
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must contain at least 8 characters" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter and one special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must contain at least 8 characters" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter and one special character",
      }),
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
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(8, { message: "Phone Number must contain at least 8 numbers" })
    .regex(phoneRegex, { message: "Invalid Number!" }),
});

export const FeedbackSchema = z.object({
  comment: z.string().max(50).min(1, { message: "Comment must not be empty" }),
  // rating: z.number().min(1, { message: "Rating is required" })
  //   .max(5, { message: "Rating must be between 1 and 5" }),
});
export const JobSchema = z
  .object({
    customer_name: z
      .string()
      .min(1, { message: "Company name must not be empty" }),
    price: z.coerce
      .number()
      .positive()
      .min(1, { message: "Payment must not be empty" }),
    phone_number: z
      .string()
      .min(1, { message: "Phone number is required" })
      .min(8, { message: "Phone Number must contain at least 8 numbers" })
      .regex(phoneRegex, { message: "Invalid Number!" }),
    date_time: z
      .string()
      .min(1, { message: "Date and time must not be empty" }),
    location: z
      .object({
        name: z.string(),
        lat: z.number(),
        lng: z.number(),
      })
      .refine((obj) => obj.lat !== 0 || obj.lng !== 0 || obj.name !== "", {
        message: "Please select a Correct Location",
      }),
    service_id: z.string().min(1, { message: "Select a service" }),
    description: z
      .string()
      .min(1, { message: "Description must not be empty" }),
    selected_users: z
      .array(
        z.object({
          id: z.number(),
          first_name: z.string(),
          last_name: z.string(),
          picture: z.string(),
          // status: z.string(),
          price: z.number().optional(),
        })
      )
      .min(1, { message: "Select at least one user" }),
  })
  .refine(
    (data) => {
      const totalAmount = data.selected_users.reduce(
        (sum, user) => sum + (user.price || 0),
        0
      );
      return totalAmount <= data.price;
    },
    {
      message: "The total amount assigned exceeds the payment.",
      path: ["selected_users"],
    }
  );

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
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  contactNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(8, { message: "Phone Number must contain at least 8 numbers" })
    .regex(phoneRegex, { message: "Invalid Number!" }),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" })
    .optional()
    .or(z.literal("")),
});

export type Settings = z.infer<typeof SettingPersonalInfosSchema>;

export const SettingsCompanyInfoSchema = z.object({
  companyName: z.string().min(1, { message: "Company name is required" }),
  companyType: z.string().min(1, { message: "Please select a company type" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(8, { message: "Phone Number must contain at least 8 numbers" })
    .regex(phoneRegex, { message: "Invalid Number!" }),
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
    .min(8, { message: "Phone Number must contain at least 8 numbers" })
    .regex(phoneRegex, { message: "Invalid Number!" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
});

export const MessageSchema = z.object({
  message: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .max(150, { message: "Message can have a maximum of 150 characters" }),
});


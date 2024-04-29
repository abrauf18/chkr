import { z, ZodType } from "zod";

export const SignUpSchema = z.object({
  firstname: z.string().min(2).max(50).min(1),
  lastname: z.string().min(2).max(50).min(1),
  email: z.string().email().min(1),
  password: z.string().min(8).min(1),
  confirmPassword: z.string().min(8).min(1),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

export const LoginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string()
    .min(8, { message: "Password must contain at least 8 characters" })
});

export const ForgetPasswordSchema = z.object({
  email: z.string().email().min(1),
});

// interface ResetPasswordFormData {
//   password: string;
//   retypePassword: string;
// }

// export const ResetPasswordSchema = z.object({
//   password: z.string()
//     .min(8, { message: "Password must contain at least 8 characters" }),
//   retypePassword: z.string()
//     .refine((value, data: ResetPasswordFormData) => value === data.password, {
//       message: "Passwords don't match",
//       path: ["retypePassword"],
//     })
// });


interface FormData {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
  confirmPassword: z.string(),
}).refine((data: FormData) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // path of error
});
import { z } from "zod";

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


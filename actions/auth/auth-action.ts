"use server";

import {
  SignUpInterface,
  ForgetPasswordInterface,
  ResetPasswordInterface,
  InviteUserInterface,
  FirmInterface,
  OnboardingInterface,
  CompanyAdminInterface,
} from "@/lib/interfaces";
import { auth } from "@/auth";

export const SignUpAction = async (data: SignUpInterface) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
};

export const ForgetPasswordAction = async (data: ForgetPasswordInterface) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
};

export const ResetPasswordAction = async (data: ResetPasswordInterface) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
};

export const InviteUserAction = async (data: InviteUserInterface) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/invite-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};

export const FirmsAction = async () => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/firms`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const CountryAction = async () => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/countries`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const OnboardingAction = async (data: FormData) => {
  const session = await auth();
  console.log(data)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/company`,
    {
      method: "POST",
      headers: {
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: data,
    }
  );
  const result = await response.json();
  console.log(result)
  return result;
};

export const PlanAction = async () => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

// /lib/server-actions.ts
export const CompanyAdminAction = async (): Promise<CompanyAdminInterface> => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  const result = await response.json();
  return result.data;
};

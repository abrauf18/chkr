"use server";

import {
  SignUpInterface,
  ForgetPasswordInterface,
  ResetPasswordInterface,
  InviteUserInterface,
  FirmInterface,
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

export const OnboardingAction = async (data: OnboardingInterface) => {
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

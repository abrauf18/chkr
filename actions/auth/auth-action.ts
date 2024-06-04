"use server";

import { SignUpInterface } from "@/lib/interfaces";

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


"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const PlansAction = async () => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment/products`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      next: {
        tags: ["allPlans"],
      },
    }
  );
  const result = await response.json();
  if (result.statusCode === 401) {
    redirect("/logout");
  }
  return result;
};

export const ConfirmPlanAction = async (data: any) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment/checkout`,
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
  const result = await response.text();
  return result;
};

export const ConnectStripeAccount = async () => {
  const session = await auth();
  const email = session?.user?.email;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment/create-stripe-account`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify({ email }),
    }
  );
  const result = await response.json();
  return result;
};


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
  return result;
};


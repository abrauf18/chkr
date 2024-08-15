"use server";
import { auth } from "@/auth";
import { Services } from "@/lib/interfaces";
import { redirect } from "next/navigation";

export const CreateServiceAction = async (data: Services) => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (result.statusCode === 401) {
    redirect("/logout");
  }
  return result;
};

export const GetServiceAction = async () => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
    next: {
      tags: ["allServices"],
    },
  });
  const result = await response.json();
  if (result.statusCode === 401) {
    redirect("/logout");
  }
  return result.data;
};


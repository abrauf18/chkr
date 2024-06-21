"use server"
import { auth } from "@/auth";

export const ServiceAction = async () => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
  });
  const result = await response.json();
  return result;
};
"use server";
import { auth } from "@/auth";
import { JobsInterface } from "@/lib/interfaces";

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

export const CreateJobAction = async (data: JobsInterface) => {
  console.log(data);
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/job/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify({
        ...data,
        service_id: +data.service_id,
      }),
    }
  );
  const result = await response.json();
  return result;
};


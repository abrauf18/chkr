"use server";

import { auth } from "@/auth";
import { DisableCompanyInterface } from "@/lib/interfaces";
import { redirect } from "next/navigation";

export const GetCompanyAction = async () => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      // @ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
    next: {
      tags: ["getCompanies"],
    },
  });
  const result = await response.json();
  if (result.statusCode === 401) {
    redirect("/logout");
  }
  return result;
};

export const DiableCompanyAction = async (data: DisableCompanyInterface) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/company/disable-comapny`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  if (result.statusCode === 401) {
    redirect("/logout");
  }
  return result;
};


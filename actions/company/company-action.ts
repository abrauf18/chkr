"use server";

import { auth } from "@/auth";

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
  return result;
};


"use server";

import { CompanyAdminInterface } from "@/lib/interfaces";
import { auth } from "@/auth";

export const UserInfoAction = async (): Promise<CompanyAdminInterface> => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      next: {
        tags: ["userInfo"],
      },
    }
  );
  const result = await response.json();
  return result.data;
};

export const EditUserinfoAction = async (data: FormData) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    {
      method: "PUT",
      headers: {
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: data,
    }
  );
  const result = await response.json();
  return result;
};

export const EditCompanyInformationAction = async (data: FormData) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/company-profile`,
    {
      method: "PUT",
      headers: {
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: data,
    }
  );
  const result = await response.json();
  return result;
};


"use server";

import {
  CompanyAdminInterface,
  EditCompanyAdminInterface,
  EditCompanyInformationInterface,
} from "@/lib/interfaces";
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
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  const result = await response.json();
  return result.data;
};

export const EditCompanyAdminAction = async (
  data: EditCompanyAdminInterface
) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
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
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  const result = await response.json();
  return result.data;
};

export const EditCompanyInformationAction = async (
  data: EditCompanyInformationInterface
) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/company-profile`,
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
  return result;
};


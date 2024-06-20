"use server";

import { auth } from "@/auth";

export const UsersAction = async () => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
    next: {
      tags: ["allUsers"],
    },
  });
  const result = await response.json();
  return result.data;
};

export const EditUserAction = async (id: number, data: any) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify(data),
      next: {
        tags: ["editUser"],
      },
    }
  );
  const result = await response.json();
  return result;
};


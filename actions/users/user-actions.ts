"use server";

import { auth } from "@/auth";

export const UsersAction = async ({
  order,
  sort,
}: {
  order: string;
  sort: string;
}) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user?order=${order}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      next: {
        tags: ["allUsers"],
      },
    }
  );
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

export const SearchUserAction = async (search: string) => {
  const session = await auth();
  console.log(search);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify({ search }),
    }
  );
  const result = await response.json();
  return result.data;
};


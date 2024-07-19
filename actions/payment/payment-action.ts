"use server";

import { POST } from "@/app/api/auth/[...nextauth]/route";
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

// export const ConfirmPlanAction = async (id: number) => {
//   const session = await auth();
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/payment/${id}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         //@ts-ignore
//         Authorization: `Bearer ${session?.token}`,
//       },
//     }
//   );
//   const result = await response.json();
//   return result;
// };

export const ConfirmPlanAction = async (data: any) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment/checkout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify({ productId: data }),
    }
  );
  const result = await response.text();
  return result;
};


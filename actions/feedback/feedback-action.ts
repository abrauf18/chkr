"use server";
import { auth } from "@/auth";
import { FeedbackInterface } from "@/lib/interfaces";

export const CreateFeedbackAction = async (data: FeedbackInterface) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/feedback/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify({
        rating: data.rating,
        comment: data.comment,
      }),
    }
  );
  const result = await response.json();
  console.log("API response:", result);
  return result;
};


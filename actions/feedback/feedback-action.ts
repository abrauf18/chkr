"use server";
import { auth } from "@/auth";
import { FeedbackInterface } from "@/lib/interfaces";
import { redirect } from "next/navigation";

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
  if (result.statusCode === 401) {
    redirect("/logout");
  }
  return result;
};

export const GetAllFeedbacksAction = async (order = "newest", sort = "a-z") => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/feedback?order=${order}&sort=${sort}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["getFeedbacks"],
      },
    }
  );
  const result = await response.json();
  return result;
};


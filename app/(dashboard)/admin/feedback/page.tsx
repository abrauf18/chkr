import { GetAllFeedbacksAction } from "@/actions/feedback/feedback-action";
import Feedback from "@/components/modules/super-admin/feedback/feedback";
import DashboardHeader from "@/components/shared/dashboard-header";
import { FeedbackInterface } from "@/lib/interfaces";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Gain valuable insights from user feedback.",
};

export default async function FeedbackPage({
  searchParams = { order: "defaultOrder", sort: "defaultSort" },
}: {
  searchParams?: { order: string; sort: string };
}) {
  const { order, sort } = searchParams;
  const feedbacks: FeedbackInterface[] = await GetAllFeedbacksAction(
    order,
    sort,
    false
  );
  return (
    <>
      <DashboardHeader title="Feedback" />
      <Feedback feedback={feedbacks} />
    </>
  );
}


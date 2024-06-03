import Feedback from '@/components/modules/super-admin/feedback/feedback'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Feedback",
  description: "Gain valuable insights from user feedback."
};

export default function FeedbackPage() {
  return <Feedback />
}

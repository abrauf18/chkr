import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FeedbackForm from "./feedback-form";

export default function Feedback() {
  return (
    <Dialog>
      <DialogContent className="bg-white mobile:max-w-[90%] md:max-w-[65%] max-h-[80vh] overflow-y-auto overflow-x-auto">
        <DialogHeader>
          <DialogTitle>Submit your feedback</DialogTitle>
          <hr className="my-10" />
          <DialogDescription>
            <FeedbackForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


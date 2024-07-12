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
import { MessageSquareShare } from "lucide-react";

export default function Feedback() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
          <MessageSquareShare className="w-5 h-5" color="black" />
          <span className="text-gray-800">Submit Feedback</span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white mobile:max-w-[90%] md:max-w-[60%] max-h-[80vh] overflow-y-auto overflow-x-auto rounded-lg">
        <DialogHeader>
          <DialogTitle>
            Submit your feedback
            <hr className="my-5" />
          </DialogTitle>
          <DialogDescription>
            <FeedbackForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


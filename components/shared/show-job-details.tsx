"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import JobDetails from "./job-details";
import { CircleArrowRight, Eye } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ShowJobDetails() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger>
        {pathname === "/company-employee/jobs" && (
          <div className="flex gap-2 items-center">
            <span className="text-base">View Details</span>
            <CircleArrowRight className="w-4 h-4" />
          </div>
        )}
        {pathname === "/company-admin/jobs" && (
          <div className="flex items-center justify-center rounded-lg h-10 w-10 bg-green-100">
            <Eye color="#27AE60" />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="bg-white md:max-w-[65%] xl:max-w-[50%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-left">
            Job Details
            <hr className="my-6" />
          </DialogTitle>
          <DialogDescription>
            <JobDetails />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import ServiceForm from "./service-form";

export default function AddService() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center rounded-3xl text-white bg-primary p-3 whitespace-nowrap">
          <CirclePlus className="md:mr-2 h-5 mobile:h-4" />
          <span className="mobile:text-xs">Add Service</span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white md:max-w-[65%] xl:max-w-[40%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-left">
            Add New Service
            <hr className="my-6" />
          </DialogTitle>
          <DialogDescription>
            <ServiceForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


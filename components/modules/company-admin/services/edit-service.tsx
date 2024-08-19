"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditIcon from "@/assets/icons/edit-icon";
import { Services } from "@/lib/interfaces";
import ServiceForm from "./service-form";

interface Editprops {
  currentService: Services;
}

export default function EditService({ currentService }: Editprops) {
  const [open, setOpen] = useState(false);
  const handleSetState = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <EditIcon />
      </DialogTrigger>
      <DialogContent className="bg-white md:max-w-[55%] xl:max-w-[40%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader>
          <DialogTitle>
            Edit Service
            <hr className="mt-6" />
          </DialogTitle>
          <DialogDescription>
            <ServiceForm
              isEdit
              initialData={currentService} // Pass the current service data for editing
              handleSetState={handleSetState}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


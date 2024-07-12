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
import AdminForm from "./admin-form";
import EditIcon from "@/assets/icons/edit-icon";
import EmployeeForm from "../../company-admin/employees/employee-form";
import { Users } from "@/lib/interfaces";

interface Editprops {
  isAdmin: boolean;
  isEmployee: boolean;
  currentUser: Users;
}

export default function EditAdmin({
  isAdmin,
  isEmployee,
  currentUser,
}: Editprops) {
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
            {isAdmin && <span>Edit Admin</span>}
            {isEmployee && <span>Edit Employee</span>}
            <hr className="mt-6" />
          </DialogTitle>
          <DialogDescription>
            {isAdmin && (
              <AdminForm
                isEdit
                currentUser={currentUser}
                handleSetState={handleSetState}
              />
            )}
            {isEmployee && (
              <EmployeeForm
                isEdit
                currentUser={currentUser}
                handleSetState={handleSetState}
              />
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


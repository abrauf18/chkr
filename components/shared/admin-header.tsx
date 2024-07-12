"use client";
import React from "react";
import AddAdmin from "../modules/super-admin/admins/add-admin";
import AddEmployee from "../modules/company-admin/employees/add-employee";
import CreateJob from "../modules/company-admin/jobs/create-job";
import Filter from "./filter";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  isAdmin?: boolean;
  isSuperAdmin: boolean;
  page?: "addEmployee" | "createJob"; // Add a page prop to specify the current page
  searchParams?: { [key: string]: string };
  hideFilter?: boolean;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  title,
  isAdmin,
  isSuperAdmin,
  page,
  hideFilter,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between mobile:flex-col items-center my-2">
      <div className="flex w-full">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-end mobile:justify-start w-full">
        {!hideFilter && <Filter searchParams={{ order: "", sort: "" }} />}
        {isSuperAdmin && <AddAdmin />}
        {isAdmin && page === "addEmployee" && <AddEmployee />}
        {isAdmin && page === "createJob" && (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="flex items-center rounded-3xl gap-1 text-white bg-primary p-3 whitespace-nowrap cursor-pointer"
                  onClick={toggleModal}
                >
                  <CirclePlus className="h-5" />
                  Create New Job
                </div>
              </DialogTrigger>
            </Dialog>
            {isOpen && <CreateJob open={isOpen} onClose={toggleModal} />}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;


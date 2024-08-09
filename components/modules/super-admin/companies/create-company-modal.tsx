import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BadgePlus } from "lucide-react";
import Signup from "../../auth/signup";

const CreateCompanyModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex w-full items-center p-3 gap-2 bg-white  hover:bg-gray-200 rounded-2xl">
          <BadgePlus className="w-4 h-4" color="gray" />
          <span className="text-gray-600">Register Company Admin</span>
        </DialogTrigger>
        <DialogContent className="bg-white md:max-w-[65%] xl:max-w-[50%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
          <DialogHeader>
            <DialogTitle>
              <div className="flex ">Company Admin Details</div>
              <hr className="my-3" />
            </DialogTitle>
            <DialogDescription>
              <Signup isSuperAdmin />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateCompanyModal;


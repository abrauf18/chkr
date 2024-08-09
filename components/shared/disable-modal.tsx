import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import CancelCircle from "@/assets/icons/cancel-circle-half-dot";
import { Button } from "@/components/ui/button";
import { Ban, CirclePlus } from "lucide-react";
import { DisableCompanyAction } from "@/actions/company/company-action";
import { toast } from "react-toastify";
import Loader from "./loader";
import action from "@/app/action";

export default function DisableModal({
  isDisable,
  companyId,
}: {
  isDisable?: boolean;
  companyId: number;
}) {
  const [loading, setLoading] = useState(false);
  const handleConfirm = async () => {
    setLoading(true);
    const data = {
      disable: !isDisable ? true : false,
      company_id: companyId,
    };
    try {
      const result = await DisableCompanyAction(data);
      toast.success(result.message);
      location.reload();
    } catch (error) {
      console.error("Failed to disable the company:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
          {isDisable ? (
            <CirclePlus color="gray" className="w-5 h-5" />
          ) : (
            <Ban color="gray" className="w-5 h-5" />
          )}
          <span className="text-gray-600">
            {isDisable ? "Enable Company" : "Disable Company"}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white md:max-w-1/2 mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader>
          <DialogDescription>
            <div className="flex flex-col justify-center items-center mt-10 gap-6">
              <CancelCircle />
              <h1 className="text-2xl font-medium text-black">Are you sure?</h1>
              <p className="font-normal text-lg text-center">
                Do you really want to {!isDisable ? "disable" : "enable"} this?
              </p>
              <div className="flex w-full justify-between">
                <Button className="text-white rounded-3xl px-5">Cancel</Button>
                <Button
                  className="w-24 bg-transparent border border-green-500 hover:border-white hover:text-white text-green-500 rounded-3xl px-5"
                  onClick={handleConfirm}
                >
                  {loading ? <Loader size={6} /> : "Confirm"}
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


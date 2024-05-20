import React from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowRight, DollarSign } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { User } from "./assign-job";
import { ErrorMessage } from "@hookform/error-message";

export default function JobPayment({
  handlePreviousStep,
  handleNextStep,
}: {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
}) {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const users = watch("selectedUsers");

  const handleChange = (user: User, e: any) => {
    const list = users.map((u: any) => {
      if (u.id === user.id) {
        return { ...u, amount: Number(e.target.value) };
      }
      return u;
    });
    setValue("selectedUsers", list, {
      shouldValidate: true,
    });
  };
  return (
    <div className="overflow-y-auto max-h-[400px] mt-10 border-2 rounded-xl">
      <p className="text-sm text-red-500 text-right">
        {" "}
        <ErrorMessage errors={errors} name="selectedUsers" />
      </p>
      {Array.isArray(users) &&
        users.map((user) => (
          <div key={user.id} className=" px-4">
            <div className="flex mobile:gap-4 justify-between py-2 px-4">
              <div className="flex items-center">
                {" "}
                <Checkbox checked={true} />
              </div>
              <div className="flex mobile:justify-start md:justify-between flex-row mobile:flex-col w-[90%]">
                <div className="flex items-center py-4 gap-3">
                  <div className="rounded-full w-12 h-12 mr-2">
                    <Image
                      src="/images/avatar.svg"
                      alt="user"
                      width={3}
                      height={3}
                    />
                  </div>
                  <span className="font-semibold whitespace-nowrap">
                    {user.username}
                  </span>
                </div>
                <div className="relative flex justify-center items-center">
                  <span className="absolute left-5 top-[55%] transform -translate-y-1/2 h-5 w-5 text-gray-400">
                    <DollarSign color="#232324" className="h-4 w-4" />
                  </span>
                  <Input
                    className="pl-10 bg-[#F9F8F8]"
                    id="amount"
                    type="text"
                    placeholder="Enter amount"
                    onChange={(e) => handleChange(user, e)}
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      <div className="flex items-center text-white justify-center w-32 my-5 gap-2 float-right mr-5 bg-primary rounded-full cursor-pointer">
        <Button id="create-job-form" className="!p-0" type="submit">
          Continue
        </Button>
        <ArrowRight color="white" size={15} />
      </div>
    </div>
  );
}


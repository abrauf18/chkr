import React from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowRight, DollarSign } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@hookform/error-message";
import { Users } from "@/lib/interfaces";
import Loader from "@/components/shared/loader";

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
    register,
    formState: { errors },
  } = useFormContext();
  const users = watch("selected_users");

  const getPrice = (id: number) => {
    // Find the user with the matching id
    const user = users.find((user: any) => user.id === id);
    return user ? user.price : null;
  };

  const handleChange = (user: Users, e: any) => {
    const list = users.map((u: any) => {
      if (u.id === user.id) {
        return { ...u, price: Number(e.target.value) };
      }
      return u;
    });
    setValue("selected_users", list, {
      shouldValidate: true,
    });
  };
  return (
    <>
      <p className="text-sm text-red-500 text-right">
        {" "}
        <ErrorMessage errors={errors} name="selected_users" />
      </p>
      <div className="overflow-y-auto max-h-[400px] mt-2 border-2 rounded-xl">
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
                        src={user.picture}
                        alt="user"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    </div>
                    <span className="font-semibold whitespace-nowrap">
                      {user.first_name} {user.last_name}
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
                      value={getPrice(user.id)}
                      placeholder="Enter amount"
                      onChange={(e) => handleChange(user, e)}
                    />
                    <p className="text-sm text-red-500 mt-1">
                      {" "}
                      <ErrorMessage errors={errors} name="price" />
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        <Button
          id="create-job-form"
          className="flex items-center text-white justify-center w-32 my-5 gap-2 float-right mr-5 bg-primary rounded-full cursor-pointer"
          type="submit"
          disabled={watch("loading")}
        >
          {watch("loading") ? <Loader size={6} /> : "Continue"}
          <ArrowRight color="white" size={15} />
        </Button>
      </div>
    </>
  );
}


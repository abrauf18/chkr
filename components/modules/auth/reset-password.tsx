"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RightsideImg from "@/public/images/SignupRightside.svg";
import { ResetPasswordAction } from "@/actions/auth/auth-action";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { ErrorMessage } from "@hookform/error-message";
import Loader from "@/components/shared/loader";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { push } = useRouter();
  const [isloading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const { password, confirmPassword } = data;
      const result = await ResetPasswordAction({
        token: token as string,
        password,
        confirm_password: confirmPassword,
      });
      if (result.statusCode === 200) {
        toast.success(result.message);
        push("/login");
      } else {
        //check if result.message is an array
        if (Array.isArray(result.message)) {
          toast.error(result.message[0]);
        } else {
          toast.error(result.message);
        }
      }
    } catch (error) {
      console.log("Error resetting password:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally{
      setIsLoading(false);
    }
  });

  return (
    <div
      className="flex w-full h-full md:h-screen xl:h-full rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${RightsideImg.src})`,
      }}
    >
      <div className="flex mobile:w-[90%] py-6 justify-center items-center">
        <form
          className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold mb-6">
            Reset Password
          </h2>
          <p className="md:w-full text-center mb-6 text-sm">
            Enter your new password and remember it for future.
          </p>
          <div className="grid w-full items-center gap-1.5">
            <Label
              htmlFor="password"
              className="md:text-lg text-sm font-semibold"
            >
              Password
            </Label>
            <Input
              {...register("password")}
              className="bg-[#F9F8F8]"
              id="password"
              type="password"
              placeholder="**************"
            />
            <p className="mobile:text-xs text-sm text-red-500 mt-1">
              <ErrorMessage errors={errors} name="password" />
            </p>
          </div>
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label
              htmlFor="confirm_password"
              className="md:text-lg text-sm font-semibold"
            >
              Re-Type Password
            </Label>
            <Input
              {...register("confirmPassword")}
              className="bg-[#F9F8F8]"
              id="confirm_password"
              type="password"
              placeholder="**************"
            />
            <p className="mobile:text-xs text-sm text-red-500 mt-1">
              <ErrorMessage errors={errors} name="confirmPassword" />
            </p>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="w-full bg-primary text-white font-medium py-2 px-4 rounded-2xl"
              type="submit"
            >
             {isloading ? <Loader size={6} /> : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


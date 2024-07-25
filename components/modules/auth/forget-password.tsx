"use client";
import React, { useState } from "react";
import RightsideImg from "@/public/images/login.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ForgetPasswordSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPasswordAction } from "@/actions/auth/auth-action";
import { toast } from "react-toastify";
import Loader from "@/components/shared/loader";
import { ErrorMessage } from "@hookform/error-message";

export default function ForgetPassword() {
  const [isloading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ForgetPasswordSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const { email } = data;
      const result = await ForgetPasswordAction({
        email,
      });
      if (result.statusCode === 200) {
        return toast.success(result.message);
      }
      return toast.error(result.message);
    } catch (error) {
      return toast.error((error as Error)?.message);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div
      className="flex md:w-full w-screen h-full md:h-screen xl:h-full rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${RightsideImg.src})`,
      }}
    >
      <div className="flex w-[85%] md:w-full py-6 justify-center items-center">
        <form
          className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold	mb-6">
            Forgot Password
          </h2>
          <p className="md:w-full text-center mb-6 text-sm ">
            Reset your password by providing your registered email address
          </p>
          <div className="grid mb-4 w-full items-center gap-1.5 	">
            <Label htmlFor="email" className="md:text-lg text-sm font-semibold">
              Email Address
            </Label>
            <Input
              {...register("email")}
              className="bg-[#F9F8F8]"
              type="email"
              id="email"
              placeholder="Email"
            />
            <p className="text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="email" />
            </p>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="w-full bg-primary hover:bg-primaryHover text-white font-medium py-2 px-4 rounded-2xl"
              type="submit"
              disabled={isloading}
            >
              {isloading ? <Loader size={6} /> : "Send Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


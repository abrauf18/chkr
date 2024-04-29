"use client"
import React from "react";
import ResetPasswordImg from "@/public/images/SignupRightside.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResetPasswordSchema } from "@/lib/schema";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(ResetPasswordSchema), // Apply the zodResolver
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex md:w-full mt-6 w-screen rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${ResetPasswordImg.src})`,
      }}>
      <div className="flex w-[85%] md:w-full py-6 justify-center items-center">
        <form className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
          <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold	mb-6">
            Reset Password
          </h2>
          <p className="md:w-full text-center mb-6 text-sm">
            Enter your new password and remember it for future.
          </p>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password" className="md:text-lg text-sm font-semibold">
              Password
            </Label>
            <Input
              {...register("password")}
              className="bg-[#F9F8F8]"
              id="password"
              type="password"
              placeholder="**************"
            />
            {typeof errors.password?.message === 'string' && <p className="text-red-600 mt-2">{errors.password?.message}</p>}
          </div>
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label htmlFor="retypePassword" className="md:text-lg text-sm font-semibold">
              Re-Type Password
            </Label>
            <Input
              {...register("confirmPassword")}
              className="bg-[#F9F8F8]"
              id="retypePassword"
              type="password"
              placeholder="**************"
            />
            {typeof errors.confirmPassword?.message === 'string' && <p className="text-red-600 mt-2">{errors.confirmPassword?.message}</p>}
          </div>
          <div className="flex items-center justify-center mt-6">
            <button className="w-full bg-primary text-white font-medium py-2 px-4 rounded-2xl" type="submit">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
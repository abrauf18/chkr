"use client";
import React, { useState } from "react";
import loginImg from "@/public/images/login.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from 'lucide-react';


export default function Login() {

  const [showPassword, setShowPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <div
      className="flex  md:ml-4 md:w-full mt-6 w-screen rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${loginImg.src})`,
      }}
    >
      <div className="flex w-[85%] md:w-full py-6 justify-center items-center">
        <form
          className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit((d) => console.log(d))}
        >
          <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold	mb-6">
            Login To Your Account
          </h2>
          <p className="md:w-full text-center mb-6 text-sm ">
            Login with the credentials provided by your company
          </p>
          <hr className="my-6" />
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
            {errors.email && (
              <p className="text-red-500 mt-2">Email is required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-red-500 mt-2">Invalid email format</p>
            )}
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label
              htmlFor="password"
              className="md:text-lg text-sm font-semibold	"
            >
              Password
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("password")}
                className="bg-[#F9F8F8]"
                id="password"
                type={showPassword ? "password" : "text"}
                placeholder="**************"
              />
              <button
                type="button"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {typeof errors.password?.message === "string" && (
              <p className="text-red-500 mt-2">{errors.password?.message}</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row mt-4 md:items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox accent-primary h-5 w-5"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a
              className="inline-block align-baseline font-bold text-sm text-primary"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded-2xl"
              type="submit"
            >
              Continue to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


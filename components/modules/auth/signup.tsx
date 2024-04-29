"use client"
import React, { useState } from "react";
import SignupImg from "@/public/images/SignupRightside.svg";
import Google from "@/assets/icons/google-icon";
import Microsoft from "@/assets/icons/microsoft-icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from "@/lib/schema";

export default function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div
      className="flex md:w-full mt-6 w-screen rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${SignupImg.src})`,
      }}
    >
      <div className="flex lg:w-[95%] sm:w-[85%] md:w-full py-6 justify-center items-center">
        <form className="bg-white lg:[70%] xl:w-3/4 shadow-md rounded-3xl px-8 pt-6 pb-8 my-10"
          onSubmit={onSubmit}>
          <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold	mb-6">
            Create an account
          </h2>
          <p className="md:w-full text-center mb-6 text-sm ">
            Continue with one of the following services:
          </p>
          <div className="flex justify-center gap-2">
            <Button className="xl:w-[90%] bg-gray-100 rounded-2xl">
              <Google className="xl:w-[1rem] xl:h-[1rem] mr-2 w-[1rem] h-[1rem]" />
              Google
            </Button>
            <Button className=" xl:w-[90%] bg-gray-100 rounded-2xl">
              <Microsoft className="xl:w-[1rem] xl:h-[1rem] mr-2 w-[1rem] h-[1rem]" />
              Microsoft
            </Button>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-1">
              <hr className="line" />
            </div>
            <div className="px-4">or</div>
            <div className="flex-1">
              <hr className="line" />
            </div>
          </div>

          <div className="grid mb-4 w-full items-center">
            <Label
              htmlFor="firstName"
              className="md:text-lg text-sm font-semibold	"
            >
              First Name{" "}
            </Label>
            <Input
              {...register('firstname')}
              className="bg-[#F9F8F8]"
              id="firstName"
              type="name"
              placeholder="First Name"
            />
            {typeof errors.firstname?.message === "string" && <p className="text-red-600 mt-2">The First Name field is required</p>}
          </div>
          <div className="grid mb-4 w-full items-center">
            <Label
              htmlFor="fullName"
              className="md:text-lg text-sm font-semibold	"
            >
              Last Name{" "}
            </Label>
            <Input
              {...register('lastname')}
              className="bg-[#F9F8F8]"
              id="LastName"
              type="name"
              placeholder="Last Name"
            />
            {typeof errors.lastname?.message === "string" && <p className="text-red-600 mt-2">The Last Name field is required</p>}
          </div>
          <div className="grid mb-4 w-full items-center  ">
            <Label htmlFor="email" className="md:text-lg text-sm font-semibold">
              Email Address
            </Label>
            <Input
              {...register('email')}
              className="bg-[#F9F8F8]"
              type="email"
              id="email"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-600 mt-2">Email is required</p>}
            {errors.email && errors.email.type === "pattern" && <p className="text-red-600 mt-2">Invalid email format</p>}
          </div>
          <div className="grid mb-4 w-full items-center">
            <Label
              htmlFor="password"
              className="md:text-lg text-sm font-semibold	"
            >
              Password
            </Label>
            <Input
              {...register('password')}
              className="bg-[#F9F8F8]"
              id="password"
              type="password"
              placeholder="**************"
            />
            {typeof errors.password?.message === 'string' && <p className="text-red-600 mt-2">{errors.password?.message}</p>}
          </div>
          <div className="grid mb-4 w-full items-center">
            <Label
              htmlFor="confirmPassword"
              className="md:text-lg text-sm font-semibold	"
            >
              Confirm Password
            </Label>
            <Input
              {...register('confirmPassword')}
              className="bg-[#F9F8F8]"
              id="confirmPassword"
              type="password"
              placeholder="**************"
            />
            {typeof errors.confirmPassword?.message === 'string' && <p className="text-red-600 mt-2">{errors.confirmPassword?.message}</p>}

          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded-2xl"
              type="submit"
            >
              Register an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
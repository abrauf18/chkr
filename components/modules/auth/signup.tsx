"use client";
import React, { useState } from "react";
import SignupImg from "@/public/images/SignupRightside.svg";
import Google from "@/assets/icons/google-icon";
import Microsoft from "@/assets/icons/microsoft-icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/lib/types";
import { Eye, EyeOff } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";
import { SignUpAction } from "@/actions/auth/auth-action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "@/components/shared/loader";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const { firstName, lastName, email, contactNumber, password } = data;
      const result = await SignUpAction({
        first_name: firstName,
        last_name: lastName,
        email,
        contact_number: contactNumber,
        password,
      });
      if (result.statusCode === 201) {
        toast.success(result.message);
        return push("/login");
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
      className="flex md:w-full mt-6 w-screen rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${SignupImg.src})`,
      }}
    >
      <div className="flex lg:w-[95%] mobile:w-[85%] md:w-full py-6 justify-center items-center">
        <form
          className="bg-white lg:[70%] xl:w-3/4 shadow-md rounded-3xl px-8 pt-6 pb-8 my-10"
          onSubmit={onSubmit}
        >
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
            <div className="px-4">OR</div>
            <div className="flex-1">
              <hr className="line" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mb-4 w-full items-center">
              <Label
                htmlFor="firstName"
                className="md:text-lg text-sm font-medium	"
              >
                First Name{" "}
              </Label>
              <Input
                {...register("firstName")}
                className="bg-[#F9F8F8]"
                id="firstName"
                type="name"
                placeholder="First Name"
              />
              <p className="text-sm text-red-500 mt-1">
                {" "}
                <ErrorMessage errors={errors} name="firstName" />
              </p>
            </div>
            <div className="mb-4 w-full items-center">
              <Label
                htmlFor="fullName"
                className="md:text-lg text-sm font-medium	"
              >
                Last Name{" "}
              </Label>
              <Input
                {...register("lastName")}
                className="bg-[#F9F8F8]"
                id="LastName"
                type="name"
                placeholder="Last Name"
              />
              <p className="text-sm text-red-500 mt-1">
                {" "}
                <ErrorMessage errors={errors} name="lastName" />
              </p>
            </div>
          </div>
          <div className="grid mb-4 w-full items-center  ">
            <Label htmlFor="email" className="md:text-lg text-sm font-medium	">
              Email Address
            </Label>
            <Input
              {...register("email")}
              className="bg-[#F9F8F8]"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            <p className="text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="email" />
            </p>
          </div>
          <div className="grid mb-4 w-full items-center  ">
            <Label htmlFor="email" className="md:text-lg text-sm font-medium	">
              Contact Number
            </Label>
            <Input
              {...register("contactNumber")}
              className="bg-[#F9F8F8]"
              type="number"
              id="contactNumber"
              placeholder="Enter your contact number"
            />
            <p className="text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="contactNumber" />
            </p>
          </div>
          <div className="grid mb-4 w-full items-center">
            <Label
              htmlFor="password"
              className="md:text-lg text-sm font-medium	"
            >
              Password
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("password")}
                className="bg-[#F9F8F8] pr-10 !pt-4"
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
            <p className="text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="password" />
            </p>
          </div>
          <div className="grid mb-4 w-full items-center">
            <Label
              htmlFor="confirmPassword"
              className="md:text-lg text-sm font-medium		"
            >
              Confirm Password
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("confirmPassword")}
                className="bg-[#F9F8F8] !pt-4"
                id="confirmPassword"
                type={showConfirmPassword ? "password" : "text"}
                placeholder="**************"
              />
              <button
                type="button"
                onClick={() => {
                  setShowConfirmPassword((prev) => !prev);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <p className="text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="confirmPassword" />
            </p>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded-3xl"
              type="submit"
            >
              {isloading ? <Loader size={6} /> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


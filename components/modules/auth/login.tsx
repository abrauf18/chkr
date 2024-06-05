"use client";
import React, { useState } from "react";
import loginImg from "@/public/images/login.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Google from "@/assets/icons/google-icon";
import { Button } from "@/components/ui/button";
import Microsoft from "@/assets/icons/microsoft-icon";
import { getSession, signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "@/components/shared/loader";
import { ErrorMessage } from "@hookform/error-message";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const { email, password } = data;
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      const session: any = await getSession();
      if (session) {
        const role = session?.user?.user?.role;
        if (role) {
          toast.success("Logged in successfully");
          if (role === "admin" || role === "super-admin") {
            return router.push(`/${role}/subscription`);
          }
          return router.push(`/${role}/dashboard`);
        }
        return toast.error(session?.user?.message);
      }
    } catch (error) {
      return error;
    } finally{
      setIsLoading(false);
    }
  });

  return (
    <div
      className="flex  md:ml-4 md:w-full mt-6 w-screen rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${loginImg.src})`,
      }}
    >
      <div className="flex w-full py-12 justify-center items-center">
        <form
          className="bg-white w-[90%] md:w-[85%] shadow-md rounded-3xl px-8 py-8"
          onSubmit={onSubmit}
        >
          <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold	mb-6">
            Sign In To Your Account
          </h2>
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
           <p className="text-sm text-red-500 mt-1">
              {" "}
              <ErrorMessage errors={errors} name="email" />
            </p>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label
              htmlFor="password"
              className="md:text-lg text-sm font-semibold"
            >
              Password
            </Label>
            <div className="relative flex items-center">
              <Input
                {...register("password")}
                className="bg-[#F9F8F8] !pt-4"
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

          <div className="flex flex-col md:flex-row mt-6 md:items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox accent-primary h-5 w-5"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <Link
              className="inline-block align-baseline font-bold text-sm text-primary"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button
              className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded-3xl"
              type="submit"
            >
              {isloading ? <Loader size={6} /> : "Sign In with Email"}
            </button>
          </div>
          <div className="mt-5">
            <div className="flex items-center my-4">
              <div className="flex-1">
                <hr className="line" />
              </div>
              <div className="px-4">OR</div>
              <div className="flex-1">
                <hr className="line" />
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <Button className="xl:w-[90%] bg-gray-100 rounded-3xl">
                <Google className="xl:w-[1rem] xl:h-[1rem] mr-2 w-[1rem] h-[1rem]" />
                Google
              </Button>
              <Button className=" xl:w-[90%] bg-gray-100 rounded-3xl">
                <Microsoft className="xl:w-[1rem] xl:h-[1rem] mr-2 w-[1rem] h-[1rem]" />
                Microsoft
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


import React from "react";
import loginImg from "@/app/assets/images/login.png";
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"


export default function ForgetPassword() {
  return (
    <div
      className="flex md:ml-4 md:w-full mt-6 w-screen h-full md:h-screen xl:h-full rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${loginImg.src})`,
      }}
    >
      <div className="flex w-[85%] md:w-full py-6 justify-center items-center">
        <form className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold	mb-6">Forgot Password</h2>
          <p className="md:w-full text-center mb-6 text-sm ">
            Reset your password by providing your registered email address
          </p>
          <hr className="my-6" />
          <div className="grid mb-4 w-full items-center gap-1.5 	">
            <Label htmlFor="email" className="md:text-lg text-sm font-semibold">Email Address</Label>
            <Input
              className="bg-[#F9F8F8]"
              type="email"
              id="email"
              placeholder="Email" />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="w-full bg-primary hover:bg-primaryHover text-white font-medium py-2 px-4 rounded-2xl"
              type="submit"
            >
              Send Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

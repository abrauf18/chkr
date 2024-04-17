import React from "react";
import Image from "next/image";
import loginImg from "@/app/assets/images/login.png";
import google from "@/app/assets/icons/google.svg"
import microsoft from "@/app/assets/icons/microsoft.svg"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Button } from "@/app/components/ui/button"

export default function Signup() {
    return (
        <div
            className="flex md:ml-4 md:w-full mt-6 w-screen rounded-3xl justify-center items-center bg-cover bg-no-repeat md:bg-center"
            style={{
                backgroundImage: `url(${loginImg.src})`,
            }}
        >
            <div className="flex sm:w-[85%] md:w-full py-6 justify-center items-center">
                <form className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-center md:text-2xl text-xl md:font-medium font-bold	mb-6">Create an account</h2>
                    <p className="md:w-full text-center mb-6 text-sm ">
                        Continue with one of the following services:
                    </p>
                    <div className="flex gap-2">
                        <Button className="xl:w-[90%] bg-gray-100 rounded-2xl">
                            <Image
                                src={google}
                                alt="googleLogo"
                                className="xl:w-[1rem] xl:h-[1rem] mr-2 md:w-[1rem] md:h-[1rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
                            />
                            Google
                        </Button>
                        <Button className=" xl:w-[90%] bg-gray-100 rounded-2xl">
                            <Image
                                src={microsoft}
                                alt="microsoftLogo"
                                className="xl:w-[1rem] xl:h-[1rem] mr-2 md:w-[1rem] md:h-[1rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
                            />
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
                        <Label htmlFor="fullName"
                            className="md:text-lg text-sm font-semibold	"
                        >Full Name </Label>
                        <Input
                            className="bg-[#F9F8F8]"
                            id="fullName"
                            type="name"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="grid mb-4 w-full items-center  ">
                        <Label htmlFor="email" className="md:text-lg text-sm font-semibold">Email Address</Label>
                        <Input
                            className="bg-[#F9F8F8]"
                            type="email"
                            id="email"
                            placeholder="Email" />
                    </div>
                    <div className="grid mb-4 w-full items-center">
                        <Label htmlFor="password"
                            className="md:text-lg text-sm font-semibold	"
                        >Password</Label>
                        <Input
                            className="bg-[#F9F8F8]"
                            id="password"
                            type="password"
                            placeholder="**************"
                        />
                    </div>
                    <div className="grid mb-4 w-full items-center">
                        <Label htmlFor="confirmPassword"
                            className="md:text-lg text-sm font-semibold	"
                        >Confirm Password</Label>
                        <Input
                            className="bg-[#F9F8F8]"
                            id="confirmPassword"
                            type="password"
                            placeholder="**************"
                        />
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

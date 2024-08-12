"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import {
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  LogOut,
  HandCoins,
  DollarSign,
} from "lucide-react";
import Image from "next/image";
import Feedback from "./feedback";
import Link from "next/link";
import Stripe from "@/components/shared/stripe";
import { Dialog, DialogTrigger } from "../ui/dialog";
import StripePlans from "./plans-stripe";

export default function UserOptions({
  name,
  role,
  picture,
}: {
  name: string;
  role: string;
  picture: string;
}) {
  const [open, setOpen] = useState(false);
  const [openStripe, setOpenStrip] = useState(false);
  const [openPlanModal, setOpenPlanModal] = useState(false);
  const capitalize = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const userRole = capitalize((role ?? "").replace("-", " "));
  const handleLogout = async () => {
    signOut({
      redirect: true,
      callbackUrl: "/login",
    });
  };
  return (
    <DropdownMenu onOpenChange={(e) => setOpen(e)} open={open}>
      <DropdownMenuTrigger>
        <div className="flex items-center bg-white rounded-3xl p-2">
          <div>
            <Image
              key={picture + Math.random()}
              src={picture}
              height={33}
              width={33}
              alt="user"
              className="rounded-full w-24 h-24 max-w-12 max-h-12"
            />
          </div>
          <div className="flex flex-col mx-3 text-left">
            <h1 className="text-sm lg:text-base whitespace-nowrap">{name}</h1>
            <p className="text-sm text-gray-500">{userRole}</p>
          </div>
          {!open && <ChevronDown className="w-4 h-4" />}
          {open && <ChevronUp className="w-4 h-4" />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1 mt-2 bg-white p-3 border border-white/10 z-[10] menu-shadow rounded-[16px] cursor-pointer">
        <Link href={`/${userRole.toLowerCase().replace(/\s+/g, "-")}/settings`}>
          <div className="flex items-center p-2 gap-2 hover:bg-gray-100 ">
            <CircleUserRound className="w-5 h-5" color="black" />
            <span className="text-[#292D32]">Profile Settings</span>
          </div>
        </Link>
        {(role === "company-admin" || role === "company-employee") && (
          <>
            {role === "company-admin" && (
              <>
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      onClick={() => {
                        setOpenPlanModal(!openPlanModal);
                      }}
                      className="flex items-center p-2 gap-2 hover:bg-gray-100 "
                    >
                      <DollarSign className="w-5 h-5" color="black" />
                      <span className="text-[#292D32]">
                        Manage Subscription
                      </span>
                    </div>
                  </DialogTrigger>
                </Dialog>
                {openPlanModal && (
                  <StripePlans
                    open={openPlanModal}
                    setOpen={setOpenPlanModal}
                    isView
                  />
                )}
              </>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <div
                  onClick={() => {
                    setOpenStrip(!openStripe);
                  }}
                  className="flex items-center p-2 gap-2 hover:bg-gray-100 "
                >
                  <HandCoins className="w-5 h-5" color="black" />
                  <span className="text-[#292D32]">Connect with stripe</span>
                </div>
              </DialogTrigger>
            </Dialog>
            {openStripe && <Stripe open={openStripe} setOpen={setOpenStrip} />}
            <Feedback />
          </>
        )}
        <div
          className="flex items-center p-2 gap-2 hover:bg-gray-100 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" color="#FF2600" />
          <span className="text-primary">Logout</span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


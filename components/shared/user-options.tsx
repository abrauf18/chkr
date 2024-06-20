"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { ChevronDown, ChevronUp, CircleUserRound, LogOut } from "lucide-react";
import Image from "next/image";
import Feedback from "./feedback";
import Link from "next/link";

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
  const userRole = (role ?? "").replace("-", " ");
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
              height={100}
              width={100}
              alt="user"
              className="rounded-full max-w-12 max-h-12"
            />
          </div>
          <div className="flex flex-col mx-3 text-left mobile:hidden">
            <h1 className="text-sm lg:text-base whitespace-nowrap">{name}</h1>
            <p className="text-sm text-gray-500">
              {role === "admin" ? role : userRole}
            </p>
          </div>
          {!open && <ChevronDown className="w-4 h-4" />}
          {open && <ChevronUp className="w-4 h-4" />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1 mt-2 bg-white p-3 border border-white/10 z-[10] menu-shadow rounded-[16px] cursor-pointer">
      <Link href={`/${userRole.toLowerCase().replace(/\s+/g, '-')}/settings`}>
        <div className="flex items-center p-2 gap-2 hover:bg-gray-100 ">
          <CircleUserRound className="w-5 h-5" color="black" />
          <span className="text-[#292D32]">Profile Settings</span>
        </div>
        </Link>
        <Feedback />
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


'use client'
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, CircleUserRound, EllipsisVertical, LogOut, MessageSquareShare, Trash2 } from "lucide-react";
import Image from "next/image";
export default function UserOptions() {
  const [open, setOpen] = useState(false);


  return (
    <DropdownMenu onOpenChange={(e) => setOpen(e)} open={open}>
      <DropdownMenuTrigger
      >
        <div className='flex items-center bg-white rounded-3xl p-2'>
            <div>
              <Image src="/images/user.jpeg" height={8} width={8} alt='user' className='w-8 h-8 rounded-full ' />
            </div>
            <div className='flex flex-col mx-3 text-left'>
              <h1 className='text-sm lg:text-base whitespace-nowrap'>Ayesha Khan</h1>
              <p className='text-sm text-gray-500'>Employee</p>
            </div>
            {!open && <ChevronDown className="w-4 h-4"/> }
            {open && <ChevronUp className="w-4 h-4"/>}
          </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col gap-1 mt-2 bg-white p-3 border border-white/10 z-[10] menu-shadow rounded-[16px]'>
      <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
          <CircleUserRound className="w-5 h-5" color="black" />
          <span className="text-[#292D32]">Profile Settings</span>
        </div>
        <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
          <MessageSquareShare className="w-5 h-5" color="black" />
          <span className="text-gray-800">Submit Feedback</span>
        </div>
        <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
          <LogOut className="w-5 h-5" color="#FF2600" />
          <span className="text-primary">Logout</span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
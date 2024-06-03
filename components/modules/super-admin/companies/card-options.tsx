'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Ban, EllipsisVertical, Trash2 } from "lucide-react";
import CompanyDetailsModal from "./company-details-modal";
import DeleteModal from "../admins/delete-modal";

export default function AccountDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <DropdownMenu onOpenChange={(e) => setOpen(e)} open={open}>
      <DropdownMenuTrigger
        className={cn(
          "outline-none bg-white/10 h-9 w-9 border border-white/10 hover:border-white/20 active:border-white/40 transition-all duration-300 flex items-center justify-center rounded-full",
          open && "border-white/40"
        )}
      >
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col gap-1 mt-2 bg-white p-3 border border-white/10 z-[10] menu-shadow rounded-[16px]'>
        <div>
          <CompanyDetailsModal />
        </div>
          <div className="flex items-center p-2 gap-2 hover:bg-gray-100">
            <Ban className="w-4 h-4" color="gray" />
            <span className="text-gray-600">Disable Company</span>          
          </div>
        {pathname !== '/admin/companies' && (
        <DeleteModal/>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

type OptionType = "alphabetically" | "old" | "new";

export default function Filter({
  searchParams,
}: {
  searchParams?: { order: string; sort: string };
}) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const params = new URLSearchParams(searchParams);
  const { push } = useRouter();

  const toggleOption = async (option: OptionType) => {
    setSelectedOption(option);

    params.delete("order");
    params.delete("sort");

    switch (option) {
      case "alphabetically":
        params.set("sort", "a-z");
        break;
      case "new":
        params.set("order", "newest");
        break;
      case "old":
        params.set("order", "oldest");
        break;
      default:
        break;
    }

    await push(`?${params.toString()}`);
  };

  return (
    <DropdownMenu onOpenChange={(e) => setOpen(e)} open={open}>
      <DropdownMenuTrigger
        className={cn(
          "bg-white py-3 px-5 border border-gray-100 hover:border-white/20 active:border-white/40 gap-2  transition-all duration-300  flex items-center justify-center rounded-3xl",
          open && "border-white/40"
        )}
      >
        <span>Filter</span>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1 mt-2 bg-white p-3 border z-[10] menu-shadow rounded-[16px] mr-2">
        <div
          className="flex items-center gap-2 text-gray-500 p-1 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleOption("alphabetically")}
        >
          <div
            className={cn(
              "w-4 h-4 rounded-md border flex items-center px-[2px]",
              selectedOption === "alphabetically" && "bg-primary"
            )}
          >
            <Check className="w-3 h-3" color="white" strokeWidth={5} />
          </div>
          Alphabetically Order (A-Z)
        </div>
        <div
          className="flex items-center gap-2 text-gray-500 p-1 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleOption("new")}
        >
          <div
            className={cn(
              "w-4 h-4 rounded-md border flex items-center px-[2px]",
              selectedOption === "new" && "bg-primary"
            )}
          >
            <Check className="w-3 h-3" color="white" strokeWidth={5} />
          </div>
          Newest - Oldest
        </div>
        <div
          className="flex items-center gap-2 text-gray-500 p-1 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleOption("old")}
        >
          <div
            className={cn(
              "w-4 h-4 rounded-md border flex items-center px-[2px]",
              selectedOption === "old" && "bg-primary"
            )}
          >
            <Check className="w-3 h-3" color="white" strokeWidth={5} />
          </div>
          Oldest - Newest
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


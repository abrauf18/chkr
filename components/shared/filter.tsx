'use client'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from 'lucide-react';

type OptionType = 'alphabetically' | 'subscription';

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{ [key in OptionType]: boolean }>({
    alphabetically: false,
    subscription: false,
  });

  const toggleOption = (option: OptionType) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [option]: !prevState[option]
    }));
  };

  return (
    <DropdownMenu onOpenChange={(e) => setOpen(e)} open={open}>
      <DropdownMenuTrigger
        className={cn(
          "bg-white py-3 px-5 border border-gray-100 hover:border-white/20 active:border-white/40 gap-2  transition-all duration-300  flex items-center justify-center rounded-3xl",
          open && "border-white/40"
        )}
      >
        Filter
        <ChevronDown className='w-4 h-4' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col gap-1 mt-2 bg-white p-3 border z-[10] menu-shadow rounded-[16px]'>
        <div
          className='flex items-center gap-2 text-gray-500 p-1 hover:bg-gray-50 rounded-lg cursor-pointer'
          onClick={() => toggleOption('alphabetically')}
        >
          <div
            className={cn(
              'w-4 h-4 rounded-md border flex items-center px-[2px]',
              selectedOptions.alphabetically && 'bg-primary'
            )}
          >
            <Check className='w-3 h-3' color='white' strokeWidth={5} />
          </div>
          Alphabetically Order (A-Z)
        </div>
        <div
          className='flex items-center gap-2 text-gray-500 p-1 hover:bg-gray-50 rounded-lg cursor-pointer'
          onClick={() => toggleOption('subscription')}
        >
          <div
            className={cn(
              'w-4 h-4 rounded-md border flex items-center px-[2px]',
              selectedOptions.subscription && 'bg-primary'
            )}
          >
            <Check className='w-3 h-3' color='white' strokeWidth={5} />
          </div>
          Subscription Type
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

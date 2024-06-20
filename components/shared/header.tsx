import React from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import Filter from "./filter";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <div className="flex mobile:flex-col justify-between items-center mt-3">
        <h1 className="text-xl font-bold w-full">{title}</h1>
        <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-end mobile:justify-start w-full ">
          <Filter/>
        </div>
      </div>
    </>
  );
}

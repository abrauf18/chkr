import React from "react";
import Filter from "./filter";
import CreateCompanyModal from "../modules/super-admin/companies/create-company-modal";

interface HeaderProps {
  title: string;
  hideFilter?: boolean;
  isSuperAdmin?: boolean;
}

export default function Header({
  title,
  hideFilter,
  isSuperAdmin,
}: HeaderProps) {
  return (
    <>
      <div className="flex mobile:flex-col justify-between items-center mt-3">
        <h1 className="text-xl font-bold w-full">{title}</h1>
        {!hideFilter && (
          <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-end mobile:justify-start w-full ">
            <Filter />
          </div>
        )}
        {isSuperAdmin && (
          <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-end mobile:justify-start w-full ">
            <CreateCompanyModal />
          </div>
        )}
      </div>
    </>
  );
}


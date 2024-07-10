"use client";
import React, { useState } from "react";
import EmployeeTable from "./employe-table";
import { ITEMS_PER_PAGE, commonFilterQueries } from "@/lib/utils";
import { Users } from "@/lib/interfaces";

export default function Employees({ employees }: { employees: Users[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  if (employees?.length === 0) {
    return (
      <p className="text-center text-gray-700 mt-6">No Employees to show</p>
    );
  }
  const totalPageCount = Math.ceil(employees?.length / ITEMS_PER_PAGE);
  const indexOfLastEmployee = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstEmployee = indexOfLastEmployee - ITEMS_PER_PAGE;
  const currentEmployees = employees?.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <>
      <div className="border rounded-2xl my-3">
        <EmployeeTable
          employees={employees}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPageCount={totalPageCount}
          currentEmployees={currentEmployees}
        />
      </div>
    </>
  );
}


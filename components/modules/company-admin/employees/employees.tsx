"use client";
import React, { useState } from "react";
import AddEmployee from "./add-employee";
import EmployeeTable from "./employe-table";
import Feedback from "@/components/shared/feedback";
import DashboardHeader from "@/components/shared/dashboard-header";
import AdminHeader from "@/components/shared/admin-header";

export interface Employee {
  name: string;
  email: string;
  phone: string;
  availability: string;
}

const employees: Employee[] = [
  {
    name: "Ayesha Khan",
    email: "asha@gmai.com",
    phone: "(629) 555-0129",
    availability: "Assigned",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 555-5555",
    availability: "Available",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 555-1234",
    availability: "Available",
  },
  {
    name: "Michael Lee",
    email: "michael.lee@example.com",
    phone: "(555) 555-6789",
    availability: "Assigned",
  },
  {
    name: "Emma Brown",
    email: "emma.brown@example.com",
    phone: "(555) 555-9876",
    availability: "Available",
  },
  {
    name: "David Johnson",
    email: "david.johnson@example.com",
    phone: "(555) 555-3456",
    availability: "Assigned",
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    phone: "(555) 555-7890",
    availability: "Available",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
    phone: "(555) 555-2345",
    availability: "Assigned",
  },
  {
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phone: "(555) 555-5678",
    availability: "Available",
  },
  {
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "(555) 555-4321",
    availability: "Assigned",
  },
  {
    name: "David Johnson",
    email: "david.johnson@example.com",
    phone: "(555) 555-3456",
    availability: "Assigned",
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    phone: "(555) 555-7890",
    availability: "Available",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
    phone: "(555) 555-2345",
    availability: "Assigned",
  },
  {
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phone: "(555) 555-5678",
    availability: "Available",
  },
  {
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "(555) 555-4321",
    availability: "Assigned",
  },
  // Add more employee objects as needed
];

const ITEMS_PER_PAGE = 10;

export default function Employees() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPageCount = Math.ceil(employees.length / ITEMS_PER_PAGE);
  const indexOfLastEmployee = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstEmployee = indexOfLastEmployee - ITEMS_PER_PAGE;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <>
      <DashboardHeader title="Here’s all completed & ongoing Jobs !" />
      <AdminHeader title="Dashboard" isAdmin={true} isSuperAdmin={false} page="addEmployee" />
      <div>
        <Feedback />
      </div>
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


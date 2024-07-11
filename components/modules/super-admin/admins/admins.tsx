import React from "react";
import AdminTable from "./admin-table";
import { Users } from "@/lib/interfaces";

export default function Admins({ admins }: { admins: Users[] }) {
  if (admins?.length === 0) {
    return <p className="text-center text-gray-700 mt-6">No Admins to show</p>;
  }
  return (
    <div>
      <AdminTable admins={admins} />
    </div>
  );
}


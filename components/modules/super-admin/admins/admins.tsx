import React from "react";
import AdminTable from "./admin-table";
import { Users } from "@/lib/interfaces";

export default function Admins({ admins }: { admins: Users[] }) {
  if (admins?.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-2xl">No Admins</p>
      </div>
    );
  }
  return (
    <div>
      <AdminTable admins={admins} />
    </div>
  );
}


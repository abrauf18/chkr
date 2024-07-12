import React from "react";
import AdminTable from "./admin-table";
import { Users } from "@/lib/interfaces";

export default function Admins({ admins }: { admins: Users[] }) {
  if (admins?.length === 0) {
    return <p className="text-center mt-16">No Admins to show</p>;
  }
  return (
    <div>
      <AdminTable admins={admins} />
    </div>
  );
}


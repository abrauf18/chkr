"use client";
import React, { useState } from "react";
import { ITEMS_PER_PAGE } from "@/lib/utils";
import type { Services as ServicesType } from "@/lib/interfaces";
import ServiceTable from "./service-table";

export default function ServicesComponent({
  services,
}: {
  services: ServicesType[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  if (!Array.isArray(services) || services.length === 0) {
    return (
      <p className="text-center text-gray-700 mt-6">No services to show</p>
    );
  }

  const totalPageCount = Math.ceil(services.length / ITEMS_PER_PAGE);
  const indexOfLastService = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstService = indexOfLastService - ITEMS_PER_PAGE;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  return (
    <>
      <div className="border rounded-2xl my-3">
        <ServiceTable
          services={services}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentServices={currentServices}
          totalPageCount={totalPageCount}
        />
      </div>
    </>
  );
}


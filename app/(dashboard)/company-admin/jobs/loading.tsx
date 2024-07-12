import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <>
      <div className="flex flex-col space-y-3 h-12 w-1/2 bg-white mt-4 p-4 rounded-3xl mb-8">
        <Skeleton className="w-full h-full bg-gray-200 rounded-full" />
      </div>
      <SkeletonLoader />
      <div className="mb-6">
        <SkeletonLoader />
      </div>
    </>
  );
}

export default loading;


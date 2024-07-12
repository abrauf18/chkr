import { Suspense } from "react";
import JobsPage from "./@jobs/page";
import InfoCardPage from "./@infocards/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense
        fallback={
          <div className="flex flex-col space-y-6  mt-4 rounded-3xl">
            <div className="flex space-x-3">
              {/* First Card */}
              <div className="flex-1">
                <Skeleton className="h-[130px] bg-gray-200 rounded-xl" />
              </div>
              {/* Second Card */}
              <div className="flex-1">
                <Skeleton className="h-[130px] bg-gray-200 rounded-xl" />
              </div>
              {/* Third Card (Full Width) */}
              <div className="flex-1">
                <Skeleton className="h-[130px] bg-gray-200 rounded-xl" />
              </div>
            </div>
            {/* Full Width Card */}
            <div className="mt-12">
              <Skeleton className="h-[150px] w-full bg-gray-200 rounded-xl" />
            </div>
          </div>
        }
      >
        <InfoCardPage />
      </Suspense>
      <div className="flex justify-between items-center my-4">
        <span className="text-xl font-semibold">Recent Assigned Jobs</span>
        <Link href="/company-admin/jobs">
          <Button className="rounded-3xl text-white hover:bg-primaryHover">
            View All
          </Button>
        </Link>
      </div>
      <Suspense
        fallback={
          <>
            <SkeletonLoader />
            <div className="mt-10">
              <SkeletonLoader />
            </div>
          </>
        }
      >
        <JobsPage isDashboard />
      </Suspense>
    </>
  );
}


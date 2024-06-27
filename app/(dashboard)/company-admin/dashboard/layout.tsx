import { Suspense } from "react";
import JobsPage from "./@jobs/page";
import AnalyticsPage from "./@analytics/page";
import InfoCardPage from "./@infocards/page";
import Loader from "@/components/shared/loader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96">
            <Loader />
          </div>
        }
      >
        <InfoCardPage />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96">
            <Loader />
          </div>
        }
      >
        <AnalyticsPage />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96">
            <Loader />
          </div>
        }
      >
        <JobsPage isDashboard />
      </Suspense>
    </>
  );
}


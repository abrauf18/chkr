import { Suspense } from "react";
import JobsPage from "./@jobs/page";
import AnalyticsPage from "./@analytics/page";
import Loader from "@/components/shared/loader";

export default function Layout({
  children,
  analytics,
  jobs,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  jobs: React.ReactNode;
}) {
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
        <AnalyticsPage />
      </Suspense>
      <JobsPage isDashboard />
    </>
  );
}


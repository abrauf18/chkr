import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoader() {
  return (
    <div className="flex flex-col space-y-3 mt-4 rounded-3xl">
      <Skeleton className="h-[130px] w-full bg-gray-200 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-gray-200" />
        <Skeleton className="h-4 w-[200px] bg-gray-200" />
      </div>
    </div>
  );
}


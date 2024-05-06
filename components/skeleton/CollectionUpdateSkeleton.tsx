import Skeleton from "@/components/skeleton/Skeleton"

const CollectionUpdateSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 px-6">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[15%] size-sm" />
        <Skeleton className="w-[80%] size-md" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[15%] size-sm" />
        <Skeleton className="w-[80%] size-md" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[15%] size-sm" />
        <Skeleton className="w-[80%] size-md" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[15%] size-sm" />
        <Skeleton className="w-[80%] size-md" />
      </div>
    </div>
  )
}

export default CollectionUpdateSkeleton

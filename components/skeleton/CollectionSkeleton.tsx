import Skeleton from "./Skeleton"

const CollectionSkeleton = ({count=1}:{count ?: number}) => {
  return Array(count).fill(0).map((_,index) => (
    <div key={index} className='flex flex-col gap-2'>
      <Skeleton className="w-full aspect-[3/4.5] !rounded-md" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-[60%] size-sm" />
        <Skeleton className="w-[20%] size-xs" />
      </div>
    </div>
  ))
}

export default CollectionSkeleton

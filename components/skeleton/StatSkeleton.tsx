import Skeleton from "./Skeleton"

const StatSkeleton = ({className, count=1}:{className?:string, count?:number}) => {
  return Array(count).fill(0).map((_,index) => (
    <Skeleton key={index} className={` rounded-lg aspect-[3/1] ${className}`} />
    )
  )
}
export default StatSkeleton
